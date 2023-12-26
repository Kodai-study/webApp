'use client'
import Form from 'react-bootstrap/Form';

export default function Select(props) {
  const list = props.props

  const { setStartEventHandler, setEndEventHandler } = props
  const startEventChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStartEventHandler(e.target.value);
  };
  const endEventChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setEndEventHandler(e.target.value);
  };
  return (
    <>
      <Form.Group controlId="dateform">
        <Form.Label>イベント選択</Form.Label>
        <Form.Select aria-label="イベント選択" onChange={startEventChange}>
          <option value="">----</option>
          {list.map((option, index) => (
            <option key={index} value={option.process_id}>{option.process_name}</option>
          ))}
        </Form.Select>
        <Form.Select aria-label="イベント選択2" onChange={endEventChange}>
          <option value="">----</option>
          {list.map((option, index) => (
            <option key={index} value={option.process_id}>{option.process_name}</option>
          ))}
        </Form.Select>
      </Form.Group>
    </>
  );
}