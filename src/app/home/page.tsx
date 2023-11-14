import React from 'react';
import Link from 'next/link';
import style from '../test.module.css';

export default function home() {
    return (
      <div className={style.container}>
        <h1 className={style.h1}>HOME</h1>
        <br></br>
        <Link href="/tracker">
            製品追跡
        </Link>
        <br></br>
        <Link href="/statistics">
            統計データ
        </Link>
        <br></br>
        <Link href="/webcam">
            監視カメラ
        </Link>
        <br></br>
        <Link href="/users">
            ユーザー管理
        </Link>
      </div>
    );
}