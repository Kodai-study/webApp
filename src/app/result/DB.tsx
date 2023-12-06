import * as mysql from 'promise-mysql';

//ログイン用データベース接続API
async function TrackDB(no) {
    const connection = await mysql.createConnection({
        host: '192.168.16.101',
        port: 3306,
        database: 'test',
        user: 'test',
        password: 'test'
    });
    const sql = `select * from m_work where serial_number = ${no};`;

    const result = await connection.query(sql);
    return result
}
export default TrackDB