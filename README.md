# 🚀 InternPulse - Secure Application Integration (Task 04)

[![Node.js](https://img.shields.io/badge/Node.js-v18+-339933?style=flat&logo=node.js)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express-v5.2.1-000000?style=flat&logo=express)](https://expressjs.com/)
[![SQLite3](https://img.shields.io/badge/SQLite-v6.0.1-003B57?style=flat&logo=sqlite)](https://www.sqlite.org/)
[![Security](https://img.shields.io/badge/Security-Helmet%20%2B%20RateLimit%20%2B%20CORS-blueviolet?style=flat)]()
[![Tests](https://img.shields.io/badge/Tests-25%2F25%20Passing-brightgreen?style=flat)]()
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat)](LICENSE)

An end-to-end, production-grade integration uniting the modern **InternPulse** client-side internship board (`Frontend/internship-board`) with a secure **Node.js + Express + SQLite** RESTful API service (`Backend/internship-api`).

---

## 📋 Table of Contents

1. [Project Overview](#-project-overview)
2. [System Architecture](#-system-architecture)
3. [Setup & Installation](#-setup--installation)
4. [Environment Variables](#-environment-variables)
5. [API Endpoints Reference](#-api-endpoints-reference)
6. [How to Run Backend](#-how-to-run-backend)
7. [How to Run Frontend](#-how-to-run-frontend)
8. [How to Run Tests](#-how-to-run-tests)
9. [Security Checklist](#-security-checklist)
10. [Error Handling & UI States](#-error-handling--ui-states)
11. [Screenshots Section](#-screenshots-section)
12. [Project Structure](#-project-structure)

---

## 🌟 Project Overview

This repository represents the completed **Internship Task 04: Secure Application Integration**. It delivers a fully functional, secure web application where users can:
- **Discover Verified Opportunities**: Browse hand-curated internships across 5 key tech tracks (Web Development, Data Science, AI/ML, UI/UX Design, and Cybersecurity).
- **Search & Filter in Real-Time**: Instant debounced search, domain category filters, work-type filters (Remote, Hybrid, On-site), and sort options.
- **Apply for Internships**: A comprehensive modal application form submitting directly to the backend database via `fetch()`.
- **Experience Resilient State Management**: Explicit visual handling for loading skeletons, network errors with one-click retry, empty results, client-side input validation, and server confirmation banners.
- **Rely on Enterprise Security Controls**: Hardened with Helmet security headers, Express rate limiting, parameterized queries, CORS policies, and strict payload validation.

---

## 🏗️ System Architecture

```text
┌────────────────────────────────────────────────────────────────────────┐
│                   CLIENT TIER (Frontend / Browser)                    │
│                                                                        │
│   HTML5 Semantic Layout  •  CSS3 Custom Properties (Light/Dark Mode)   │
│   Vanilla JavaScript ES6+ (Debounce, State, LocalStorage, Fetch)       │
│                                                                        │
│   • Shimmer Loading Skeleton          • Error State with Retry Button  │
│   • Real-time Filter & Search         • Dialog Modal with Apply Form   │
│   • Client Validation Feedback        • Duplicate Submission Lock      │
└─────────────────────────────────┬──────────────────────────────────────┘
                                  │
                         REST API (fetch / JSON)
                                  │
┌─────────────────────────────────▼──────────────────────────────────────┐
│                  SECURITY & MIDDLEWARE LAYER (Express)                 │
│                                                                        │
│   • Helmet HTTP Security Headers (nosniff, frameguard, HSTS, etc.)     │
│   • Express Rate Limiter (Global API & Dedicated Submission Limiter)   │
│   • CORS Configuration (Configurable Origins via .env)                 │
│   • Request Sanitization & 1MB Body Limit                              │
│   • Malformed JSON & Global Error Handlers                             │
└─────────────────────────────────┬──────────────────────────────────────┘
                                  │
┌─────────────────────────────────▼──────────────────────────────────────┐
│                    BUSINESS LOGIC & CONTROLLER TIER                    │
│                                                                        │
│   • /api/internships   (GET, POST, PUT, DELETE with Pagination)        │
│   • /api/applications  (GET list, GET :id, POST application)          │
│   • /api/health        (Service liveness & health probe)               │
└─────────────────────────────────┬──────────────────────────────────────┘
                                  │
                      Parameterized SQL Queries (?)
                                  │
┌─────────────────────────────────▼──────────────────────────────────────┐
│                   PERSISTENCE TIER (SQLite Database)                   │
│                                                                        │
│   • internships  (id, title, company, domain, stipend, duration...)    │
│   • applications (id, internship_id, full_name, email, phone,          │
│                   resume_url, cover_message, created_at)               │
│   • Foreign Key Cascade Constraints & WAL Journal Mode                 │
└────────────────────────────────────────────────────────────────────────┘
```

---

## ⚙️ Setup & Installation

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher
- Modern web browser (Chrome, Edge, Firefox, Safari)

### 1. Clone or Open Workspace
```bash
cd d:/internship-integration
```

### 2. Install Backend Dependencies
```bash
cd Backend/internship-api
npm install
```

### 3. Initialize the Database
```bash
npm run db:init
npm run db:seed
```

---

## 🔐 Environment Variables

Configuration is handled through environment variables defined in `Backend/internship-api/.env`. A template is provided in `Backend/internship-api/.env.example`.

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `PORT` | `5000` | Port on which the Express server listens |
| `NODE_ENV` | `development` | Environment mode (`development`, `production`, `test`) |
| `DB_PATH` | `./database/internships.db` | Relative or absolute path to SQLite database file |
| `CORS_ORIGIN` | `*` | Allowed CORS origins (`*` or comma-separated URLs) |
| `RATE_LIMIT_WINDOW_MS` | `900000` | Global API rate limit window in ms (15 minutes) |
| `RATE_LIMIT_MAX` | `200` | Maximum requests per IP during window |
| `SUBMIT_LIMIT_WINDOW_MS`| `900000` | Application submission window in ms (15 minutes) |
| `SUBMIT_LIMIT_MAX` | `20` | Maximum application submissions per IP during window |

> [!IMPORTANT]
> The `.env` file contains local system configuration and is excluded from git tracking via `.gitignore`. Never commit `.env` to version control.

---

## 📡 API Endpoints Reference

### 1. Internship Endpoints

| Method | Endpoint | Description | Status Codes |
|--------|----------|-------------|--------------|
| `GET` | `/api/internships` | List paginated internships (supports `page`, `limit`, `domain`, `type`, `search`) | `200` |
| `GET` | `/api/internships/:id` | Retrieve single internship by ID | `200`, `400`, `404` |
| `POST`| `/api/internships` | Create new internship record (validated body) | `201`, `400` |
| `PUT` | `/api/internships/:id` | Update existing internship by ID | `200`, `400`, `404` |
| `DELETE`| `/api/internships/:id` | Remove internship by ID | `200`, `400`, `404` |

### 2. Application Endpoints (Task 04)

| Method | Endpoint | Description | Status Codes |
|--------|----------|-------------|--------------|
| `POST` | `/api/applications` | Submit new internship candidate application | `201`, `400`, `404` |
| `GET` | `/api/applications` | List candidate applications (paginated, supports `internship_id`, `email`) | `200` |
| `GET` | `/api/applications/:id` | Retrieve single candidate application by ID | `200`, `400`, `404` |

### 3. System & Diagnostic Endpoints

| Method | Endpoint | Description | Status Codes |
|--------|----------|-------------|--------------|
| `GET` | `/api/health` | Service health check | `200` |
| `GET` | `/api/test-rate-limit` | Test diagnostic endpoint (verifies 429 response) | `200`, `429` |
| `GET` | `/` | Serves Frontend or API JSON documentation | `200` |
| `GET` | `/board` | Serves Frontend Web Application | `200` |
| `GET` | `/dashboard` | Serves Backend API Dashboard | `200` |

---

## 🚀 How to Run Backend

From the repository root or backend directory:

```bash
# Option A: From workspace root
npm start

# Option B: From Backend/internship-api directory
cd Backend/internship-api
npm start
```

For live development with auto-reload:
```bash
cd Backend/internship-api
npm run dev
```

Once started:
- **Base URL**: `http://localhost:5000`
- **Health Check**: `http://localhost:5000/api/health`
- **API Documentation**: `http://localhost:5000/`

---

## 💻 How to Run Frontend

The frontend is fully integrated and can be run in two convenient ways:

### Option 1: Direct via Integrated Backend (Recommended)
With the backend server running, navigate directly to:
👉 **`http://localhost:5000/board/`** or **`http://localhost:5000/`**

### Option 2: Standalone Static Server / Live Server
Open `Frontend/internship-board/index.html` using:
- **VS Code Live Server**: Right-click `index.html` ➔ "Open with Live Server" (`http://localhost:5500`)
- **Python HTTP Server**:
  ```bash
  cd Frontend/internship-board
  python -m http.server 3000
  ```
  Open `http://localhost:3000`.

The frontend script dynamically connects to `http://localhost:5000` regardless of the hosting port.

---

## 🧪 How to Run Tests

The automated test runner executes **25 comprehensive integration test cases**:

```bash
# Option A: From workspace root
npm test

# Option B: From Backend/internship-api directory
cd Backend/internship-api
npm test
```

### Test Scope:
- Security headers verification (Helmet nosniff, frameguard)
- CORS preflight and allowed origins
- Rate limiting headers and 429 enforcement
- Malformed JSON body handling
- Internship listing, pagination, filtering, and CRUD operations
- Application field validation (Required fields, Email, Phone, Resume URL)
- Application submission to non-existent internship (404)
- Valid application submission and SQLite persistence
- Application retrieval by ID and collection listing
- Undefined route handling (404)

See [`TEST-REPORT.md`](file:///d:/internship-integration/TEST-REPORT.md) for full results.

---

## 🛡️ Security Checklist

All Task 04 security specifications have been implemented and verified:

- [x] **Helmet Security Headers**: Active on all HTTP responses (`X-Content-Type-Options`, `X-Frame-Options`, `Strict-Transport-Security`, etc.).
- [x] **Rate Limiting**: `express-rate-limit` safeguards `/api/*` (200 requests/15m) and `POST /api/applications` (20 submissions/15m).
- [x] **CORS Configuration**: Configured with explicit methods and allowed headers; configurable via `CORS_ORIGIN`.
- [x] **Server-side Validation**: Strict validation middleware (`validateApplication.js`) rejects missing or invalid fields with HTTP 400.
- [x] **Client-side Validation**: Instant UI error messages for Name, Email format, Phone format, and Resume URL before network transmission.
- [x] **SQL Injection Defense**: 100% of SQLite database queries use parameterized placeholders (`?`).
- [x] **Secrets Protection**: Environment variables used for configuration; `.env` excluded in `.gitignore`.
- [x] **Malformed Request Safety**: Centralized error middleware intercepts syntax errors in JSON payloads.
- [x] **Duplicate Submission Prevention**: UI locks submission in-flight (`isSubmittingApplication`), disabling submit buttons and displaying spinners.

For complete architectural details, see [`SECURITY.md`](file:///d:/internship-integration/SECURITY.md).

---

## 🔄 Error Handling & UI States

The frontend provides clear, accessible UI states for every interaction:

1. **Loading State**: Shimmering skeleton cards pulse while listings are fetched asynchronously.
2. **Empty State**: Friendly graphic and descriptive message when no internships match current filters, with a "Reset All Filters" button.
3. **API Failure State**: Illustrated error boundary displaying the exact connection issue and an interactive "Retry Now" button.
4. **Retry Flow**: Clicking "Retry Now" immediately triggers a fresh API request without requiring a page refresh.
5. **Form Validation Feedback**: Red borders and descriptive error labels under each field requiring correction.
6. **Submitting State**: Spinner animation with "Submitting Application..." label; button disabled to block double-clicks.
7. **Success Feedback**: Emerald alert banner inside the modal displaying the generated reference ID and confirmation toast.
8. **Failure Feedback**: Rose alert banner displaying server-returned error messages without clearing the user's filled data.

---

## 📸 Screenshots Section

### 1. Internship Board Grid (Loaded from REST API)
*Responsive desktop and mobile layout displaying live opportunities fetched from SQLite database.*

### 2. Application Form Modal
*Accessible modal featuring candidate input fields (Full Name, Email, Phone, Resume URL, Cover Message) with role identifier badge.*

### 3. Client & Server Validation States
*Real-time validation error messaging for invalid emails, phone formats, and URLs.*

### 4. Successful Submission Banner
*Confirmation banner showing reference ID upon successful SQLite persistence.*

### 5. Error State with Retry Button
*Simulated network failure view with one-click recovery.*

---

## 📁 Project Structure

```text
internship-integration/
├── Backend/
│   └── internship-api/
│       ├── database/
│       │   ├── db.js              # SQLite connection & query helper
│       │   ├── init.js            # Database schema & seed initialization
│       │   ├── schema.sql         # Table definitions (internships, applications)
│       │   ├── seed.sql           # Initial verified internship records
│       │   └── internships.db     # SQLite database file
│       ├── public/
│       │   └── index.html         # API dashboard
│       ├── src/
│       │   ├── app.js             # Express app, Helmet, CORS, Rate Limiters
│       │   ├── server.js          # HTTP server listener & graceful shutdown
│       │   ├── controllers/
│       │   │   ├── applicationController.js  # Application business logic
│       │   │   └── internshipController.js   # Internship CRUD logic
│       │   ├── middlewares/
│       │   │   ├── errorHandler.js          # Centralized error handler
│       │   │   ├── notFound.js              # 404 handler
│       │   │   ├── validateApplication.js   # Application submission validation
│       │   │   └── validateInternship.js    # Internship validation
│       │   └── routes/
│       │       ├── applicationRoutes.js     # /api/applications routes
│       │       └── internshipRoutes.js      # /api/internships routes
│       ├── tests/
│       │   └── run-tests.js       # 25 automated API tests
│       ├── .env                   # Local environment configuration
│       ├── .env.example           # Environment template
│       ├── .gitignore             # Git ignore patterns
│       └── package.json           # Backend npm configuration
├── Frontend/
│   └── internship-board/
│       ├── index.html             # Main responsive HTML5 board & modal
│       ├── script.js              # State, fetch, validation, and rendering
│       ├── style.css              # Custom responsive CSS design system
│       └── README.md              # Frontend documentation
├── SECURITY.md                    # Comprehensive security documentation
├── TEST-REPORT.md                 # Full test matrix & verification results
├── README.md                      # Workspace documentation (this file)
└── package.json                   # Workspace root npm script runner
```
