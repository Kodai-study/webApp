//サーバーサードプログラム
import Link from 'next/link'
import { getDBConnection } from '@/components/DBConnectionManager';
import Chart from './chart.tsx';
import Container from 'react-bootstrap/Container';

//データベース接続
async function DB() {
  const connection = await getDBConnection();
  const sql = "SELECT judgment, COUNT(*) as count FROM m_work GROUP BY judgment ORDER BY judgment IS NULL, judgment;"
  //クエリ代入
  const result = await connection.query(sql);
  return result;
}

type SearchParams = {
  StartDateTime: string;
  EndDateTime: string;
  StartEvent: string;
  EndEvent: string;
};

const ResultPage = async ({ searchParams }: {
  searchParams: SearchParams;
}) => {
  const result = await DB();

  try {
    if (!result.length) {
      return (
        <div>
          <p>データが見つかりませんでした。</p>
          <Link href="/timeselect">戻る</Link>
        </div>
      );
    }
  } catch (error) {
    console.error("データベースクエリエラー:", error.message);
    return (
      <div>
        <p>データベースクエリエラーが発生しました。</p>
        <Link href="/timeselect">戻る</Link>
      </div>
    );
  }

  const selectres = result.map((item, index) => {
    const keys = Object.keys(item);
    const propertiesString = keys.map(key => `${key}: ${item[key]}`).join(', ');
    return (
      <div key={index}>
        {propertiesString}<br />
      </div>
    );
  })
  const simplifiedData = result.map((row) => ({
    judgment: row.judgment,
    count: row.count,
  }));

  return (
    <>
      <Container>
        <h1>良品統計率</h1>
        <Chart Qdata={simplifiedData}></Chart>
      </Container>
    </>
  )
}

export default ResultPage