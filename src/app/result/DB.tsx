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
    //const sql = `SELECT * FROM m_work WHERE serial_number = ${workSerialNumber};`;
    const sql = `SELECT
                    m_work.serial_number,
                    m_work.img_file_pass,
                    m_work.judgment,
                    m_work.processing_date,
                    m_factory.factory_name,
                    m_model.model_name,
                    m_maker.maker_name
                FROM
                    m_work
                INNER JOIN m_factory
                    ON m_work.factory_id = m_factory.factory_id
                INNER JOIN m_model
                    ON m_work.model_number = m_model.model_number
                INNER JOIN m_maker
                    ON m_work.maker_id = m_maker.maker_id
                WHERE serial_number = ${workSerialNumber};`;

    //クエリ代入
    const result = await connection.query(sql);
    return result
}
export default TrackDB