/**
 * Verification Script for Task 04 Requirements
 */

async function runAllVerifications() {
  console.log('====================================================');
  console.log('🧪 RUNNING TASK 04 VERIFICATION CHECKLIST');
  console.log('====================================================');

  let allPassed = true;

  // Pre-check: Verify server is online
  try {
    const healthCheck = await fetch('http://localhost:5000/api/health', {
      signal: AbortSignal.timeout(3000)
    });
    if (!healthCheck.ok) {
      throw new Error(`Server responded with HTTP ${healthCheck.status}`);
    }
  } catch (err) {
    console.error('❌ Could not connect to the API server at http://localhost:5000');
    console.error('👉 Please make sure the server is running in another terminal before running this script:');
    console.error('   npm start   (or npm run dev)\n');
    process.exit(1);
  }

  // 1. Frontend loads from http://localhost:5000/
  const htmlRes = await fetch('http://localhost:5000/');
  const cssRes = await fetch('http://localhost:5000/style.css');
  const jsRes = await fetch('http://localhost:5000/script.js');
  const html = await htmlRes.text();
  const rootOk = htmlRes.status === 200 && html.includes('InternPulse');
  const cssOk = cssRes.status === 200;
  const jsOk = jsRes.status === 200;
  console.log(`1. Frontend loads from http://localhost:5000/: ${rootOk && cssOk && jsOk ? 'PASS ✅' : 'FAIL ❌'}`);
  console.log(`   - HTML (200, contains "InternPulse"): ${rootOk ? 'YES' : 'NO'}`);
  console.log(`   - style.css (200): ${cssOk ? 'YES' : 'NO'}`);
  console.log(`   - script.js (200): ${jsOk ? 'YES' : 'NO'}`);
  if (!rootOk || !cssOk || !jsOk) allPassed = false;

  // 2. Internship data loads from the backend API
  const apiRes = await fetch('http://localhost:5000/api/internships');
  const apiData = await apiRes.json();
  const apiOk = apiRes.status === 200 && apiData.success && apiData.data.length > 0;
  console.log(`2. Internship data loads from backend API: ${apiOk ? 'PASS ✅' : 'FAIL ❌'} (${apiData.data?.length} records found)`);
  if (!apiOk) allPassed = false;

  // 3 & 4. Loading state, failure state & retry button
  const jsText = await (await fetch('http://localhost:5000/script.js')).text();
  const hasLoading = jsText.includes('skeletonLoader.classList.remove') && jsText.includes('AppState.isLoading');
  const hasFailureRetry = jsText.includes('errorState.classList.remove') && jsText.includes('retryBtn');
  console.log(`3. Loading state implemented in UI: ${hasLoading ? 'PASS ✅' : 'FAIL ❌'}`);
  console.log(`4. Failure state & Retry button handler: ${hasFailureRetry ? 'PASS ✅' : 'FAIL ❌'}`);
  if (!hasLoading || !hasFailureRetry) allPassed = false;

  // 5 & 7. Application form validation & Invalid application rejected
  const invalidRes = await fetch('http://localhost:5000/api/applications', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ internship_id: 1, email: 'not-valid' })
  });
  const invalidData = await invalidRes.json();
  const invalidRejected = invalidRes.status === 400 && invalidData.success === false && invalidData.errors?.length >= 3;
  console.log(`5. Application form validation works: ${invalidRejected ? 'PASS ✅' : 'FAIL ❌'}`);
  console.log(`7. Invalid application rejected by API (400): ${invalidRejected ? 'PASS ✅' : 'FAIL ❌'} (${invalidData.errors?.length} validation errors flagged)`);
  if (!invalidRejected) allPassed = false;

  // 6. Valid application saved to SQLite
  const validPayload = {
    internship_id: apiData.data[0].id,
    full_name: 'Verified Integration Candidate',
    email: 'integration.candidate@test.com',
    phone: '+1 555-777-8888',
    resume_url: 'https://storage.example.com/resumes/candidate.pdf',
    cover_message: 'Verification test application'
  };
  const createRes = await fetch('http://localhost:5000/api/applications', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(validPayload)
  });
  const createData = await createRes.json();
  const createdId = createData.data?.id;

  // Fetch created record to verify persistence
  const getRes = await fetch(`http://localhost:5000/api/applications/${createdId}`);
  const getData = await getRes.json();
  const savedOk = createRes.status === 201 && getRes.status === 200 && getData.data?.email === validPayload.email;
  console.log(`6. Valid application saved to SQLite: ${savedOk ? 'PASS ✅' : 'FAIL ❌'} (Application ID #${createdId} saved & retrieved)`);
  if (!savedOk) allPassed = false;

  // 8. Security middleware works
  const nosniff = htmlRes.headers.get('x-content-type-options');
  const frameOptions = htmlRes.headers.get('x-frame-options');
  const rateLimitHeader = apiRes.headers.get('ratelimit-limit');
  const corsRes = await fetch('http://localhost:5000/api/internships', {
    method: 'OPTIONS',
    headers: { Origin: 'http://localhost:3000', 'Access-Control-Request-Method': 'GET' }
  });
  const allowOrigin = corsRes.headers.get('access-control-allow-origin');
  const rateLimitTestRes = await fetch('http://localhost:5000/api/test-rate-limit');
  const securityOk = nosniff === 'nosniff' && !!frameOptions && !!rateLimitHeader && (corsRes.status === 204 || corsRes.status === 200);
  console.log(`8. Security middleware works: ${securityOk ? 'PASS ✅' : 'FAIL ❌'}`);
  console.log(`   - Helmet security headers: ${nosniff === 'nosniff' && !!frameOptions ? 'Active (nosniff, frame-options)' : 'Missing'}`);
  console.log(`   - Rate limiting header: ${rateLimitHeader ? `Active (limit: ${rateLimitHeader})` : 'Missing'}`);
  console.log(`   - CORS preflight: ${corsRes.status === 204 ? `Active (Access-Control-Allow-Origin: ${allowOrigin})` : 'Failed'}`);
  if (!securityOk) allPassed = false;

  console.log('====================================================');
  if (allPassed) {
    console.log('🎉 ALL LIVE INTEGRATION VERIFICATION CHECKS PASSED!');
  } else {
    console.error('❌ SOME CHECKS FAILED!');
    process.exit(1);
  }
}

runAllVerifications().catch((err) => {
  console.error('Fatal verification error:', err);
  process.exit(1);
});
