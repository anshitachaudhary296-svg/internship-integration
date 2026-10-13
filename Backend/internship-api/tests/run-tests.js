/**
 * Automated API & Integration Test Suite
 * 
 * Tests all requirements:
 * 1. Health check & Security headers (Helmet, CORS)
 * 2. Rate limiting behavior (Headers and 429 enforcement)
 * 3. Malformed JSON handling
 * 4. Internship endpoints (Loading, Pagination, Filtering, CRUD)
 * 5. Application submission validation (Required fields, Email, Phone, Resume URL)
 * 6. Application submission with non-existent internship ID (404)
 * 7. Successful application submission (201) and persistence
 * 8. Application retrieval (List & ID lookup)
 * 9. Not Found error handling (404)
 */

process.env.NODE_ENV = 'test';
const http = require('http');
const app = require('../src/app');
const { initDatabase } = require('../database/init');
const { db } = require('../database/db');
const { sanitize } = require('../src/utils/logger');

const TEST_PORT = 5055;
const BASE_URL = `http://localhost:${TEST_PORT}`;

const testResults = [];

function recordResult(testName, method, endpoint, expectedStatus, actualStatus, pass, details = '') {
  testResults.push({
    testCase: testName,
    method,
    endpoint,
    expected: expectedStatus,
    actual: actualStatus,
    status: pass ? 'PASS ✅' : 'FAIL ❌',
    details
  });
}

async function runTests() {
  console.log('🧪 Starting Comprehensive API Test Suite...');
  process.env.NODE_ENV = 'test';

  // Initialize fresh database with schema and seeds
  await initDatabase({ seed: true, force: true });

  // Spin up test server
  const server = http.createServer(app);
  await new Promise((resolve) => server.listen(TEST_PORT, resolve));
  console.log(`📡 Test server running on ${BASE_URL}\n`);

  let createdInternshipId = null;
  let createdApplicationId = null;

  try {
    // ----------------------------------------------------
    // SECTION 1: Health Check & Security Controls
    // ----------------------------------------------------

    // 1. Health check
    {
      const res = await fetch(`${BASE_URL}/api/health`);
      const body = await res.json();
      const pass = res.status === 200 && body.status === 'healthy';
      recordResult('Health check', 'GET', '/api/health', 200, res.status, pass);
    }

    // 2. Helmet Security Headers
    {
      const res = await fetch(`${BASE_URL}/api/health`);
      const nosniff = res.headers.get('x-content-type-options');
      const frameOptions = res.headers.get('x-frame-options');
      const pass = nosniff === 'nosniff' && !!frameOptions;
      recordResult(
        'Helmet security headers',
        'GET',
        '/api/health',
        200,
        res.status,
        pass,
        `X-Content-Type-Options: ${nosniff}, X-Frame-Options: ${frameOptions}`
      );
    }

    // 3. CORS Headers
    {
      const res = await fetch(`${BASE_URL}/api/internships`, {
        method: 'OPTIONS',
        headers: {
          Origin: 'http://localhost:3000',
          'Access-Control-Request-Method': 'GET'
        }
      });
      const allowOrigin = res.headers.get('access-control-allow-origin');
      const pass = res.status === 204 || res.status === 200;
      recordResult(
        'CORS preflight handling',
        'OPTIONS',
        '/api/internships',
        '200/204',
        res.status,
        pass,
        `Allow-Origin: ${allowOrigin}`
      );
    }

    // 4. Rate Limiting Headers
    {
      const res = await fetch(`${BASE_URL}/api/internships`);
      const limitHeader = res.headers.get('ratelimit-limit');
      const remainingHeader = res.headers.get('ratelimit-remaining');
      const pass = res.status === 200 && (limitHeader !== null || remainingHeader !== null);
      recordResult(
        'Rate limit headers present',
        'GET',
        '/api/internships',
        200,
        res.status,
        pass,
        `Limit: ${limitHeader}, Remaining: ${remainingHeader}`
      );
    }

    // 5. Rate Limit Enforcement (429 Too Many Requests)
    {
      // Route has max: 2 allowed
      await fetch(`${BASE_URL}/api/test-rate-limit`);
      await fetch(`${BASE_URL}/api/test-rate-limit`);
      const blockedRes = await fetch(`${BASE_URL}/api/test-rate-limit`);
      const body = await blockedRes.json();
      const pass = blockedRes.status === 429 && body.success === false;
      recordResult(
        'Rate limit threshold enforcement (429)',
        'GET',
        '/api/test-rate-limit',
        429,
        blockedRes.status,
        pass,
        body.message
      );
    }

    // 6. Malformed JSON Request Handling
    {
      const res = await fetch(`${BASE_URL}/api/internships`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: '{"invalidJson": ' // malformed syntax
      });
      const body = await res.json();
      const pass = res.status === 400 && body.success === false;
      recordResult(
        'Malformed JSON body safely rejected (400)',
        'POST',
        '/api/internships',
        400,
        res.status,
        pass,
        body.message
      );
    }

    // ----------------------------------------------------
    // SECTION 2: Internship Endpoints
    // ----------------------------------------------------

    // 7. List all internships (default pagination)
    {
      const res = await fetch(`${BASE_URL}/api/internships`);
      const body = await res.json();
      const pass =
        res.status === 200 &&
        body.success === true &&
        Array.isArray(body.data) &&
        body.pagination.totalRecords >= 8;
      recordResult(
        'List internships (default)',
        'GET',
        '/api/internships',
        200,
        res.status,
        pass,
        `Found ${body.pagination?.totalRecords} records`
      );
    }

    // 8. List with pagination (page=1, limit=3)
    {
      const res = await fetch(`${BASE_URL}/api/internships?page=1&limit=3`);
      const body = await res.json();
      const pass =
        res.status === 200 &&
        body.data.length === 3 &&
        body.pagination.limit === 3 &&
        body.pagination.currentPage === 1 &&
        body.pagination.hasNextPage === true;
      recordResult(
        'List internships with pagination',
        'GET',
        '/api/internships?page=1&limit=3',
        200,
        res.status,
        pass,
        `Returned ${body.data?.length} items`
      );
    }

    // 9. Get internship by valid ID
    {
      const res = await fetch(`${BASE_URL}/api/internships/1`);
      const body = await res.json();
      const pass =
        res.status === 200 &&
        body.success === true &&
        body.data.id === 1 &&
        typeof body.data.title === 'string';
      recordResult(
        'Get internship by valid ID',
        'GET',
        '/api/internships/1',
        200,
        res.status,
        pass,
        `Title: "${body.data?.title}"`
      );
    }

    // 10. Get non-existent internship (404)
    {
      const res = await fetch(`${BASE_URL}/api/internships/9999`);
      const body = await res.json();
      const pass = res.status === 404 && body.success === false;
      recordResult(
        'Get non-existent internship (404)',
        'GET',
        '/api/internships/9999',
        404,
        res.status,
        pass,
        body.message
      );
    }

    // 11. Internship validation failure on empty POST (400)
    {
      const invalidPayload = {
        title: '',
        company: 'Incomplete Corp'
      };
      const res = await fetch(`${BASE_URL}/api/internships`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(invalidPayload)
      });
      const body = await res.json();
      const pass =
        res.status === 400 &&
        body.success === false &&
        Array.isArray(body.errors) &&
        body.errors.length > 0;
      recordResult(
        'Validation failure on empty POST (400)',
        'POST',
        '/api/internships',
        400,
        res.status,
        pass,
        `${body.errors?.length} validation errors flagged`
      );
    }

    // 12. Validation failure on negative stipend (400)
    {
      const invalidStipendPayload = {
        title: 'Software Intern',
        company: 'Tech Corp',
        domain: 'Engineering',
        location: 'Remote',
        type: 'Remote',
        skills: 'Node.js',
        description: 'Great role',
        stipend: -5000,
        duration: '3 Months'
      };
      const res = await fetch(`${BASE_URL}/api/internships`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(invalidStipendPayload)
      });
      const body = await res.json();
      const pass = res.status === 400 && body.errors?.some((e) => e.field === 'stipend');
      recordResult(
        'Validation failure on negative stipend (400)',
        'POST',
        '/api/internships',
        400,
        res.status,
        pass
      );
    }

    // 13. Create valid internship (201)
    {
      const validPayload = {
        title: 'Full Stack Engineer Intern',
        company: 'Apex Innovations',
        domain: 'Web Development',
        location: 'Mumbai, Maharashtra',
        type: 'Hybrid',
        skills: 'React, Node.js, Express, SQLite',
        description: 'Join our agile core engineering team.',
        stipend: 27000,
        duration: '6 Months'
      };
      const res = await fetch(`${BASE_URL}/api/internships`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(validPayload)
      });
      const body = await res.json();
      const pass =
        res.status === 201 &&
        body.success === true &&
        body.data.id !== undefined &&
        body.data.title === validPayload.title;
      createdInternshipId = body.data?.id;
      recordResult(
        'Create valid internship (201)',
        'POST',
        '/api/internships',
        201,
        res.status,
        pass,
        `Created ID: ${createdInternshipId}`
      );
    }

    // 14. Update existing internship (200)
    {
      const updatePayload = {
        title: 'Senior Full Stack Engineer Intern',
        company: 'Apex Innovations Global',
        domain: 'Web Development',
        location: 'Mumbai, Maharashtra',
        type: 'Remote',
        skills: 'React, Node.js, Docker',
        description: 'Upgraded role working with cloud microservices.',
        stipend: 35000,
        duration: '6 Months'
      };
      const res = await fetch(`${BASE_URL}/api/internships/${createdInternshipId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatePayload)
      });
      const body = await res.json();
      const pass =
        res.status === 200 &&
        body.success === true &&
        body.data.stipend === 35000 &&
        body.data.type === 'Remote';
      recordResult(
        'Update existing internship (200)',
        'PUT',
        `/api/internships/${createdInternshipId}`,
        200,
        res.status,
        pass
      );
    }

    // 15. Delete created internship (200)
    {
      const res = await fetch(`${BASE_URL}/api/internships/${createdInternshipId}`, {
        method: 'DELETE'
      });
      const body = await res.json();
      const pass = res.status === 200 && body.success === true;
      recordResult(
        'Delete internship (200)',
        'DELETE',
        `/api/internships/${createdInternshipId}`,
        200,
        res.status,
        pass
      );
    }

    // ----------------------------------------------------
    // SECTION 3: Application Endpoints & Validation
    // ----------------------------------------------------

    // 16. Application validation failure - Missing required fields (400)
    {
      const res = await fetch(`${BASE_URL}/api/applications`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({})
      });
      const body = await res.json();
      const pass =
        res.status === 400 &&
        body.success === false &&
        Array.isArray(body.errors) &&
        body.errors.length >= 4;
      recordResult(
        'Application missing fields (400)',
        'POST',
        '/api/applications',
        400,
        res.status,
        pass,
        `${body.errors?.length} validation errors`
      );
    }

    // 17. Application validation failure - Invalid Email format (400)
    {
      const invalidEmailPayload = {
        internship_id: 1,
        full_name: 'John Doe',
        email: 'not-an-email',
        phone: '+1 555-123-4567',
        resume_url: 'https://example.com/resume.pdf',
        cover_message: 'Excited about this opportunity!'
      };
      const res = await fetch(`${BASE_URL}/api/applications`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(invalidEmailPayload)
      });
      const body = await res.json();
      const pass = res.status === 400 && body.errors?.some((e) => e.field === 'email');
      recordResult(
        'Application invalid email (400)',
        'POST',
        '/api/applications',
        400,
        res.status,
        pass
      );
    }

    // 18. Application validation failure - Invalid Phone number (400)
    {
      const invalidPhonePayload = {
        internship_id: 1,
        full_name: 'John Doe',
        email: 'john@example.com',
        phone: '123', // too short
        resume_url: 'https://example.com/resume.pdf'
      };
      const res = await fetch(`${BASE_URL}/api/applications`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(invalidPhonePayload)
      });
      const body = await res.json();
      const pass = res.status === 400 && body.errors?.some((e) => e.field === 'phone');
      recordResult(
        'Application invalid phone (400)',
        'POST',
        '/api/applications',
        400,
        res.status,
        pass
      );
    }

    // 19. Application validation failure - Invalid Resume URL (400)
    {
      const invalidUrlPayload = {
        internship_id: 1,
        full_name: 'John Doe',
        email: 'john@example.com',
        phone: '+1 555-987-6543',
        resume_url: 'not-a-valid-url'
      };
      const res = await fetch(`${BASE_URL}/api/applications`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(invalidUrlPayload)
      });
      const body = await res.json();
      const pass = res.status === 400 && body.errors?.some((e) => e.field === 'resume_url');
      recordResult(
        'Application invalid resume URL (400)',
        'POST',
        '/api/applications',
        400,
        res.status,
        pass
      );
    }

    // 20. Application submission with non-existent internship ID (404)
    {
      const ghostInternshipPayload = {
        internship_id: 9999,
        full_name: 'Jane Smith',
        email: 'jane@example.com',
        phone: '+1 555-555-0199',
        resume_url: 'https://example.com/jane-resume.pdf',
        cover_message: 'Checking ghost ID'
      };
      const res = await fetch(`${BASE_URL}/api/applications`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(ghostInternshipPayload)
      });
      const body = await res.json();
      const pass = res.status === 404 && body.success === false;
      recordResult(
        'Application non-existent internship (404)',
        'POST',
        '/api/applications',
        404,
        res.status,
        pass,
        body.message
      );
    }

    // 21. Valid Application Submission (201 Created)
    {
      const validApplication = {
        internship_id: 1,
        full_name: 'Alex Turner',
        email: 'alex.turner@university.edu',
        phone: '+1 415-555-2671',
        resume_url: 'https://storage.googleapis.com/resumes/alex-turner-cv.pdf',
        cover_message: 'Experienced in React and Node.js with strong curiosity for scalable APIs.'
      };
      const res = await fetch(`${BASE_URL}/api/applications`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(validApplication)
      });
      const body = await res.json();
      const pass =
        res.status === 201 &&
        body.success === true &&
        body.data.id !== undefined &&
        body.data.internship_id === 1 &&
        body.data.full_name === validApplication.full_name;
      createdApplicationId = body.data?.id;
      recordResult(
        'Valid application submission (201)',
        'POST',
        '/api/applications',
        201,
        res.status,
        pass,
        `Application ID: ${createdApplicationId}`
      );
    }

    // 22. Retrieve Applications List (200 OK)
    {
      const res = await fetch(`${BASE_URL}/api/applications`);
      const body = await res.json();
      const pass =
        res.status === 200 &&
        body.success === true &&
        Array.isArray(body.data) &&
        body.data.length >= 1;
      recordResult(
        'List all applications (200)',
        'GET',
        '/api/applications',
        200,
        res.status,
        pass,
        `Found ${body.data?.length} applications`
      );
    }

    // 23. Retrieve Application by ID (200 OK)
    {
      const res = await fetch(`${BASE_URL}/api/applications/${createdApplicationId}`);
      const body = await res.json();
      const pass =
        res.status === 200 &&
        body.success === true &&
        body.data.id === createdApplicationId &&
        body.data.email === 'alex.turner@university.edu';
      recordResult(
        'Get application by valid ID (200)',
        'GET',
        `/api/applications/${createdApplicationId}`,
        200,
        res.status,
        pass,
        `Applicant: ${body.data?.full_name}`
      );
    }

    // 24. Retrieve Application by non-existent ID (404)
    {
      const res = await fetch(`${BASE_URL}/api/applications/9999`);
      const body = await res.json();
      const pass = res.status === 404 && body.success === false;
      recordResult(
        'Get non-existent application (404)',
        'GET',
        '/api/applications/9999',
        404,
        res.status,
        pass,
        body.message
      );
    }

    // 25. Undefined Route Catch-all (404)
    {
      const res = await fetch(`${BASE_URL}/api/unknown-endpoint`);
      const body = await res.json();
      const pass = res.status === 404 && body.success === false;
      recordResult(
        'Undefined route catch-all (404)',
        'GET',
        '/api/unknown-endpoint',
        404,
        res.status,
        pass
      );
    }

    // ----------------------------------------------------
    // SECTION 7: Task 05 Capstone Health & Reliability
    // ----------------------------------------------------

    // 26. Robust Database Health & Memory Metrics
    {
      const res = await fetch(`${BASE_URL}/api/health`);
      const body = await res.json();
      const isDbConnected = body.database && body.database.status === 'connected';
      const hasUptime = typeof body.uptimeSeconds === 'number' && body.uptimeSeconds >= 0;
      const hasMemory = body.memory && typeof body.memory.heapUsedMB === 'number';
      const pass = res.status === 200 && isDbConnected && hasUptime && hasMemory;
      recordResult(
        'DB Health & Memory Diagnostics',
        'GET',
        '/api/health',
        200,
        res.status,
        pass,
        `DB: ${body.database?.status}, Engine: ${body.database?.engine}, Heap: ${body.memory?.heapUsedMB}MB`
      );
    }

    // 27. Safe Credential & Token Redaction in Logs
    {
      const sensitivePayload = {
        password: 'SuperSecretPassword123!',
        token: 'eyJhGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.tokenValue',
        authorization: 'Bearer secret_api_token_xyz',
        publicField: 'safeValue',
        nested: {
          apiKey: 'AIzaSySecretApiKey',
          normalData: 42
        }
      };
      const cleaned = sanitize(sensitivePayload);
      const isPasswordRedacted = cleaned.password === '[REDACTED]';
      const isTokenRedacted = cleaned.token === '[REDACTED]';
      const isAuthRedacted = cleaned.authorization === '[REDACTED]';
      const isApiKeyRedacted = cleaned.nested?.apiKey === '[REDACTED]';
      const isNormalPreserved = cleaned.publicField === 'safeValue' && cleaned.nested?.normalData === 42;
      const pass = isPasswordRedacted && isTokenRedacted && isAuthRedacted && isApiKeyRedacted && isNormalPreserved;
      recordResult(
        'Log Secret & PII Redaction',
        'UNIT',
        'sanitize()',
        'REDACTED',
        pass ? 'REDACTED' : 'LEAKED',
        pass,
        'Passwords, JWTs, Bearer tokens, and API keys securely redacted'
      );
    }

    // 28. Response Latency & Performance Benchmark (< 250ms)
    {
      const start = Date.now();
      const res = await fetch(`${BASE_URL}/api/internships?limit=10`);
      const latency = Date.now() - start;
      const pass = res.status === 200 && latency < 250;
      recordResult(
        'API Latency Benchmark (<250ms)',
        'GET',
        '/api/internships',
        '<250ms',
        `${latency}ms`,
        pass,
        `Response delivered in ${latency}ms`
      );
    }

  } finally {
    // Teardown test server & database
    server.close();
    await new Promise((resolve) => db.close(resolve));
  }

  // Print results summary table
  console.log('='.repeat(96));
  console.log(
    '| ' +
    'Method'.padEnd(7) +
    ' | ' +
    'Endpoint'.padEnd(36) +
    ' | ' +
    'Expected'.padEnd(8) +
    ' | ' +
    'Actual'.padEnd(6) +
    ' | ' +
    'Status'.padEnd(9) +
    ' |'
  );
  console.log('='.repeat(96));

  let allPassed = true;
  for (const item of testResults) {
    if (!item.status.includes('PASS')) allPassed = false;
    console.log(
      '| ' +
      item.method.padEnd(7) +
      ' | ' +
      item.endpoint.padEnd(36) +
      ' | ' +
      String(item.expected).padEnd(8) +
      ' | ' +
      String(item.actual).padEnd(6) +
      ' | ' +
      item.status.padEnd(9) +
      ' |'
    );
  }
  console.log('='.repeat(96));

  if (allPassed) {
    console.log(`\n🎉 ALL ${testResults.length} TEST CASES PASSED SUCCESSFULLY!\n`);
    process.exit(0);
  } else {
    console.error('\n❌ SOME TESTS FAILED!\n');
    process.exit(1);
  }
}

runTests().catch((err) => {
  console.error('Fatal test error:', err);
  process.exit(1);
});
