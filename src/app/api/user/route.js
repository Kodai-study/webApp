import {DB} from './DB.js'

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  console.log("GET request", searchParams.get("name"))

  return new Response(JSON.stringify({ message: "Hello World" }))
}

// ポストした時の処理
export async function POST(request) {
  const body = await request.json()
  return new Response(
    await DB(body.beforepass, body.afterpass)
  )
}