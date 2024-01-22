"use client";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Link from 'next/link';

type MyformProps = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>, startDate: string, endDate: string) => void;
};


export default function Myform({ onSubmit }: MyformProps) {
  const [startdateValue, setStartDateValue] = useState('');
  const [stopdateValue, setStopdateValue] = useState('');

  const startdateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartDateValue(e.target.value);
  };
  const stopdateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStopdateValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    onSubmit(e, startdateValue, stopdateValue);
  };

  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <Col md={6}>
            <h1 className="text-center mb-4">日時選択</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="dateform">
                <Form.Label>開始日時選択</Form.Label>
                <Form.Control
                  type="date"
                  name="date"
                  value={startdateValue}
                  onChange={startdateChange} />
              </Form.Group>
              <Form.Group controlId="dateform">
                <Form.Label>終了日時選択</Form.Label>
                <Form.Control
                  type="date"
                  name="date"
                  value={stopdateValue}
                  onChange={stopdateChange} />
              </Form.Group>
              <div className="my-3">
                <strong>開始日時：</strong>{startdateValue}<br />
                <strong>終了日時：</strong>{stopdateValue}<br />
              </div>
              <Button variant="primary" type="submit">検索</Button>
            </Form>
            <Link href="/statistics">
              <Button variant="secondary" type='submit'>戻る</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
}