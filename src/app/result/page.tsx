import DBGet1Colum from "./DB"
import GetParameter_no from "./GetDatabaseSample"

const ResultPage = async ({ params, searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  try {
    const re = await DBGet1Colum(searchParams.no)
    const keys = Object.keys(re[0]);
    const propertiesString = keys.map(key => `${key}: ${re[0][key]}`).join(', ');
    return (
      <>
        {propertiesString}
        <br></br>
        <GetParameter_no />
      </>
    )
  }
  catch (error) {
    const messege = ("シリアルナンバーが見つかりません");
    return (
      <>
        {messege}
        <br></br>
        <GetParameter_no />
      </>
    )
  }
}

export default ResultPage