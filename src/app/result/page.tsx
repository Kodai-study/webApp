import DBGet1Colum from "./DB"
import Image from 'next/legacy/image';
import Link from 'next/link';

const Imgsrc = () => {
  return (
    <div>
      <Image
        src="/imgs/yasi.jpg"
        alt="Example Image"
        layout="responsive"
        width={1980}
        height={1150}
      />
    </div>
  );
};

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
        <Imgsrc/>
        <Link href="/tracker">戻る</Link>
      </>
    )
  }
  catch (error) {
    const messege = ("シリアルナンバーが見つかりません");
    return (
      <>
        {messege}
        <br></br>
        <Link href="/tracker">戻る</Link>
      </>
    )
  }
}

export default ResultPage