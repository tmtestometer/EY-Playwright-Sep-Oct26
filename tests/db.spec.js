import { test, expect } from '@playwright/test';
import { getDbConnection, query } from './db.connection.js';

test.describe('MySQL connection', () => {
  test('connects to docker mysql and reads Emp table', async () => {
    const connection = await getDbConnection();
    const [rows] = await connection.execute('SELECT 1 AS ok');
    await connection.end();

    expect(rows[0].ok).toBe(1);

    const employees = await query(
      'SELECT EmpID, EmpName, EmpDepartment FROM Emp ORDER BY EmpID',
    );

    expect(employees.length).toBeGreaterThan(0);
    expect(employees[0]).toMatchObject({
      EmpName: expect.any(String),
      EmpDepartment: expect.any(String),
    });
  });
});
