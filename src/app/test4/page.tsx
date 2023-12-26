import Myform from './Myform';
import { getDBConnection } from '../.././components/DBConnectionManager'

export default async function App() {

  const connection = await getDBConnection();

  const sql = `SELECT * FROM m_process ORDER BY sequence asc;`;

  const result = await connection.query(sql);

  const simplifiedResult = result.map(row => ({
    process_id: row.process_id,
    process_name: row.process_name
    // 他の必要なプロパティがあれば同様に追加する
  }));

  return (
    <>
      <Myform props={simplifiedResult}></Myform>
    </>
  );
}
