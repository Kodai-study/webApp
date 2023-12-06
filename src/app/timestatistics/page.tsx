// pages/index.jsar

import React from 'react';
import BarChart from './bar';

const Home = () => {
  const chartData = [10, 20, 30, 35, 35, 35, 40, 50, 70, 90, 1000];

  return (
    <div>
      <h1>Bar Chart Example</h1>
      <BarChart data={chartData} />
    </div>
  );
};

export default Home;