"use client";
import React, { useState, FormEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export type loginInformation = { id: string, password: string };

export default function Home() {
  const [postedData, setPostedData] = useState<string>('');
  const router = useRouter();

  // 送信ボタンが押された時の処理
  const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const id = formData.get('id') as string;
    const password = formData.get('password') as string;
    const loginstate: loginInformation = { id: id, password: password };

    const res = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginstate),
    });

    const data = await res.text();

    if (data == '1') {
      setPostedData('OK');
      router.push("/home");
    } else {
      setPostedData('NG');
    }
    console.log(data);
  }

  return (
    <main>
      <h1>Next JS APIのテスト</h1>
      <form onSubmit={onSubmitHandler} className='flex flex-col justify-center' action='/api/form' method='POST'>
        <input type='text' name='id' placeholder='userid' />
        <input type='password' name='password' placeholder='password' />
        <button type='submit'>送信</button>
      </form>

      <p>APIから受け取った値{postedData}</p>
    </main>
  );
}
