'use client'
import { useState } from 'react';
import jsQR from 'jsqr';

const QRCodeReader = () => {
    const [qrCodeData, setQRCodeData] = useState('');

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) {
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            const image = new Image();
            image.onload = () => {
                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');
                if (!context) {
                    console.error('context is null');
                    return;
                }
                canvas.width = image.width;
                canvas.height = image.height;
                context.drawImage(image, 0, 0, image.width, image.height);
                context.drawImage(image, image.width, 0, image.width, image.height);
                const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
                const code = jsQR(imageData.data, imageData.width, imageData.height, { inversionAttempts: "dontInvert" });
                if (code) {
                    setQRCodeData(code.data);
                } else {
                    setQRCodeData('No QR code found.');
                }
            };
            if (e.target === null || e.target.result === null) {
                console.error('e.target is null');
                return;
            }
            image.src = e.target.result.toString();
        };
        reader.readAsDataURL(file);
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} accept="image/*" />
            <p>QR Code Data: {qrCodeData}</p>
        </div>
    );
};

export default QRCodeReader;
