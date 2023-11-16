'use client'
import Webcam from "react-webcam";
import React, { useEffect, useState } from 'react';

function App() {

  const [cameras, setCameras] = useState<MediaDeviceInfo[]>([]);
  const [camera, setCamera] = useState<MediaDeviceInfo | null>(null);

  useEffect(() => {
    navigator.mediaDevices.enumerateDevices().then(mediaDevices => {
      const devices = mediaDevices.filter(({ kind }) => kind === "videoinput");
      setCameras(devices);
      if (devices.length) {
        setCamera(devices[0]);
      }
    })
  }, [])

  return (
    <>
      <div className="bg-dark" style={{ minHeight: '100vh' }}>
        <div className="p-5">
          <Webcam
            videoConstraints={{
              width: 640,
              height: 480,
              deviceId: camera?.deviceId,
            }}
          />
        </div>
      </div>
    </>
  );
}

export default App;