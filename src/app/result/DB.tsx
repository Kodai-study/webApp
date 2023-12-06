import * as mysql from 'promise-mysql';

//ログイン用データベース接続API
async function TrackDB(workSerialNumber: number) {
    const connection = await mysql.createConnection({
        host: '192.168.16.101',
        port: 3306,
        database: 'test',
        user: 'test',
        password: 'test'
    });
    const sql = `SELECT * FROM m_work WHERE serial_number = ${workSerialNumber};`;

    const result = await connection.query(sql);
    return result
}
export default TrackDB