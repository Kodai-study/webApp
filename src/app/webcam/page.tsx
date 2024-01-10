"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

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
        <>
            <Container>
                <h1>監視カメラ</h1>
                <Cam streamNumber={0}>カメラ映像1</Cam>
                <Cam streamNumber={1}>カメラ映像2</Cam>
                <Button onClick={() => router.push("/home")}>戻る</Button>{' '}
            </Container>
        </>
    );

}