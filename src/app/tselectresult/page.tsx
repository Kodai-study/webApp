//完全感覚サーバーサード
import Link from 'next/link'
import { getDBConnection } from '@/components/DBConnectionManager';
import Button from 'react-bootstrap/Button';
import { Key } from 'react';

//データベース接続
async function DB(SDT: string, EDT: string, SE: string, EE: string) {
  const connection = await getDBConnection();
  const sql = "SELECT * FROM t_event WHERE event_datetime BETWEEN ? AND ? ORDER BY event_datetime ASC;"
  //クエリ代入
  const result = await connection.query(sql, [SDT, EDT]);
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
    if (error instanceof Error) {
      console.error("データベースクエリエラー:", error.message);
    } else {
      console.error("予期せぬエラーが発生しました。");
    }
    return (
      <div>
        <p>データベースクエリエラーが発生しました。</p>
        <Link href="/timeselect">戻る</Link>
      </div>
    );
  }

  const selectres = result.map((item: { [x: string]: any; }, index: Key | null | undefined) => {
    const keys = Object.keys(item);
    const propertiesString = keys.map(key => `${key}: ${item[key]}`).join(', ');
    return (
      <div key={index}>
        {propertiesString}<br />
      </div>
    );
  })


  return (
    <>
      <h1>検索結果</h1>
      {selectres}
      <br />
      {searchParams.StartDateTime}
      <br />
      <Link href="/timeselect">
        <Button variant="primary">戻る</Button>{' '}
      </Link>
    </>
  )
}

export default ResultPage