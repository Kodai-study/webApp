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

// ポストした時の処理
export async function POST(request: Request) {
  const body = await request.json()
  return new Response(
    await LogDB(body.id, body.password)
  )
}

