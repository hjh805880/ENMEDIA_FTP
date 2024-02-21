import { defineEventHandler } from 'h3';
import bcrypt from 'bcryptjs';
import { createConnection } from 'mysql2/promise';
import jwt, {Secret}  from 'jsonwebtoken';

export default defineEventHandler(async (event) => {
  const { username, password } = await readBody(event);
  const connection = await createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  const [rows] = await connection.execute('SELECT * FROM user WHERE username = ?', [username]);
  if (rows.length > 0) {
    const user = rows[0];
    if (bcrypt.compareSync(password, user.password)) {
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as Secret, { expiresIn: '1h' });
      return { success: true, message: '로그인 성공', token };
    }
  }

  return { success: false, message: '아이디나 비밀번호를 다시 확인해주세요.' };
});
