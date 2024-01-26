"use client";
import React, { useState, useRef, useEffect } from "react";
import Webcam from "react-webcam";
import jsQR from "jsqr";
import { useRouter } from "next/navigation";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Link from 'next/link';

const QRTestPage = () => {
  const [qrCodeText, setQRCodeText] = useState("");
  const [lastDetectedQR, setLastDetectedQR] = useState("");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [showManualEntry, setShowManualEntry] = useState(false);
  const webcamRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const captureInterval = setInterval(() => {
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc) {
        analyzeImage(imageSrc);
      }
    }, 1000); // 1秒ごとにキャプチャ

    return () => clearInterval(captureInterval);
  }, []);

  const analyzeImage = (imageSrc) => {
    const image = new Image();
    image.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = image.width;
      canvas.height = image.height;
      const context = canvas.getContext("2d");
      context.drawImage(image, 0, 0, image.width, image.height);
      const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
      const qrCode = jsQR(imageData.data, imageData.width, imageData.height);

      if (qrCode && qrCode.data !== lastDetectedQR) {
        setQRCodeText(qrCode.data);
        setLastDetectedQR(qrCode.data);
        setFeedbackMessage("QRコードが正常に検出されました。");
      }
    };
    image.src = imageSrc;
  };

  const navigateToResult = () => {
    if (qrCodeText) {
      router.push(`/result?no=${encodeURIComponent(qrCodeText)}`);
    }
  };

  const toggleManualEntry = () => {
    setShowManualEntry(!showManualEntry);
  };

  return (
    <>
      <Container>
        <h1>製品検索画面</h1>
        <div className="p-4 flex flex-col items-center">
          <p>カメラ映像</p>
          <div className="flex justify-center">
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
            />
          </div>

          <div className="mt-4">
            <p style={{ color: qrCodeText ? 'green' : 'red' }}>
              {feedbackMessage}
            </p>
            <p>検出されたQRコード：{qrCodeText}</p>
          </div>

          <div className="mt-4">
            <Button onClick={toggleManualEntry}>
              {showManualEntry ? '手動入力を隠す' : '手動入力を表示'}
            </Button>
          </div>

          {showManualEntry && (
            <div className="mt-4">
              <input
                placeholder="QRコード値を手動で入力"
                onChange={(e) => setQRCodeText(e.target.value)}
                className="border p-2 rounded"
              />
            </div>
          )}

          <div className="mt-4">
            <Button onClick={navigateToResult}>検索</Button>
          </div>
        </div>
        <Link href="/home">
          <Button variant="secondary" type='submit'>戻る</Button>
        </Link>
      </Container>
    </>
  );
};

export default QRTestPage;
