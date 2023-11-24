import * as mysql from 'promise-mysql';

//ログイン用データベース接続API
export async function LogDB(id, pass) {
    const connection = await mysql.createConnection({
        host: '192.168.16.101',
        port: 3306,
        database: 'test',
        user: 'test',
        password: 'test'
    });
    //社員番号とパスワード入力⇒持ってくるもの：名前　社員番号　パスワード　権限
    const sql = 'select employee_name, t_login.employee_no, \
    password, authority from m_employee inner join \
    t_login on m_employee.employee_no = t_login.employee_no \
    where m_employee.employee_no = ' + id + ';';
    //const sql = 'select * from m_employee where employee_no = ' + 2 + ';';
    const result = await connection.query(sql);
    connection.end();

    //パスワード比較する
    if (pass != result[0].password) {
        return 0;
    }
    else {
        return 1;
    }
}