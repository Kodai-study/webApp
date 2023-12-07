"use client"
import React from 'react';
import { useRouter } from 'next/navigation';

interface CamProps {
    streamNumber: number;
    children: React.ReactNode;
}

function Cam({ streamNumber, children }: CamProps) {
    return (
        <div>
            {children}
            <img src={`https://192.168.16.101:1919/?action=stream_${streamNumber}`} />
        </div>
    );
}

export default function Home() {
    const router = useRouter();
    return (
        <div>
            <Cam streamNumber={0}>監視カメラー</Cam>
            <Cam streamNumber={1}>監視カメラ2</Cam>
            <button onClick={() => router.push("/home")}>戻る</button>
        </div>
    );

}