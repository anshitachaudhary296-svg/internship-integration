/**
 * Application Routes
 * 
 * Defines endpoints for /api/applications:
 * - POST /api/applications       -> Submit candidate application
 * - GET  /api/applications       -> List paginated applications
 * - GET  /api/applications/:id   -> Retrieve application by ID
 */

const express = require('express');
const router = express.Router();

const {
  createApplication,
  getApplications,
  getApplicationById
} = require('../controllers/applicationController');

const { validateApplication } = require('../middlewares/validateApplication');

// GET /api/applications - List applications with pagination and filters
router.get('/', getApplications);

// GET /api/applications/:id - Retrieve single application by ID
router.get('/:id', getApplicationById);

// POST /api/applications - Submit candidate application (validated)
router.post('/', validateApplication, createApplication);

module.exports = router;
