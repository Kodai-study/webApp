"use client";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';


export default function Myform(props) {
  const [message, setMessage] = useState('');
  const [startdateValue, setStartDateValue] = useState('');
  const [enddateValue, setEndDateValue] = useState('');
  const [starttimeValue, setStarttimeValue] = useState('');
  const [endtimeValue, setEndValue] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (startdateValue == '' || starttimeValue == '' ||
      enddateValue == '' || endtimeValue == '') {
      setMessage('入力されていない値があります');
    }
    else {
      const queryParams = new URLSearchParams({
        StartDateTime: `${startdateValue} ${starttimeValue}`,
        EndDateTime: `${enddateValue} ${endtimeValue}`
      });
      router.push(`/test4-1?${queryParams}`);
    };
    e.preventDefault();
  };

  const startdateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartDateValue(e.target.value); 0
  };
  const enddateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndDateValue(e.target.value);
  };
  const starttimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStarttimeValue(e.target.value);
  };
  const stpotimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndValue(e.target.value);
  };

  return (
    <>
      <Container>
        <Row>
          <Col xs></Col>
          <Col xs={{ order: 12 }}></Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="dateform">
              <Form.Label>開始日時選択</Form.Label>
              <Form.Control
                type="date"
                name="startdate"
                value={startdateValue}
                onChange={startdateChange} />
              <Form.Control
                type="time"
                name="starttime"
                value={starttimeValue}
                onChange={starttimeChange} />
              <Form.Label>終了日時選択</Form.Label>
              <Form.Control
                type="date"
                name="enddate"
                value={enddateValue}
                onChange={enddateChange} />
              <Form.Control
                type="time"
                name="endtime"
                value={endtimeValue}
                onChange={stpotimeChange} />
              <Button variant="primary" type='submit'>送信</Button>
            </Form.Group>
          </Form>
          <Col xs={{ order: 4 }}></Col>
        </Row>
      </Container>
      開始日時：{startdateValue} {starttimeValue}<br></br>
      終了日時：{enddateValue} {endtimeValue}<br></br>
      {message}<br></br>
    </>
  );
}
