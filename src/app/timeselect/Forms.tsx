"use client";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';

export default function Myform() {
  const [startEvent, setStartEvent] = useState('');
  const [stopEvent, setStopEvent] = useState('');
  const [message, setMessage] = useState('');
  const [startdateValue, setStartDateValue] = useState('');
  const [stopdateValue, setStopdateValue] = useState('');
  const [starttimeValue, setStarttimeValue] = useState('');
  const [stoptimeValue, setStopValue] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (startdateValue == '' || starttimeValue == '' ||
      stopdateValue == '' || stoptimeValue == '' ||
      startEvent == '' || startEvent == '') {
      setMessage('入力されていない値があります');
    }
    else {
      router.push(`/test3?StartDateTime=${startdateValue} ${starttimeValue}
                          &StopDateTime=${stopdateValue} ${stoptimeValue}
                          &starte=${startEvent}&stope=${startEvent}`);
    }
    e.preventDefault();
  };

  const startdateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartDateValue(e.target.value);
  };
  const stopdateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStopdateValue(e.target.value);
  };
  const starttimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStarttimeValue(e.target.value);
  };
  const stpotimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStopValue(e.target.value);
  };
  const startEventChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartEvent(e.target.value);
  };
  const stopEventChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStopEvent(e.target.value);
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
                name="date"
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
                name="date"
                value={stopdateValue}
                onChange={stopdateChange} />
              <Form.Control
                type="time"
                name="stoptime"
                value={stoptimeValue}
                onChange={stpotimeChange} />
              <Form.Label>イベント選択</Form.Label>
              <Form.Select aria-label="イベント選択" onChange={startEventChange}>
                <option value="">nothing</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
              <Form.Select aria-label="Default select example" onChange={stopEventChange}>
                <option value="">nothing</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
              <Button variant="primary" type='submit'>送信</Button>
            </Form.Group>
          </Form>
          <Col xs={{ order: 4 }}></Col>
        </Row>
      </Container>
      開始日時：{startdateValue} {starttimeValue}<br></br>
      終了日時：{stopdateValue} {stoptimeValue}<br></br>
      {message}<br></br>
      {startEvent}<br></br>
      {stopEvent}<br></br>
    </>
  );
}
