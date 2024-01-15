"use client";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';

export default function Myform() {
  const [message, setMessage] = useState('');
  const [startdateValue, setStartDateValue] = useState('');
  const [stopdateValue, setStopdateValue] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (startdateValue == '' || stopdateValue == '') {
      setMessage('入力されていない値があります');
    }
    else {
      router.push(`/qualityresult?StartDateTime=${startdateValue}&EndDateTime=${stopdateValue}`);
    }
    e.preventDefault();
  };

  const startdateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartDateValue(e.target.value);
  };
  const stopdateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStopdateValue(e.target.value);
  };

  return (
    <>
      <Container>
        <h1>日時選択</h1>
        <Row>
          <Col xs></Col>
          <Col xs={{ order: 12 }}></Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="dateform">
              <Form.Label>開始日時選択</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={startdateValue}
                onChange={startdateChange} />
              <Form.Label>終了日時選択</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={stopdateValue}
                onChange={stopdateChange} />
              開始日時：{startdateValue}<br></br>
              終了日時：{stopdateValue}<br></br>
              {message}<br></br>
              <Button variant="primary" type='submit'>送信</Button>
            </Form.Group>
          </Form>
          <Col xs={{ order: 4 }}></Col>
        </Row>
      </Container>

    </>
  );
}