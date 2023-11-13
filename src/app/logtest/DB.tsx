import * as mysql from 'promise-mysql';

async function GET() {
  const connection = await mysql.createConnection({
    host: '192.168.16.101',
    port: 3306,
    database: 'test',
    user: 'AMS',
    password: '2023r05T%'
  });

  const sql = 'select * from m_employee where employee_no = ' + 2 + ';';
  const sql2 = 'select * from m_employee where employee_no = ' + 1 + ';';
  const result = await connection.query(sql);
  const result2 = await connection.query(sql2);
  connection.end();

  return JSON.stringify(result)+JSON.stringify(result2);
}
