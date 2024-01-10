import Myform from './Myform';
import Select from './Select'
import { getDBConnection } from '../.././components/DBConnectionManager'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
      <Container>
        <h1>日時選択</h1><br />
        <Myform props={simplifiedResult}></Myform>
      </Container>
    </>
  );
}
