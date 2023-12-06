// 例：ログインAPI
import { getDBConnection } from '../../components/DBConnectionManager';

export default async function logDB() {
  const connection = await getDBConnection();
  let result;
  try {
    result = await connection.query('select * from m_employee where employee_no = ' + 1 + ';');

  } catch (error) {
    throw error;
  } finally {
    await connection.release();
  }
  return (<>{result[0].employee_name}</>);
}
