"use client"
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

// dataのデータを表示させる
export default function Chart(props) {

  const data = {
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: ['red', 'blue', '#FFCE56'], // それぞれのセクションの色
        hoverBackgroundColor: ['red', 'blue', '#FFCE56'],
      },
    ],
  };
  
  props.data.forEach((row) => {
    data.labels.push(row.judgment === null ? 'null' : row.judgment === 0 ? '良品数' : '不良品数');
    data.datasets[0].data.push(row.count);
  });

  return (
    <div>
      <Pie data={data}
        width={400}
        height={400}
        options={{ maintainAspectRatio: false }}
      />
    </div>
  );
}