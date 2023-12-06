import { LogDB } from './loginDB.js'

export async function GET(request: Request) {
    return new Response(
        JSON.stringify({ message: 'hello world' }),
        {
            headers: {
                'content-type': 'application/json;charset=UTF-8',
            },
        },
    )
}

type LoginInformation = {
    username: string;
    password: string;
}

// リクエストボディがLoginInformation型に適合しているか検証する関数
function isValidLoginInformation(data: any): data is LoginInformation {
    return (
        data &&
        typeof data === 'object' &&
        typeof data.username === 'string' &&
        typeof data.password === 'string'
    );
}

// ポストした時の処理
export async function POST(request: Request) {

    const body = await request.json();
    if (!isValidLoginInformation(body)) {
        return new Response(
            JSON.stringify({ message: 'invalid request' }),
            {
                headers: {
                    'content-type': 'application/json;charset=UTF-8',
                },
                status: 400,
            },
        );
    }
    const result = await LogDB(body.username, body.password);
    if (result) {
        return new Response(
            JSON.stringify({ message: 'login success' }),
            {
                headers: {
                    'content-type': 'application/json;charset=UTF-8',
                },
            },
        );
    } else {
        return new Response(
            JSON.stringify({ message: 'login failed' }),
            {
                headers: {
                    'content-type': 'application/json;charset=UTF-8',
                },
                status: 401,
            },
        );
    }
}

