'use client'
import Link from 'next/link';
import React from 'react';

const MyComponent = () => {
  const handleButtonClick = (buttonNumber) => {
    alert(`Button ${buttonNumber} clicked`);
  };

  return (
    <div>
      <Link href="/login">
        Go to Page 2
      </Link>
      <button onClick={() => handleButtonClick(1)}>Button 1</button>
      <button onClick={() => handleButtonClick(2)}>Button 2</button>
      <button onClick={() => handleButtonClick(3)}>Button 3</button>
      <button onClick={() => handleButtonClick(4)}>Button 4</button>
    </div>
  );
};

export default MyComponent;