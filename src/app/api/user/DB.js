import * as mysql from 'promise-mysql';

//ログイン用データベース接続API
export async function DB( bpass, apass) {
    const connection = await mysql.createConnection({
        host: '192.168.16.101',
        port: 3306,
        database: 'test',
        user: 'test',
        password: 'test'
    });
    //ユーザー番号で検索
    const sql = 'SELECT * FROM t_login WHERE employee_no = ?';
    const result = await connection.query(sql, [1]);
    // 変更前のパスワード比較×なら-1、〇なら変更する
    if (bpass != result[0].password) {
        return (-1);
    }
    const sql2 = `UPDATE t_login SET password = ? WHERE employee_no = ?`
    const result2 = await connection.query(sql2, [apass,1]);
    connection.end();
    return (0);
}