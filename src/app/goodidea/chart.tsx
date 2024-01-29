"use client"
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

type ChartProps = {
  data: any[];
};
// dataのデータを表示させる
export default function Chart(props: ChartProps) {

  const data = {
    labels: [] as string[],
    datasets: [
      {
        data: [],
        backgroundColor: ['rgba(255,0,0,0.8)', 'rgba(0,0,255,0.8)', '#FFCE56'], // それぞれのセクションの色
        hoverBackgroundColor: ['rgba(255,0,0,0.8)', 'rgba(0,0,255,0.8)', '#FFCE56'],
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