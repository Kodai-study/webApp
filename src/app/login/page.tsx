// 'use client'
// // import { NextResponse } from 'next/server';
// // import * as mysql from 'promise-mysql';
// import React from 'react';
// import Link from 'next/link';
// import style from '../test.module.css';
// import {useState}  from 'react'
// import getTables from 'testDatabase'

// const SubmitComponent= ({updateMessage}) => {
//     return(
//     <button onClick={()=>alert("push")}>
//         Buddon
//     </button>); 
// };
    
// const Login = () => {
 
//     const [message,setMessage] = useState('ここにデータベースの文字列が来る')
//     const updateMessage = (message) => {
//         setMessage(message);
//     }
//   return (
//     <div className={style.container}>
//       <h1>Login</h1>
//       <form id ="login">
//         社員番号<input type="text" className={style.text}></input>
//       </form>
//       <form id ="login2">
//         パスワード<input type="text" className={style.text}></input>
//       </form>
//       <button onClick={()=>alert("push")}>
//         asdf
//     </button>
//       {message}
//         <SubmitComponent updateMessage={updateMessage}/>
//       <p>
//         Don't have an account?{' '}
//         <Link href="/test">
//           Register here
//         </Link>
//       </p>
//     </div>
//   );
// };

// export default Login;

// export async function GET() {
//     const connection = await mysql.createConnection({
//       host: '192.168.16.101',
//       port: 3306,
//       database: 'test',
//       user: 'AMS',
//       password: '2023r05T%'
//     });
  
//     const sql = 'show tables;';
//     const result = await connection.query(sql);
//     connection.end();
  
//     return JSON.stringify(result);
//   }
  

//newvar------

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
    <textbox></textbox>
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
      <h1>ログイン</h1>
      <Logtextbox></Logtextbox>
    </dev>
  );
}