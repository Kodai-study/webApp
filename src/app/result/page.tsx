import DBGet1Colum from "./DB"
import Image from 'next/legacy/image';
import Link from 'next/link';
import fs from 'fs';

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
            <Image
                src="/imgs/グラフ.PNG"
                alt="Example Image"
                layout="responsive"
                width={1980}
                height={1150}
            />
        </div>
    );
};

const Test_GetFileSystemImage = () => {
    let imageBuffer = fs.readFileSync('/mnt/win_share/imgs/yasi.jpg')
    const base64Image = imageBuffer.toString('base64');

    // HTMLで表示
    const imageSrc = `data:image/jpeg;base64,${base64Image}`;
    return <img src={imageSrc} alt="Image from Buffer" />;
}

type SearchParams = {
    no: number;
};

function isSearchParams(params: any): params is SearchParams {
    // params.noが数値に変換できるかどうか
    return params.no !== undefined && !isNaN(Number(params.no));
}

const ResultPage = async ({ params, searchParams,
}: {
    params: { slug: string };
    searchParams: SearchParams;
}) => {
    try {
        if (!isSearchParams(searchParams)) {
            throw new Error('Invalid search params');
        }
        const re = await DBGet1Colum(searchParams.no)

        const keys = Object.keys(re[0]);
        const propertiesString = keys.map(key => `${key}: ${re[0][key]}`).join(', ');
        return (
            <>
                {propertiesString}
                <Test_GetFileSystemImage />
                <br></br>
                <Imgsrc />
                <Link href="/tracker">戻る</Link>
            </>
        )
    }
    catch (error) {
        let errorMessage = "";
        if (error instanceof Error) {
            errorMessage = `検索エラー : ${error.message}`;
        }
        else {
            errorMessage = "未知のエラーです";
        }
        return (
            <>
                {errorMessage}
                <br></br>
                <Link href="/tracker">戻る</Link>
            </>
        )
    }
}

export default ResultPage