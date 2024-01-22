import { DB } from './DB'

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    console.log("GET request", searchParams.get("name"))

    return new Response(JSON.stringify({ message: "Hello World" }))
}

export async function POST(request: Request) {
    const body = await request.json()
    const dbResult = await DB(body.beforepass, body.afterpass)
    return new Response(
        dbResult.toString()
    )
}