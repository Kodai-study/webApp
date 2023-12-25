'use client'
import Form from 'react-bootstrap/Form';

export default function Select(props) {
  const list = props.props

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
          {list.map((option, index) => (
            <option key={index} value={option.process_id}>{option.process_name}</option>
          ))}
        </Form.Select>
        <Form.Select aria-label="イベント選択2" onChange={stopEventChange}>
          {list.map((option, index) => (
            <option key={index} value={option.process_id}>{option.process_name}</option>
          ))}
        </Form.Select>
      </Form.Group>
    </>
  );
}