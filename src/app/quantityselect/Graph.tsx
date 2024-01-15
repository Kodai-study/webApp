import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Graph = ({ data, aggregationMode }) => {
  const chartData = {
    labels: data.map(item => item.date), // または item.month
    datasets: [
      {
        label: aggregationMode === 'daily' ? '日別カウント' : '月別カウント',
        data: data.map(item => item.count),
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  return <Bar data={chartData} />;
};

export default Graph;