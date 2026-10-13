# 🛡️ Security Policy & Architecture - Task 05 Capstone

## Overview
This document outlines the security controls, policies, defensive programming practices, and hardening mechanisms implemented for **InternPulse / Internship Management Application Integration (Task 05: Production-Ready Capstone)**.

The integration connects the frontend client board (`Frontend/internship-board`) with the Node.js/Express SQLite REST backend (`Backend/internship-api`) with multi-layered defenses spanning the network, application, database, and client tiers.

---

## 1. Security Controls Summary

| Security Layer | Implementation Mechanism | Purpose & Benefit |
|----------------|--------------------------|-------------------|
| **Security Headers** | Helmet.js middleware | Protects against MIME sniffing, clickjacking, protocol downgrade attacks |
| **Rate Limiting** | `express-rate-limit` | Mitigates brute-force attacks, API scraping, and submission flood / DoS |
| **CORS Policy** | `cors` middleware with configurable origin | Controls cross-origin client access to API resources |
| **Input Validation** | Custom middleware (`validateInternship`, `validateApplication`) | Rejects malformed, incomplete, or out-of-range payloads with HTTP 400 |
| **SQL Injection Protection** | Parameterized queries (`?` placeholders via SQLite3) | Completely neutralizes SQL injection vulnerabilities |
| **Safe Error Handling** | Centralized `errorHandler` & `SyntaxError` catch | Prevents stack trace disclosure and handles malformed JSON safely |
| **Safe Structured Logging** | Custom `logger.js` with `sanitize()` | Logs duration and status while automatically scrubbing passwords, tokens, API keys, and Bearer auth |
| **Health Probe Isolation** | Dedicated `/api/health` with SQLite ping | Exposes runtime uptime and memory diagnostics without revealing internal environment secrets |
| **Secrets & Configuration** | `dotenv` + `.env.example` template | Prevents hardcoding sensitive credentials in source code |
| **Client Duplicate Defense** | In-flight submission locking (`isSubmittingApplication`) | Prevents double-submission and duplicate records from quick clicks |

---

## 2. HTTP Security Headers (Helmet)

The application utilizes **Helmet.js** at the application entrypoint (`src/app.js`):

```javascript
app.use(
  helmet({
    crossOriginResourcePolicy: { policy: 'cross-origin' },
    contentSecurityPolicy: false // Configured for local dashboard inline assets
  })
);
```

### Applied Headers & Protections:
- **`X-Content-Type-Options: nosniff`**: Prevents browsers from MIME-type sniffing away from the declared `Content-Type`.
- **`X-Frame-Options: SAMEORIGIN`**: Protects users from clickjacking attacks by forbidding rendering within foreign iframes.
- **`Strict-Transport-Security (HSTS)`**: Enforces HTTPS connections and prevents SSL stripping attacks.
- **`X-DNS-Prefetch-Control: off`**: Mitigates DNS prefetching to reduce eavesdropping.
- **`X-Download-Options: noopen`**: Prevents Internet Explorer from executing downloads in site context.
- **`X-Permitted-Cross-Domain-Policies: none`**: Blocks Flash and PDF cross-domain policy files.
- **`Referrer-Policy: no-referrer`**: Prevents leaking sensitive URL paths in Referer headers.

---

## 3. Rate Limiting Strategy

To prevent denial of service (DoS), automated scraping, and spam application submissions, rate limiting is implemented via `express-rate-limit`:

### 3.1 Global API Limiter
- **Scope**: Applied to all `/api/*` endpoints.
- **Window**: 15 minutes (`900,000 ms`, configurable via `RATE_LIMIT_WINDOW_MS`).
- **Maximum Requests**: 200 requests per IP address (`RATE_LIMIT_MAX`).
- **Response Headers**: Returns standard IETF headers (`RateLimit-Limit`, `RateLimit-Remaining`, `RateLimit-Reset`).
- **Rejection Behavior**: Responds with HTTP `429 Too Many Requests` when limit is exceeded:
  ```json
  {
    "success": false,
    "message": "Too many requests from this IP, please try again later."
  }
  ```

### 3.2 Application Submission Rate Limiter
- **Scope**: Applied specifically to `POST /api/applications`.
- **Window**: 15 minutes (`900,000 ms`, configurable via `SUBMIT_LIMIT_WINDOW_MS`).
- **Maximum Submissions**: 20 submissions per IP address (`SUBMIT_LIMIT_MAX`).
- **Purpose**: Prevents bots from submitting thousands of junk candidate records or exhausting storage.

---

## 4. Cross-Origin Resource Sharing (CORS)

Cross-Origin Resource Sharing is controlled via environment variables:

```javascript
const corsOrigin = process.env.CORS_ORIGIN || '*';
app.use(
  cors({
    origin: corsOrigin === '*' ? '*' : corsOrigin.split(',').map((o) => o.trim()),
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept']
  })
);
```

- In development, `CORS_ORIGIN=*` permits local development across varied ports (`http://localhost:3000`, `http://localhost:5500`, Live Server).
- In production, set `CORS_ORIGIN=https://your-frontend-domain.com` to restrict API communication exclusively to authorized origins.

---

## 5. Input Validation & Sanitization

Both client-side and server-side validation layers ensure zero trust for incoming input data.

### 5.1 Application Submission Validation Rules (`validateApplication.js`)

| Field | Server Rule | Validation Technique | Status Code on Fail |
|-------|-------------|----------------------|----------------------|
| `internship_id` | Required, Positive Integer, Must Exist | `Number.isInteger(n) && n > 0`, DB verification | 400 (Invalid), 404 (Not Found) |
| `full_name` | Required, String, 2-100 characters | Length bounds, whitespace trimmed | 400 |
| `email` | Required, Valid RFC 5322 format | Regex `/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/` | 400 |
| `phone` | Required, Valid phone number (7-15 digits) | Regex `/^\+?[0-9\s\-().]{7,25}$/` and digit count check | 400 |
| `resume_url` | Required, Valid HTTP/HTTPS URL | `new URL(str)`, protocol check (`http:`, `https:`) | 400 |
| `cover_message` | Optional, String, max 3000 characters | Length constraint check to prevent payload bloat | 400 |

### 5.2 Malformed JSON & Payload Limits
- Express body parsing middleware is constrained with a `1mb` body limit (`express.json({ limit: '1mb' })`).
- Malformed JSON strings (e.g. broken quotes or syntax errors) are intercepted by centralized error middleware (`errorHandler.js`), preventing server crash and responding cleanly with HTTP 400:
  ```json
  {
    "success": false,
    "message": "Malformed JSON payload. Please verify your request body syntax."
  }
  ```

---

## 6. SQL Injection Protection

All database queries without exception utilize **parameterized SQL statements** with SQLite placeholder binding (`?`).

### Implementation Example:
```javascript
// Secure: Parameterized INSERT query
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
```

- User input values are never concatenated directly into SQL strings.
- SQLite parses the SQL structure before substituting parameters, rendering SQL injection impossible.

---

## 7. Environment Variables & Secrets Management

- **Zero Hardcoded Secrets**: All runtime configurations (ports, database paths, origins, rate limit boundaries) reside in environment variables.
- **Repository Hygiene**:
  - The `.env` file is explicitly ignored in `.gitignore`.
  - `.env.example` is maintained in version control as a template without sensitive values.
- **Production Guidance**:
  - Ensure `NODE_ENV=production` in production deployments so that stack traces are suppressed in HTTP 500 error responses.

---

## 8. Client-Side Security & UX Defenses

1. **HTML Escaping**: All dynamic rendering in `Frontend/internship-board/script.js` routes through `escapeHtml()` to prevent Cross-Site Scripting (XSS).
2. **Duplicate In-Flight Submission Blocking**: The application form sets an in-flight flag (`isSubmittingApplication = true`) and disables submit buttons during network requests, preventing double-billing or duplicate records.
3. **Graceful Network Boundaries**: Live API requests include timeout handling, user-friendly error banners, and recovery retry actions.

---

## 9. Safe Structured Logging & Automatic Secret Redaction (Task 05)

To ensure enterprise-grade observability without compliance violations or data leaks, the backend implements a zero-trust logging pipeline (`Backend/internship-api/src/utils/logger.js`):

- **Automatic Field Masking**: Any incoming payload, header, or query containing sensitive keys (`password`, `token`, `secret`, `authorization`, `cookie`, `credit_card`, `apiKey`, `api_key`) is intercepted and masked with `[REDACTED]`.
- **Bearer Token Pattern Scrubbing**: String values matching `Bearer <token>` patterns are stripped using regex before log emission.
- **Leveled Output**: Logs are segregated into `DEBUG`, `INFO`, `WARN`, and `ERROR` levels with ISO 8601 timestamps and request duration metrics (`durationMs`).
- **Test Mode Suppression**: Log noise is silenced during test execution (`NODE_ENV === 'test'`) to ensure clean CI/CD output.

---

## 10. Accessibility & Visual Input Defenses (WCAG 2.5.5)

- **Touch Target Defense**: In accordance with WCAG 2.5.5, all interactive elements (buttons, close icons, dropdown selects, and input fields) have a minimum dimension of `44x44px` to eliminate errant clicks on mobile devices.
- **Focus Indicator Enforcement**: Unambiguous keyboard navigation rings (`:focus-visible`) prevent visual confusion during rapid keyboard input.
- **Screen Reader Announcements**: Form error spans utilize `role="alert"` and form inputs define `aria-required="true"` and `aria-describedby` for assistive technologies.

