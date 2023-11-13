// src/Login.tsx
'use client'
import React, { useState } from "react";
import { NextResponse } from 'next/server';
import * as mysql from 'promise-mysql';
import Link from 'next/link';


function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (username.trim() === "" || password.trim() === "") {
      alert("ユーザー名とパスワードを入力してください。");
    } else {
      alert("ログイン成功！");
      // ログインの実際の処理をここに追加できます
    }
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;