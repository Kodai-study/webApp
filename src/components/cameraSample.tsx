'use client'
import Webcam from "react-webcam";
import React, { useEffect, useState } from 'react';


function App() {

    const [cameras, setCameras] = useState([]);
    const [camera, setCamera] = useState(null);

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
                    ght:           <Webcam
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