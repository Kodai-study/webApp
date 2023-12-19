"use client"
import React, { useState } from 'react';
import { BarChart, BarChart2 } from './bar';
import Button from 'react-bootstrap/Button';

//乱数生成機
function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// 10 個の乱数を持つ配列を生成する
const randomNumbersArray = Array.from({ length: 10 }, () => getRandomInt(44000, 52000));
const randomNumbersArray2 = Array.from({ length: 10 }, () => getRandomInt(48, 52));
const Home = () => {
  const chartData = randomNumbersArray;
  const chartData2 = randomNumbersArray2;
  const [showContents, setShowContents] = useState(false);
  const onClickhandler = () => {
    setShowContents(!showContents);
  }
  return (
    <>
      <h1>年加工数統計データ</h1>
      <BarChart data={chartData} />
      <Button onClick={onClickhandler}>平均値</Button>{' '}
      <Button>最大値</Button>{' '}
      <Button>最小値</Button>{' '}
      <Button>中央値</Button>{' '}
      <Button>標準偏差</Button>{' '}
      {showContents &&
        <BarChart2 data={chartData2} />
      }
    </>
  );
};

export default Home;