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
        backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'], // それぞれのセクションの色
        hoverBackgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
      },
    ],
  };
  
  props.Qdata.forEach((row) => {
    data.labels.push(row.judgment === null ? 'Unknown' : row.judgment === 0 ? 'Good' : 'Defective');
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