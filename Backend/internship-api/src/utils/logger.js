/**
 * Production-Grade Safe Structured Logger
 * 
 * Provides ISO timestamped, leveled logging with automatic redaction
 * of sensitive information (passwords, tokens, authorization headers).
 */

const SENSITIVE_KEYS = [
  'password',
  'token',
  'secret',
  'authorization',
  'cookie',
  'credit_card',
  'card_number',
  'cvv',
  'ssn',
  'apikey',
  'api_key'
];

/**
 * Deeply redacts sensitive keys from an object or string
 * @param {any} target - Data to sanitize
 * @returns {any} Sanitized clone
 */
function sanitize(target) {
  if (!target) return target;

  if (typeof target === 'string') {
    // Redact bearer tokens if present in string
    return target.replace(/(Bearer\s+)[A-Za-z0-9\-._~+/]+=*/gi, '$1[REDACTED]');
  }

  if (Array.isArray(target)) {
    return target.map(sanitize);
  }

  if (typeof target === 'object') {
    const cleaned = {};
    for (const [key, val] of Object.entries(target)) {
      const lower = key.toLowerCase();
      if (SENSITIVE_KEYS.some((sensitive) => lower.includes(sensitive))) {
        cleaned[key] = '[REDACTED]';
      } else if (typeof val === 'object' && val !== null) {
        cleaned[key] = sanitize(val);
      } else {
        cleaned[key] = val;
      }
    }
    return cleaned;
  }

  return target;
}

const LOG_LEVELS = {
  DEBUG: 0,
  INFO: 1,
  WARN: 2,
  ERROR: 3
};

const currentLevel = process.env.LOG_LEVEL
  ? LOG_LEVELS[process.env.LOG_LEVEL.toUpperCase()] || LOG_LEVELS.INFO
  : LOG_LEVELS.INFO;

function formatLog(level, message, meta = null) {
  const timestamp = new Date().toISOString();
  let metaStr = '';
  if (meta) {
    try {
      metaStr = ` ${JSON.stringify(sanitize(meta))}`;
    } catch {
      metaStr = ' [Circular/Unserializable Meta]';
    }
  }
  return `[${timestamp}] [${level}] ${message}${metaStr}`;
}

const logger = {
  debug: (message, meta) => {
    if (process.env.NODE_ENV === 'test') return;
    if (currentLevel <= LOG_LEVELS.DEBUG) {
      console.debug(formatLog('DEBUG', message, meta));
    }
  },

  info: (message, meta) => {
    if (process.env.NODE_ENV === 'test') return;
    if (currentLevel <= LOG_LEVELS.INFO) {
      console.log(formatLog('INFO', message, meta));
    }
  },

  warn: (message, meta) => {
    if (process.env.NODE_ENV === 'test') return;
    if (currentLevel <= LOG_LEVELS.WARN) {
      console.warn(formatLog('WARN', message, meta));
    }
  },

  error: (message, meta) => {
    // We log errors even in test mode if critical, but skip if test handles expected errors
    if (currentLevel <= LOG_LEVELS.ERROR && process.env.NODE_ENV !== 'test') {
      console.error(formatLog('ERROR', message, meta));
    }
  },

  sanitize
};

module.exports = { logger, sanitize };
