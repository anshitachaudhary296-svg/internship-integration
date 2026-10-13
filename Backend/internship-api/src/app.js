/**
 * Express Application Configuration
 * 
 * Sets up middleware, security headers (Helmet), CORS,
 * Rate Limiting, static assets, and REST API routing.
 */

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const path = require('path');
require('dotenv').config();

const internshipRoutes = require('./routes/internshipRoutes');
const applicationRoutes = require('./routes/applicationRoutes');
const { notFound } = require('./middlewares/notFound');
const { errorHandler } = require('./middlewares/errorHandler');
const { requestLogger } = require('./middlewares/logger');
const { query } = require('../database/db');

const app = express();

// ============================================================
// 1. Security Headers (Helmet)
// ============================================================
app.use(
  helmet({
    crossOriginResourcePolicy: { policy: 'cross-origin' },
    contentSecurityPolicy: false // Allows inline styles/scripts for local dashboard
  })
);

// ============================================================
// 2. CORS Configuration
// ============================================================
const corsOrigin = process.env.CORS_ORIGIN || '*';
app.use(
  cors({
    origin: corsOrigin === '*' ? '*' : corsOrigin.split(',').map((o) => o.trim()),
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept']
  })
);

// ============================================================
// 3. Request Logging (Safe & Structured)
// ============================================================
app.use(requestLogger);
if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('dev'));
}

// ============================================================
// 4. Rate Limiting
// ============================================================
const apiLimiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000', 10), // 15 mins
  max: parseInt(
    process.env.RATE_LIMIT_MAX || (process.env.NODE_ENV === 'test' ? '1000' : '200'),
    10
  ),
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many requests from this IP, please try again later.'
  }
});

const applicationSubmitLimiter = rateLimit({
  windowMs: parseInt(process.env.SUBMIT_LIMIT_WINDOW_MS || '900000', 10),
  max: parseInt(
    process.env.SUBMIT_LIMIT_MAX || (process.env.NODE_ENV === 'test' ? '1000' : '20'),
    10
  ),
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many applications submitted from this IP, please try again later.'
  }
});

// Apply global rate limiter to all /api/ endpoints
app.use('/api/', apiLimiter);

// Special diagnostic route to verify rate limiting behavior
const strictTestLimiter = rateLimit({
  windowMs: 60000,
  max: 2,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Rate limit exceeded on test route'
  }
});
app.get('/api/test-rate-limit', strictTestLimiter, (req, res) => {
  res.status(200).json({ success: true, message: 'Under limit' });
});

// ============================================================
// 5. Body Parsing Middleware
// ============================================================
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true, limit: '1mb' }));

// ============================================================
// 6. Static File Serving
// ============================================================
// Serve API Dashboard
app.use('/dashboard', express.static(path.join(__dirname, '../public')));

// Detect frontend directory path robustly
const fs = require('fs');
const frontendDir = [
  path.resolve(__dirname, '../../../Frontend/internship-board'),
  path.resolve(__dirname, '../../Frontend/internship-board'),
  path.resolve(__dirname, '../Frontend/internship-board')
].find((dir) => fs.existsSync(dir)) || path.resolve(__dirname, '../../../Frontend/internship-board');

// ============================================================
// 7. Root & Health Endpoints
// ============================================================
app.get('/', (req, res, next) => {
  const accept = req.headers.accept || '';
  if (accept.includes('application/json') && !accept.includes('text/html')) {
    return res.status(200).json({
      success: true,
      message: 'Welcome to the Internship REST API 🚀',
      frontend: 'http://localhost:5000/',
      dashboard: 'http://localhost:5000/dashboard',
      documentation: {
        endpoints: {
          listInternships: 'GET /api/internships?page=1&limit=5',
          getInternshipById: 'GET /api/internships/:id',
          createInternship: 'POST /api/internships',
          updateInternship: 'PUT /api/internships/:id',
          deleteInternship: 'DELETE /api/internships/:id',
          listApplications: 'GET /api/applications?page=1&limit=10',
          getApplicationById: 'GET /api/applications/:id',
          submitApplication: 'POST /api/applications',
          health: 'GET /api/health'
        }
      }
    });
  }

  // In browser, serve the frontend internship board directly
  const indexPath = path.join(frontendDir, 'index.html');
  if (fs.existsSync(indexPath)) {
    return res.sendFile(indexPath);
  }
  next();
});

// Serve frontend assets (style.css, script.js, etc.) at root as well as /board and /app
app.use(express.static(frontendDir));
app.use('/board', express.static(frontendDir));
app.use('/app', express.static(frontendDir));

app.get('/api/health', async (req, res) => {
  const startTime = Date.now();
  try {
    // Actively verify database liveness
    await query.get('SELECT 1 AS alive;');
    const dbPingMs = Date.now() - startTime;
    const mem = process.memoryUsage();

    res.status(200).json({
      success: true,
      status: 'healthy',
      timestamp: new Date().toISOString(),
      uptimeSeconds: Math.floor(process.uptime()),
      environment: process.env.NODE_ENV || 'development',
      nodeVersion: process.version,
      database: {
        status: 'connected',
        engine: 'SQLite3',
        pingMs: dbPingMs
      },
      memory: {
        heapUsedMB: Math.round((mem.heapUsed / 1024 / 1024) * 100) / 100,
        heapTotalMB: Math.round((mem.heapTotal / 1024 / 1024) * 100) / 100,
        rssMB: Math.round((mem.rss / 1024 / 1024) * 100) / 100
      }
    });
  } catch (err) {
    res.status(503).json({
      success: false,
      status: 'unhealthy',
      message: 'Database connection failed',
      timestamp: new Date().toISOString(),
      database: {
        status: 'disconnected',
        error: process.env.NODE_ENV === 'development' ? err.message : 'Database ping failure'
      }
    });
  }
});

// ============================================================
// 8. REST API Routes
// ============================================================
app.use('/api/internships', internshipRoutes);
app.use('/api/applications', applicationSubmitLimiter, applicationRoutes);

// ============================================================
// 9. Error Handling Middlewares
// ============================================================
app.use(notFound);
app.use(errorHandler);

module.exports = app;
