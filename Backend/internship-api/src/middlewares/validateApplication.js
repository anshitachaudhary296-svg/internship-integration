/**
 * Validation Middleware for Application Data
 * 
 * Enforces client and server validation requirements:
 * - internship_id: positive integer
 * - full_name: required non-empty string (2-100 chars)
 * - email: required valid email format
 * - phone: required valid phone number (7-15 digits)
 * - resume_url: required valid HTTP/HTTPS URL
 * - cover_message: optional string (max 3000 chars)
 */

function isValidUrl(string) {
  try {
    const parsed = new URL(string);
    return parsed.protocol === 'http:' || parsed.protocol === 'https:';
  } catch {
    return false;
  }
}

function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return typeof email === 'string' && emailRegex.test(email.trim());
}

function isValidPhone(phone) {
  if (typeof phone !== 'string') return false;
  const trimmed = phone.trim();
  const phonePattern = /^\+?[0-9\s\-().]{7,25}$/;
  if (!phonePattern.test(trimmed)) return false;
  const digitsOnly = trimmed.replace(/\D/g, '');
  return digitsOnly.length >= 7 && digitsOnly.length <= 15;
}

function validateApplication(req, res, next) {
  const {
    internship_id,
    full_name,
    email,
    phone,
    resume_url,
    cover_message
  } = req.body || {};

  const errors = [];

  // 1. Validate internship_id
  const parsedInternshipId = Number(internship_id);
  if (
    internship_id === undefined ||
    internship_id === null ||
    internship_id === '' ||
    isNaN(parsedInternshipId) ||
    !Number.isInteger(parsedInternshipId) ||
    parsedInternshipId < 1
  ) {
    errors.push({
      field: 'internship_id',
      message: 'Internship ID is required and must be a positive integer.'
    });
  }

  // 2. Validate full_name
  if (!full_name || typeof full_name !== 'string' || full_name.trim() === '') {
    errors.push({
      field: 'full_name',
      message: 'Full Name is required and must be a non-empty string.'
    });
  } else if (full_name.trim().length < 2) {
    errors.push({
      field: 'full_name',
      message: 'Full Name must be at least 2 characters long.'
    });
  } else if (full_name.trim().length > 100) {
    errors.push({
      field: 'full_name',
      message: 'Full Name cannot exceed 100 characters.'
    });
  }

  // 3. Validate email
  if (!email || typeof email !== 'string' || email.trim() === '') {
    errors.push({
      field: 'email',
      message: 'Email address is required.'
    });
  } else if (!isValidEmail(email)) {
    errors.push({
      field: 'email',
      message: 'A valid email address is required (e.g., alex@example.com).'
    });
  }

  // 4. Validate phone
  if (!phone || typeof phone !== 'string' || phone.trim() === '') {
    errors.push({
      field: 'phone',
      message: 'Phone number is required.'
    });
  } else if (!isValidPhone(phone)) {
    errors.push({
      field: 'phone',
      message: 'A valid phone number is required (7-15 digits, e.g., +1 555-123-4567).'
    });
  }

  // 5. Validate resume_url
  if (!resume_url || typeof resume_url !== 'string' || resume_url.trim() === '') {
    errors.push({
      field: 'resume_url',
      message: 'Resume URL is required.'
    });
  } else if (!isValidUrl(resume_url.trim())) {
    errors.push({
      field: 'resume_url',
      message: 'Resume URL must be a valid HTTP or HTTPS web address.'
    });
  }

  // 6. Validate cover_message (optional)
  if (cover_message !== undefined && cover_message !== null) {
    if (typeof cover_message !== 'string') {
      errors.push({
        field: 'cover_message',
        message: 'Cover message must be a string.'
      });
    } else if (cover_message.trim().length > 3000) {
      errors.push({
        field: 'cover_message',
        message: 'Cover message cannot exceed 3000 characters.'
      });
    }
  }

  // If validation errors collected, respond with 400 Bad Request
  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed. Please correct the specified fields.',
      errors
    });
  }

  // Sanitize and normalize fields on req.body
  req.body.internship_id = parsedInternshipId;
  req.body.full_name = full_name.trim();
  req.body.email = email.trim().toLowerCase();
  req.body.phone = phone.trim();
  req.body.resume_url = resume_url.trim();
  req.body.cover_message = cover_message ? cover_message.trim() : '';

  next();
}

module.exports = { validateApplication, isValidUrl, isValidEmail, isValidPhone };
