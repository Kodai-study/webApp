import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

const Graph = ({ data, aggregationMode }) => {
  return (
    <BarChart width={600} height={300} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="count" fill="#8884d8" />
    </BarChart>
  );
};

export default Graph;