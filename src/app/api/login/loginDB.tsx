import * as mysql from 'promise-mysql';

//ログイン用データベース接続API
export async function LogDB(id: string, pass: string) {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
  });
  //社員番号とパスワード入力⇒持ってくるもの：名前　社員番号　パスワード　権限
  const sql = '\
    SELECT employee_name, t_login.employee_no, password, authority\
    FROM m_employee\
    INNER JOIN t_login ON m_employee.employee_no = t_login.employee_no\
    WHERE m_employee.employee_no = ?;';
  //const sql = 'select * from m_employee where employee_no = ' + 2 + ';';
  const result = await connection.query(sql, [id]);
  connection.end();

  //パスワード比較する
  if (pass != result[0].password) {
    return 0;
  }
  else {
    return 1;
  }
  // console.log(result[0].password);
  // return JSON.stringify(result);
}