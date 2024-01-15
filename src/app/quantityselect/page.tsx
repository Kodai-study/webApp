// app/statistics/page.tsx
"use client"
import { useState } from 'react';
import Graph from './Graph';
import DateRangeForm from './DateRangeForm';

export default function StatisticsPage() {
  const [data, setData] =
useState([]);
const [aggregationMode, setAggregationMode] = useState('daily');

// APIからデータを取得する関数（ダミー）
const fetchData = async (startDate, endDate) => {
// APIリクエストのロジックをここに書く
// 結果をsetDataで設定する
};

// フォームのsubmitハンドラ
const handleSubmit = (startDate, endDate) => {
fetchData(startDate, endDate);
};

return (
<div>
<Graph data={data} aggregationMode={aggregationMode} />
<DateRangeForm onSubmit={handleSubmit} />
</div>
);
}