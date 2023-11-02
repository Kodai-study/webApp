import { NextResponse } from 'next/server';
import * as mysql from 'promise-mysql';
import React from 'react';
import Link from 'next/link';
import style from '../test.module.css';
import {useState}  from 'react'

const Logtextbox = () => {
  return (
    <dev>
    <form id ="login">
      社員番号<input type="text" className={style.text}></input>
    </form>
    <form id ="login2">
      パスワード<input type="text" className={style.text}></input>
    </form>
  </dev>
  );
}

export async function GET() {
  const connection = await mysql.createConnection({
    host: '192.168.16.101',
    port: 3306,
    database: 'test',
    user: 'AMS',
    password: '2023r05T%'
  });

  const sql = 'select * from m_employee where employee_no = ' + 2 + ';';
  const sql2 = 'select * from m_employee where employee_no = ' + 1 + ';';
  const result = await connection.query(sql);
  const result2 = await connection.query(sql2);
  connection.end();

  return JSON.stringify(result)+JSON.stringify(result2);
}

export default function Page() {
  return (
    <dev>
      <GET></GET>
      <Logtextbox></Logtextbox>
    </dev>
  );
}