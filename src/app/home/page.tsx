import React from 'react';
import Link from 'next/link';
import style from '../test.module.css';

export default function home() {
    return (
      <div className={style.container}>
        <h1 className={style.h1}>HOME</h1>
        <br></br>
        <Link href="/tracking">
            製品追跡
        </Link>
        <br></br>
        <Link href="/test">
            統計データ
        </Link>
        <br></br>
        <Link href="/cam">
            カメラ
        </Link>
        <br></br>
        <Link href="/user">
            ユーザー管理
        </Link>
      </div>
    );
}