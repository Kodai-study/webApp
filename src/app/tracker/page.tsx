"use client";
import React, { useState, useRef } from "react";
import Webcam from "react-webcam";
import jsQR from "jsqr";
import { useRouter } from "next/navigation";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Link from 'next/link';

const QRTestPage = () => {
  const [imageSrc, setImageSrc] = useState<string | ArrayBuffer | null>(null);
  const [qrCodeText, setQRCodeText] = useState("");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const webcamRef = useRef<Webcam>(null);
  const router = useRouter();

  const handleCapture = () => {
    if (webcamRef.current !== null) {
      const imageSrc = webcamRef.current.getScreenshot();
      setImageSrc(imageSrc);
      setQRCodeText("");
      setFeedbackMessage("");
    } else {
      console.log("CaptuerError")
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          if (e.target) {
            setImageSrc(e.target.result);
            setQRCodeText("");
            setFeedbackMessage("");
          }
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const handleAnalyzeClick = () => {
    if (imageSrc && typeof imageSrc === 'string') {
      analyzeImage(imageSrc);
    } else {
      console.log("TypeError")
    }
  };

  const analyzeImage = (imageSrc: string) => {
    const image = new Image();
    image.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = image.width;
      canvas.height = image.height;
      if (canvas) {
        const context = canvas.getContext("2d");
        if (context) {
          context.drawImage(image, 0, 0, image.width, image.height);
          const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
          const qrCode = jsQR(imageData.data, imageData.width, imageData.height);
          if (qrCode) {
            setQRCodeText(qrCode.data);
            setFeedbackMessage("QRコードが正常に検出されました。");
          } else {
            setQRCodeText("");
            setFeedbackMessage("QRコードが見つかりませんでした。");
          }
        }
        else {
          console.log("ERROR")
        }
      }
      // context.drawImage(image, 0, 0, image.width, image.height);
      // const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
      // const qrCode = jsQR(imageData.data, imageData.width, imageData.height);
    };
    image.src = imageSrc;
  };

  const navigateToResult = () => {
    if (qrCodeText) {
      router.push(`/result?no=${encodeURIComponent(qrCodeText)}`);
    }
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

          {typeof imageSrc == "string" && (
            <div className="mt-4">
              <p>キャプチャー画面</p>
              <img src={imageSrc} alt="Captured Image" style={{ width: '300px', height: 'auto' }} />
            </div>
          )}

          <div className="mt-4">
            <Button onClick={handleCapture}>撮影ボタン</Button>
          </div>

          <div className="mt-4">
            <input type="file" onChange={handleFileChange} />
            <Button onClick={handleAnalyzeClick}>QR検出ボタン</Button>
          </div>

          <div className="mt-4">
            <p style={{ color: qrCodeText ? 'green' : 'red' }}>
              {feedbackMessage}
            </p>
            <p>検索するQRコード：{qrCodeText}</p>
          </div>

          <div className="mt-4">
            <input
              placeholder="シリアルナンバー入力"
              onChange={(e) => setQRCodeText(e.target.value)}
              className="border p-2 rounded"
            />
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
