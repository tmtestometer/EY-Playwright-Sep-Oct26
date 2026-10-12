import mysql from 'mysql2/promise';

export const dbConfig = {
  host: process.env.DB_HOST || '127.0.0.1',
  port: Number(process.env.DB_PORT || 3306),
  user: process.env.DB_USER || 'eyuser',
  password: process.env.DB_PASSWORD || 'eypass',
  database: process.env.DB_NAME || 'eyplaywright',
};

export async function getDbConnection() {
  return mysql.createConnection(dbConfig);
}

export async function query(sql, params = []) {
  const connection = await getDbConnection();
  try {
    const [rows] = await connection.execute(sql, params);
    return rows;
  } finally {
    await connection.end();
  }
}
