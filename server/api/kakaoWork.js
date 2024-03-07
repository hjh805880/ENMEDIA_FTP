import { defineEventHandler } from 'h3'
import mysql from 'mysql2/promise'

const config = useRuntimeConfig();

const pool = mysql.createPool({
    host: config.DB_HOST,
    user: config.DB_USER,
    password: config.DB_PASSWORD,
    database: config.DB_NAME,
})

export default defineEventHandler(async () => {
  const connection = await pool.getConnection()
  try {
    const [rows] = await connection.query('SELECT * FROM kakaowork LIMIT 1')
    return rows[0]
  } finally {
    connection.release()
  }
})
