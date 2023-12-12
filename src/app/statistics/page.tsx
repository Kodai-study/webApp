"use client"
import React from 'react';
import Link from 'next/link';

export default function Page() {
    return (
        <div>
            <h1>統計データ</h1>
            <Link href="/timeselect">加工時間統計</Link>
            <br></br>
            <Link href="/quantityselect">加工数統計</Link>
        </div>
    );
}