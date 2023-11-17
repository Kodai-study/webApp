'use client'
import { useRef, useState, useCallback } from "react";
import Webcam from "react-webcam";
import { useRouter } from 'next/navigation';
//import "./styles.css";

const videoConstraints = {
  width: 720,
  height: 360,
  facingMode: "user"
};

export function Cam() {
  const [isCaptureEnable, setCaptureEnable] = useState<boolean>(false);
  const webcamRef = useRef<Webcam>(null);
  const [url, setUrl] = useState<string | null>(null);
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      setUrl(imageSrc);
    }
  }, [webcamRef]);

  return (
    <>
      <header>
        <h1>画像検索</h1>
      </header>
      {isCaptureEnable || (
        <button onClick={() => setCaptureEnable(true)}>撮影する</button>
      )}
      {isCaptureEnable && (
        <>
          <div>
            <button onClick={() => setCaptureEnable(false)}>終了</button>
          </div>
          <div>
            <Webcam
              audio={false}
              width={540}
              height={360}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
            />
          </div>
          <button onClick={capture}>キャプチャ</button>
        </>
      )}
      {url && (
        <>
          <div>
            <button
              onClick={() => {
                setUrl(null);
              }}
            >
              削除
            </button>
          </div>
          <div>
            <img src={url} alt="Screenshot" />
          </div>
        </>
      )}
    </>
  );
};

export function Input(camresurlt) {
  const router = useRouter();
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/result?no=${inputValue}`);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        シリアルナンバー手動入力：
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
        />
      </label>
      <button type="submit">送信</button>
    </form>
  );
}

export default function App() {
  return (
    <div>
      <Cam></Cam>
      <Input></Input>
    </div>
  );

}