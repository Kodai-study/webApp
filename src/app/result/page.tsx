import DBGet1Colum from "./DB"
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import EX from './exchange'

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

        const workdata = re[0]
        workdata.processing_date = workdata.processing_date.toISOString();
        return (
            <>
                <Container>
                    <h1>検索結果</h1>
                    <EX productData={workdata}></EX>
                    <Link href="/tracker">
                        <Button variant="secondary" type='submit'>戻る</Button>
                    </Link>
                </Container>
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
                <Container>
                    <h1>検索結果</h1>
                    {errorMessage}
                    <br></br>
                    <Link href="/tracker">
                        <Button variant="secondary" type='submit'>戻る</Button>
                    </Link>
                </Container>
            </>
        )
    }
}

export default ResultPage