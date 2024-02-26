import { defineEventHandler, readBody } from "h3";
import { createPool } from "mysql2/promise";

const config = useRuntimeConfig();

const pool = createPool({
  host: config.DB_HOST,
  user: config.DB_USER,
  password: config.DB_PASSWORD,
  database: config.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default defineEventHandler(async (event) => {
  const { customerId, setAmount, accessLicense, secretKey } = await readBody(event);

  try {
    const query = `
      INSERT INTO bizmoney (customerId, setAmount, accessLicense, secretKey)
      VALUES (?, ?, ?, ?);
    `;
    const values = [customerId, setAmount, accessLicense, secretKey];
    await pool.query(query, values);

    return {
      statusCode: 200,
      body: {
        message: "계정 정보 저장 및 잔액 확인 스케줄 설정 완료",
      },
    };
  } catch (error) {
    console.error("데이터베이스 저장 오류:", error);
    return {
      statusCode: 500,
      body: {
        message: "계정 정보 저장 실패",
      },
    };
  }
});
