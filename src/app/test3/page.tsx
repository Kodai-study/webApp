//完全感覚サーバーサード
import Link from 'next/link'
import { getDBConnection } from '@/components/DBConnectionManager';

//データベース接続
async function DB(SDT: string, EDT: string, SE: string, EE: string) {
  const connection = await getDBConnection();
  const changedatetime = new Date(SDT);
  const aaa = 0;
  //const sql = `SELECT * FROM t_event WHERE event_datetime >= \'\ ${changedatetime} \'\ `;
  const sql = `SELECT * FROM t_event WHERE event_datetime >= 1000 `;
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
  const result = await DB(searchParams.StartDateTime,
    searchParams.EndDateTime,
    searchParams.StartEvent,
    searchParams.EndEvent);
    
  const keys = Object.keys(result[0]);
  const propertiesString = keys.map(key => `${key}: ${result[0][key]}`).join(', ');
  return (
    <>
      {result.map((item, index) => {
        const keys = Object.keys(item);
        const propertiesString = keys.map(key => `${key}: ${item[key]}`).join(', ');

        return (
          <div key={index}>
            {propertiesString}<br />
          </div>
        );
      })}

      {searchParams.StartDateTime}
      {propertiesString}<br></br>
      <Link href="/timeselect">戻る</Link>
    </>
  )
}


export default ResultPage