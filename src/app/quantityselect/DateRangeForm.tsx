"use client"
import { useState } from 'react';
import Head from 'next/head';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const DateRangeForm = ({ onSubmit }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(startDate, endDate);
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css" />
        <title>日付選択フォーム</title>
        <style>
          {`
            main {
              padding: 1rem;
              max-width: 600px;
              margin: auto;
              background-color: red;
            }
            form {
              display: grid;
              gap: 1rem;
            }
          `}
        </style>
      </Head>
      <main className="container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="start-date">開始日</label>
          <input
            type="date"
            id="start-date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />

          <label htmlFor="end-date">終了日</label>
          <input
            type="date"
            id="end-date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />

          <button type="submit">検索</button>
        </form>
      </main>

      {/* <Form onSubmit={handleSubmit}>
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
        <button type="submit">検索</button>
      </Form> */}
    </>
  );
};

export default DateRangeForm;