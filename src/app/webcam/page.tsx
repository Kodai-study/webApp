"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from 'react-bootstrap/Button';

interface CamProps {
    streamNumber: number;
    children: React.ReactNode;
    isSelected: boolean;
    onSelect: () => void;
}

function Cam({ streamNumber, children, isSelected, onSelect }: CamProps) {
    return (
        <div 
            className={`flex flex-col items-center p-4 border border-gray-200 rounded-lg cursor-pointer ${isSelected ? 'bg-gray-100 scale-150' : 'bg-white scale-100'}`}
            onClick={onSelect}
            style={isSelected ? { zIndex: 10 } : {}}
        >
            <h2 className="text-lg font-semibold mb-2">{children}</h2>
            <img 
                src={`https://192.168.16.101:1919/?action=stream_${streamNumber}`} 
                className={`max-w-full h-auto rounded ${isSelected ? 'scale-150' : 'scale-100'}`} 
                alt={`Camera stream ${streamNumber}`}
            />
        </div>
    );
}

export default function Home() {
    const [selectedCam, setSelectedCam] = useState<number | null>(null);
    const router = useRouter();

    const handleSelectCam = (streamNumber: number) => {
        setSelectedCam(selectedCam === streamNumber ? null : streamNumber);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">監視カメラ</h1>
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${selectedCam !== null ? 'opacity-50' : ''}`}>
                <Cam 
                    streamNumber={0}
                    isSelected={selectedCam === 0}
                    onSelect={() => handleSelectCam(0)}
                >
                    カメラ映像1
                </Cam>
                <Cam 
                    streamNumber={1}
                    isSelected={selectedCam === 1}
                    onSelect={() => handleSelectCam(1)}
                >
                    カメラ映像2
                </Cam>
            </div>
            {selectedCam !== null && (
                <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center backdrop-blur-sm z-20">
                    <Cam 
                        streamNumber={selectedCam}
                        isSelected={true}
                        onSelect={() => handleSelectCam(selectedCam)}
                    >
                        カメラ映像{selectedCam + 1}
                    </Cam>
                </div>
            )}
            <Button 
                variant="secondary" 
                className="mt-4" 
                onClick={() => router.push("/home")}
            >
                戻る
            </Button>
        </div>
    );
}




// "use client"
// import React from 'react';
// import { useRouter } from 'next/navigation';
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';

// interface CamProps {
//     streamNumber: number;
//     children: React.ReactNode;
// }

// function Cam({ streamNumber, children }: CamProps) {
//     return (
//         <div>
//             {children}
//             <img src={`https://192.168.16.101:1919/?action=stream_${streamNumber}`} />
//         </div>
//     );
// }

// export default function Home() {
//     const router = useRouter();
//     return (
//         <>
//             <Container>
//                 <h1>監視カメラ</h1>
//                 <Cam streamNumber={0}>カメラ映像1</Cam>
//                 <Cam streamNumber={1}>カメラ映像2</Cam>
//                 <Button variant="secondary" onClick={() => router.push("/home")}>戻る</Button>{' '}
//             </Container>
//         </>
//     );

// }
