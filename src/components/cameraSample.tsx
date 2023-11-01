'use client'
import { useEffect, useRef } from 'react';

const CameraComponent = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true })
                .then((stream) => {
                    if (videoRef.current) {
                        videoRef.current.srcObject = stream;
                    }
                })
                .catch((error) => {
                    console.error("Error accessing the camera: ", error);
                });
        }
    }, []);

    return (
        <div>
            <video ref={videoRef} autoPlay={true} />
        </div>
    );
};

export default CameraComponent;
