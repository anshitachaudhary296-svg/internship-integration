const fs = require('fs');
const path = require('path');
const { query, dbPath } = require('./db');

const schemaPath = path.resolve(__dirname, 'schema.sql');
const seedPath = path.resolve(__dirname, 'seed.sql');

async function initDatabase({ seed = true, force = false } = {}) {
  try {
    console.log(`📦 Initializing SQLite database at: ${dbPath}`);

    if (force) {
      await query.exec('DROP TABLE IF EXISTS applications; DROP TABLE IF EXISTS internships;');
      console.log('🔄 Forced reset: Dropped existing applications and internships tables.');
    }

    if (!fs.existsSync(schemaPath)) {
      throw new Error(`Schema file not found at: ${schemaPath}`);
    }
    const schemaSql = fs.readFileSync(schemaPath, 'utf8');

    await query.exec(schemaSql);
    console.log('✅ Database schema applied successfully.');

    const countResult = await query.get('SELECT COUNT(*) as count FROM internships;');
    const currentCount = countResult ? countResult.count : 0;

    if (seed) {
      if (force || currentCount === 0) {
        if (fs.existsSync(seedPath)) {
          const seedSql = fs.readFileSync(seedPath, 'utf8');
          await query.exec(seedSql);
          const newCountResult = await query.get('SELECT COUNT(*) as count FROM internships;');
          console.log(`🌱 Database seeded successfully with ${newCountResult.count} records.`);
        } else {
          console.warn('⚠️ Seed file not found, skipping seeding.');
        }
      } else {
        console.log(`ℹ️ Database already contains ${currentCount} records. Seeding skipped.`);
      }
    } else {
      console.log('ℹ️ Seeding skipped (schema-only mode).');
    }

    return true;
  } catch (error) {
    console.error('❌ Database initialization error:', error.message);
    throw error;
  }
}

if (require.main === module) {
  const args = process.argv.slice(2);
  const forceSeed = args.includes('--seed') || args.includes('-s') || args.includes('--force') || args.includes('-f');
  const schemaOnly = args.includes('--schema-only');

  initDatabase({ seed: !schemaOnly, force: forceSeed })
    .then(() => {
      console.log('🚀 Database setup completed!');
      process.exit(0);
    })
    .catch((err) => {
      console.error('Initialization failed:', err);
      process.exit(1);
    });
}

module.exports = { initDatabase };
