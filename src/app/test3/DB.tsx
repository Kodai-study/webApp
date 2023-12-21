import * as mysql from 'promise-mysql';

//ログイン用データベース接続API
async function statisticsBD(BDT: string )
  //  ,ADT: string ,BE: string ,AE: string) 
    {
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
    });
    const changedatetime = new Date(BDT);
    const sql = `SELECT * FROM t_event WHERE event_datetime >= \'\ ${changedatetime} \'\ `;
    //const sql = `SELECT * FROM t_event WHERE event_datetime >= 1000 `;
    //クエリ代入
    const result = await connection.query(sql, [changedatetime]);
    await connection.end();
    return result;
}
export default statisticsBD