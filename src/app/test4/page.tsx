'use client'
import jsQR from 'jsqr'
import Link from 'next/link'
import React, { useRef, useState, useEffect, FC } from 'react'

type Props = {}
const QrCodeScanner: FC<Props> = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [result, setResult] = useState('')
  const [error, setError] = useState('')

useEffect(() => {
  const constraints = {
    video: {
      facingMode: 'environment',
      width: { ideal: 300 },
      height: { ideal: 300 },
    },
  }

  // デバイスのカメラにアクセスする
  navigator.mediaDevices
    .getUserMedia(constraints)
    .then((stream) => {
      // デバイスのカメラにアクセスすることに成功したら、video要素にストリームをセットする
      if (videoRef.current) {
        videoRef.current.srcObject = stream
        videoRef.current.play()
        scanQrCode()
      }
    })
    .catch((err) => console.error('Error accessing media devices:', err))

  const currentVideoRef = videoRef.current

  // コンポーネントがアンマウントされたら、カメラのストリームを停止する
  return () => {
    if (currentVideoRef && currentVideoRef.srcObject) {
      const stream = currentVideoRef.srcObject as MediaStream
      const tracks = stream.getTracks()
      tracks.forEach((track) => track.stop())
    }
  }
}, [])

  const scanQrCode = () => {
    const canvas = canvasRef.current
    const video = videoRef.current
    if (canvas && video) {
      const ctx = canvas.getContext('2d')
      if (ctx) {
        // カメラの映像をcanvasに描画する
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
        // QRコードをスキャンする
        const qrCodeData = jsQR(imageData.data, imageData.width, imageData.height)
        if (qrCodeData) {
          // スキャンされた内容を確認する
          if (qrCodeData.data !== 'http://localhost:3000/result') {
            setError('対応していないQRコードです')
            setTimeout(scanQrCode, 100) // スキャンの頻度を制限
            return
          }
          setResult(qrCodeData.data)
          return
        }
        setTimeout(scanQrCode, 100)
      }
    }
  }

  return (
    <div>
      {!result && (
        <div className='flex justify-center'>
          <div className='relative h-[300px] w-[300px]'>
            <video ref={videoRef} autoPlay playsInline className='absolute left-0 top-0 -z-50 h-[300px] w-[300px]' />
            <canvas ref={canvasRef} width='300' height='300' className='absolute left-0 top-0' />
          </div>
        </div>
      )}
      {result && (
        <div className='flex justify-center'>
          <Link href={result}>
            <button>push</button>
          </Link>
        </div>
      )}
      {error && <p className='text-center text-xs text-red-500'>{error}</p>}
    </div>
  )
}

export default QrCodeScanner

// export default function App() {
//   return (
//     <>
//       <img src="imgs/test/test.png">
//       </img>
//     </>
//   );
// }