import { defineEventHandler } from 'h3';
import bcrypt from 'bcryptjs';
import { createConnection } from 'mysql2/promise';

export default defineEventHandler(async (event) => {
  const { name, username, password } = await readBody(event);
  const hashedPassword = bcrypt.hashSync(password, 8);

  const connection = await createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  await connection.execute('INSERT INTO user (name, username, password) VALUES (?, ?, ?)', [name, username, hashedPassword]);

  return { success: true, message: 'User registered successfully' };
});
