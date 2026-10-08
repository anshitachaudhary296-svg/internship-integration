/**
 * Application Controller
 * 
 * Handles business logic and SQLite persistence for candidate applications:
 * - Submitting new applications (POST /api/applications)
 * - Fetching application lists (GET /api/applications)
 * - Fetching application details (GET /api/applications/:id)
 * 
 * Uses 100% parameterized SQL queries to prevent SQL injection.
 */

const { query } = require('../../database/db');

/**
 * POST /api/applications
 * Submit a new application for a verified internship
 */
async function createApplication(req, res, next) {
  try {
    const {
      internship_id,
      full_name,
      email,
      phone,
      resume_url,
      cover_message
    } = req.body;

    // Verify the target internship actually exists in the database
    const internship = await query.get(
      'SELECT id, title, company FROM internships WHERE id = ?;',
      [internship_id]
    );

    if (!internship) {
      return res.status(404).json({
        success: false,
        message: `Internship with ID ${internship_id} not found`
      });
    }

    // Insert new application using parameterized query
    const insertSql = `
      INSERT INTO applications (internship_id, full_name, email, phone, resume_url, cover_message)
      VALUES (?, ?, ?, ?, ?, ?);
    `;

    const result = await query.run(insertSql, [
      internship_id,
      full_name,
      email,
      phone,
      resume_url,
      cover_message || ''
    ]);

    // Retrieve the inserted application record with joined internship metadata
    const newApplication = await query.get(
      `SELECT a.*, i.title AS internship_title, i.company AS internship_company
       FROM applications a
       LEFT JOIN internships i ON a.internship_id = i.id
       WHERE a.id = ?;`,
      [result.lastID]
    );

    return res.status(201).json({
      success: true,
      message: 'Application submitted successfully',
      data: newApplication
    });
  } catch (error) {
    next(error);
  }
}

/**
 * GET /api/applications
 * Retrieve a paginated list of candidate applications with optional filters
 */
async function getApplications(req, res, next) {
  try {
    // Parse pagination parameters
    let page = parseInt(req.query.page, 10);
    let limit = parseInt(req.query.limit, 10);

    if (isNaN(page) || page < 1) page = 1;
    if (isNaN(limit) || limit < 1) limit = 10;
    if (limit > 100) limit = 100;

    const offset = (page - 1) * limit;

    // Optional query filtering
    const { internship_id, email } = req.query;
    const conditions = [];
    const params = [];

    if (internship_id) {
      const parsedInternId = parseInt(internship_id, 10);
      if (!isNaN(parsedInternId) && parsedInternId > 0) {
        conditions.push('a.internship_id = ?');
        params.push(parsedInternId);
      }
    }

    if (email && typeof email === 'string' && email.trim()) {
      conditions.push('LOWER(a.email) = LOWER(?)');
      params.push(email.trim());
    }

    const whereClause = conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : '';

    // Count total matching records
    const countSql = `SELECT COUNT(*) AS total FROM applications a ${whereClause};`;
    const countRow = await query.get(countSql, params);
    const totalRecords = countRow ? countRow.total : 0;

    // Fetch records with pagination and join internship metadata
    const dataSql = `
      SELECT a.*, i.title AS internship_title, i.company AS internship_company
      FROM applications a
      LEFT JOIN internships i ON a.internship_id = i.id
      ${whereClause}
      ORDER BY a.id DESC
      LIMIT ? OFFSET ?;
    `;
    const queryParams = [...params, limit, offset];
    const applications = await query.all(dataSql, queryParams);

    const totalPages = Math.ceil(totalRecords / limit) || 1;
    const hasNextPage = page < totalPages;
    const hasPrevPage = page > 1;

    return res.status(200).json({
      success: true,
      message: 'Applications retrieved successfully',
      pagination: {
        currentPage: page,
        limit,
        totalRecords,
        totalPages,
        hasNextPage,
        hasPrevPage
      },
      data: applications
    });
  } catch (error) {
    next(error);
  }
}

/**
 * GET /api/applications/:id
 * Retrieve a single application by unique ID
 */
async function getApplicationById(req, res, next) {
  try {
    const { id } = req.params;
    const parsedId = parseInt(id, 10);

    if (isNaN(parsedId) || parsedId < 1) {
      return res.status(400).json({
        success: false,
        message: 'Invalid application ID. ID must be a positive integer.'
      });
    }

    const application = await query.get(
      `SELECT a.*, i.title AS internship_title, i.company AS internship_company
       FROM applications a
       LEFT JOIN internships i ON a.internship_id = i.id
       WHERE a.id = ?;`,
      [parsedId]
    );

    if (!application) {
      return res.status(404).json({
        success: false,
        message: `Application with ID ${parsedId} not found`
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Application retrieved successfully',
      data: application
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createApplication,
  getApplications,
  getApplicationById
};
