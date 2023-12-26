//完全感覚サーバーサード
import Link from 'next/link'
import { getDBConnection } from '@/components/DBConnectionManager';

//データベース接続
async function DB(SDT: string, EDT: string, SE: string, EE: string) {
  const connection = await getDBConnection();
  //const sql = "SELECT judgment FROM m_work WHERE processing_date BETWEEN ? AND ? ORDER BY processing_date ASC;"
  const sql = "SELECT * FROM m_work WHERE processing_date BETWEEN ? AND ? ORDER BY processing_date ASC;"
  //クエリ代入
  const result = await connection.query(sql,[SDT,EDT]);
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
  const result = await DB(searchParams.StartDateTime,
    searchParams.EndDateTime,
    searchParams.StartEvent,
    searchParams.EndEvent);

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
        {propertiesString}<br/>
      </div>
    );
  })


  return (
    <>
      {selectres}
      <br/>
      {searchParams.StartDateTime}
      <br/>
      <Link href="/timeselect">戻る</Link>
    </>
  )
}

export default ResultPage