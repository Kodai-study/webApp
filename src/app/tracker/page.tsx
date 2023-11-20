'use client'
import { useRef, useState, useCallback } from "react";
import Webcam from "react-webcam";
import { useRouter } from 'next/navigation';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

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
        <h1>製品追跡</h1>
      </header>
      {isCaptureEnable || (
        <Button variant="primary" onClick={() => setCaptureEnable(true)}>撮影する</Button>
      )}
      {isCaptureEnable && (
        <>
          <div>
            <Button variant="secondary" onClick={() => setCaptureEnable(false)}>終了</Button>
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
          <Button variant="secondary" onClick={capture}>キャプチャ</Button>
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
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const router = useRouter();

  //ボタンをクリックした時のstate変数
  const onClickhandler = () => {
    setShowInput(!showInput);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/result?no=${inputValue}`);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <Button variant="primary" onClick={onClickhandler}>手動入力
        {showInput}
      </Button>{' '}
      {showInput &&
        <form onSubmit={handleSubmit}>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">シリアルナンバー</InputGroup.Text>
            <Form.Control
              placeholder="xxxxxxxx"
              value={inputValue}
              onChange={handleChange}
            />
          </InputGroup>
          <Button variant="secondary" type="submit">送信</Button>
        </form>
      }
    </>

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