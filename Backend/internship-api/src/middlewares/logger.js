/**
 * Express HTTP Request Logger Middleware
 * 
 * Safely logs incoming requests and responses with latency, status codes,
 * and client IP, while completely suppressing and redacting sensitive credentials.
 */

const { logger, sanitize } = require('../utils/logger');

function requestLogger(req, res, next) {
  if (process.env.NODE_ENV === 'test') {
    return next();
  }

  const startTime = Date.now();
  const { method, originalUrl, ip } = req;

  res.on('finish', () => {
    const duration = Date.now() - startTime;
    const statusCode = res.statusCode;
    const contentLength = res.get('content-length') || 0;

    const logPayload = {
      method,
      url: originalUrl.split('?')[0], // Base path
      status: statusCode,
      durationMs: duration,
      ip: ip || req.socket.remoteAddress,
      sizeBytes: Number(contentLength)
    };

    // If query parameters exist, sanitize before attaching
    if (req.query && Object.keys(req.query).length > 0) {
      logPayload.query = sanitize(req.query);
    }

    const message = `${method} ${originalUrl} ${statusCode} (${duration}ms)`;

    if (statusCode >= 500) {
      logger.error(`Server Error: ${message}`, logPayload);
    } else if (statusCode >= 400) {
      logger.warn(`Client Notice: ${message}`, logPayload);
    } else {
      logger.info(message, logPayload);
    }
  });

  next();
}

module.exports = { requestLogger };
