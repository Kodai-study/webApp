// db.js
import mysql from 'mysql';
import { promisify } from 'util';

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
});

pool.query = promisify(pool.query).bind(pool); // Node.jsのコールバックスタイルからPromiseスタイルへ変換

export const query = async (queryText: string, params: string) => {
    return await pool.query(queryText, params);
};
