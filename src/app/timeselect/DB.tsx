import { getDBConnection } from '../.././components/DBConnectionManager'

export default async function DBDB() {
  const connection = await getDBConnection();

  //クエリ格納
  const sql = `SELECT * FROM m_process;`;

  //クエリ代入
  const result = await connection.query(sql);
  return result
}
