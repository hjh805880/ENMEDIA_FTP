import { defineEventHandler } from 'h3';
import { createConnection } from 'mysql2/promise';

export default defineEventHandler(async (event) => {
  const { url, name } = await readBody(event);

  const config = useRuntimeConfig();

  const safeUrl = url ?? null;
  const safeName = name ?? null;

  const connection = await createConnection({
    host: config.DB_HOST,
    user: config.DB_USER,
    password: config.DB_PASSWORD,
    database: config.DB_NAME,
  });

  try {
    await connection.execute(
      'INSERT INTO homepages (url, name) VALUES (?, ?)',
      [safeUrl, safeName]
    );
    await connection.end();

    return { success: true };
  } catch (error) {
    console.error('DB Insert Error:', error);
    await connection.end();
    throw error;
  }
});
