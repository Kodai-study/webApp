import DB from "./DB"
import Link from 'next/link';

type SearchParams = {
  StartDateTime: string;
  StopDateTime: string;
  starte: string;
  stope: string;
};

const ResultPage = async ({ searchParams }: {
  searchParams: SearchParams;
}) => {
   const re = await DB(searchParams.StartDateTime);
  //   searchParams.StopDateTime,
  //   searchParams.starte,
  //   searchParams.stope,)
  const keys = Object.keys(re[0]);
  const propertiesString = keys.map(key => `${key}: ${re[0][key]}`).join(', ');
  return (
    <>
     {re.map((item, index) => {
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