import mysql from 'mysql2/promise';

// DB HOST + PORT, user - pass, db
//  

export const dbConfig = {
  host: process.env.DB_HOST || '127.0.0.1',
  port: Number(process.env.DB_PORT || 3306),
  user: process.env.DB_USER || 'eyuser',
  password: process.env.DB_PASSWORD || 'eypass',
  database: process.env.DB_NAME || 'eyplaywright',
};

export const uatdbConfig = {
  host: process.env.DB_HOST || '127.0.0.1',
  port: Number(process.env.DB_PORT || 3306),
  user: process.env.DB_USER || 'eyuser',
  password: process.env.DB_PASSWORD || 'eypass',
  database: process.env.DB_NAME || 'eyplaywright',
};


export async function getDbConnection() {
  return mysql.createConnection(uatdbConfig);
}

export async function query(sql, params = []) {
  const connection = await getDbConnection();
  try {
    const [rows] = await connection.execute(sql, params);
    // json 
    /* 
    [
      {
        "empID":1
        "empName":"Vaibhav"
      },
      {
        "empID":2
        "empName":"Vaibhav"
      },
            {
        "empID":3
        "empName":"Vaibhav"
      }
    ]
    */
    return rows;
  } finally {
    await connection.end();
  }
}
