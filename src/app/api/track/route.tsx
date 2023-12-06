import { LogDB } from "../login/loginDB"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  console.log("GET request", searchParams.get("name"))

  return new Response(JSON.stringify({ message: "Hello World" }))
}

// ポストした時の処理
export async function POST(request: Request) {
  const body = await request.json()
  const result = await LogDB(body.id, body.password)
  return new Response(JSON.stringify({ result: result }))
}
