"use client"
import { useState } from 'react';

const DateRangeForm = ({ onSubmit }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(startDate, endDate);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
      <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
      <button type="submit">検索</button>
    </form>
  );
};

export default DateRangeForm;