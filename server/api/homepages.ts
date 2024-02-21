// server/api/homepages.ts
import { defineEventHandler } from 'h3';
import { createConnection } from 'mysql2/promise';

export default defineEventHandler(async (event) => {
  const { url, name } = await readBody(event);
  const connection = await createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  await connection.execute('INSERT INTO homepages (url, name) VALUES (?, ?)', [url, name]);
  await connection.end();

  return { success: true };
});
