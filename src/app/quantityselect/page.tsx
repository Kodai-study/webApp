"use client"
import { useState, useEffect } from 'react';
import Graph from './Graph';
import Container from 'react-bootstrap/Container';
import Select from '@/components/select'

export default function StatisticsPage() {
  const [data, setData] = useState([]);
  const [dateRange, setDateRange] = useState({ startDate: '', endDate: '' });

  function defaultDates() {
    const daysago = 3
    const today = new Date();
    const endday = new Date();
    endday.setDate(today.getDate() - daysago);

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
      else {
        const { startdate, enddate } = defaultDates();
        const response = await fetch(`/api/statistics?startDate=${enddate}&endDate=${startdate}`);
        const result = await response.json();
        setData(result);
      }
    };

    fetchData();
  }, [dateRange]);

  const handleDateRangeSubmit = (e, startDate, endDate) => {
    e.preventDefault();
    setDateRange({ startDate, endDate });
  };

  return (
    <div>
      <Container>
        <h1>加工数統計データ</h1>
        <Graph data={data} />
        <Select onSubmit={handleDateRangeSubmit} />
      </Container>
    </div>
  );
}