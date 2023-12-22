import Form from 'react-bootstrap/Form';
import React from "react";

export default function Select(props) {
  const { setStartEventHandler, setStopEventHandler } = props
  const startEventChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStartEventHandler(e.target.value);
  };
  const stopEventChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStopEventHandler(e.target.value);
  };

  return (
    <>
      <Form.Group controlId="dateform">
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
      </Form.Group>
    </>
  );
}
