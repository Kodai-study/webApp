import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

type GraphDataItem = {
  date: string; // または Date、必要に応じて型を変更
  value: number;
  count: number;
  // 他のプロパティ...
};

type AggregationMode = 'daily' | 'monthly' | 'yearly'; // 例: aggregationMode の値として可能な文字列

type GraphProps = {
  data: GraphDataItem[];
  aggregationMode: AggregationMode;
};

const Graph: React.FC<GraphProps> = ({ data, aggregationMode }) => {
  const chartData = {
    labels: data.map(item => item.date), // または item.month
    datasets: [
      {
        label: aggregationMode === 'daily' ? '日別カウント' : '日別カウント',
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