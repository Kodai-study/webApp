'use client';
import React, { useCallback, useRef, useState } from "react";
import Button from 'react-bootstrap/Button';
import Webcam from "react-webcam";

const videoConstraints = {
  width: 720,
  height: 360,
  facingMode: "user"
};

const CamCaputureBlock = ({ webcamRef, capture, setCaptureEnable }: {
  webcamRef: React.RefObject<Webcam>; capture: () => void; setCaptureEnable: (enable: boolean) => void;
}) => (<>
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
      videoConstraints={videoConstraints} />
  </div>
  <Button variant="secondary" onClick={capture}>キャプチャ</Button>
</>);


const CaputureImageBlock = ({ url, setUrl }: { url: string; setUrl: (url: string | null) => void; }) => (<>
  <div>
    <Button onClick={() => { setUrl(null); }}>
      削除
    </Button>
  </div>
  <div>
    <img src={url} alt="Screenshot" />
  </div>
</>);

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

      {isCaptureEnable &&
        <CamCaputureBlock webcamRef={webcamRef} capture={capture} setCaptureEnable={setCaptureEnable} />}

      {url && (
        <CaputureImageBlock url={url} setUrl={setUrl} />
      )}
    </>
  );
};
