"use client"
import { useState, useEffect } from 'react';
import Graph from './Graph';
import DateRangeForm from './DateRangeForm';

export default function StatisticsPage() {
  const [data, setData] = useState([]);
  const [dateRange, setDateRange] = useState({ startDate: '', endDate: '' });

  function defaultDates() {
    const unti = 300
    const today = new Date();
    const endday = new Date();
    endday.setDate(today.getDate() - unti);

    return {
      startdate: today.toISOString().split('T')[0], // YYYY-MM-DD 形式
      enddate: endday.toISOString().split('T')[0], // YYYY-MM-DD 形式
    };
  }

  useEffect(() => {
    const fetchData = async () => {
      if (dateRange.startDate && dateRange.endDate) {
        const response = await fetch(`/api/statistics?startDate=${dateRange.startDate}&endDate=${dateRange.endDate}`);
        const result = await response.json();
        setData(result);
      }
      else{
        const { startdate, enddate} = defaultDates();
        const response = await fetch(`/api/statistics?startDate=${enddate}&endDate=${startdate}`);
        const result = await response.json();
        setData(result);
      }
    };

    fetchData();
  }, [dateRange]);

  const handleDateRangeSubmit = (startDate, endDate) => {
    setDateRange({ startDate, endDate });
  };

  return (
    <div>
      <DateRangeForm onSubmit={handleDateRangeSubmit} />
      <Graph data={data} />
    </div>
  );
}