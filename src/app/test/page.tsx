import { NextResponse } from 'next/server';
import * as mysql from 'promise-mysql';

export async function GET() {
  const connection = await mysql.createConnection({
    host: '192.168.16.101',
    port: 3306,
    database: 'test',
    user: 'AMS',
    password: '2023r05T%'
  });

  const sql = 'show tables;';
  const result = await connection.query(sql);
  connection.end();

  return JSON.stringify(result);
}

export default function Page({ users }) {
  return GET();
}