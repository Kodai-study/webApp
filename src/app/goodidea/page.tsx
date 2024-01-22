"use client"
import { useState, useEffect } from 'react';
import Graph from './chart';
import Container from 'react-bootstrap/Container';
import Select from '@/components/select'

export default function StatisticsPage() {
  const [data, setData] = useState([]);
  const [dateRange, setDateRange] = useState({ startDate: '', endDate: '' });

  function defaultDates() {
    const today = new Date();
    const endday = new Date("1900-01-01");

    return {
      startdate: today.toISOString().split('T')[0], // YYYY-MM-DD 形式
      enddate: endday.toISOString().split('T')[0], // YYYY-MM-DD 形式
    };
  }

  useEffect(() => {
    const fetchData = async () => {
      if (dateRange.startDate && dateRange.endDate) {
        const response = await fetch(`/api/goodidea?startDate=${dateRange.startDate}&endDate=${dateRange.endDate}`);
        const result = await response.json();
        setData(result);
      }
      else {
        const { startdate, enddate } = defaultDates();
        const response = await fetch(`/api/goodidea?startDate=${enddate}&endDate=${startdate}`);
        const result = await response.json();
        setData(result);
      }
    };

    fetchData();
  }, [dateRange]);

  const handleDateRangeSubmit = (e: React.FormEvent<HTMLFormElement>, startDate: string, endDate: string) => {
    e.preventDefault();
    setDateRange({ startDate, endDate });
  };

  return (
    <div>
      <Container>
        <h1>良品率統計データ
        </h1>
        <Graph data={data} />
        <Select onSubmit={handleDateRangeSubmit} />
      </Container>
    </div>
  );
}