'use client'
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export const Cam = ({ children, streamNumber }) => {
    return (
        <div>
            {children}
            <img src={"http://192.168.16.101:8080/?action=stream_" + streamNumber} />
        </div>
    );
}


export default function home() {
    const router = useRouter();
    return (
        <dev>
            <Cam streamNumber={0}>監視カメラー</Cam>
            <Cam streamNumber={1}>監視カメラ2</Cam>
            <button onClick={() => router.push("/home")}>戻る</button>
        </dev>
    );

}