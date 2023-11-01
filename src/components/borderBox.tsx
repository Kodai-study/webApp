// 'use client'
import React, { ReactNode } from 'react';

interface BorderBoxProps {
    children: ReactNode;
}

const BorderBox: React.FC<BorderBoxProps> = ({ children }) => {
    const style = {
        border: '5px solid black',
        padding: '20px',
        margin: '20px'
    };

    return (
        <div style={style}>
            {children}
        </div>
    );
}

export default BorderBox;
