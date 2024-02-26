import { defineEventHandler } from 'h3';
import { createPool } from 'mysql2/promise';

const config = useRuntimeConfig();

const pool = createPool({
  host: config.DB_HOST,
  user: config.DB_USER,
  password: config.DB_PASSWORD,
  database: config.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default defineEventHandler(async (event) => {
  try {
    const [rows] = await pool.query('SELECT url, name FROM homepages');
    return rows;
  } catch (error) {
    console.error('Database query error:', error);
    throw error;
  }
});
