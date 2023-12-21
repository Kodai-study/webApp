import * as mysql from 'promise-mysql';

//ログイン用データベース接続API
async function TrackDB(workSerialNumber: number) {
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
    });
    
    //クエリ格納
    const sql = `SELECT * FROM m_work WHERE serial_number = ${workSerialNumber};`;

    //クエリ代入
    const result = await connection.query(sql);
    return result
}
export default TrackDB