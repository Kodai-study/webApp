'use client'
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode, Key } from 'react';
import Form from 'react-bootstrap/Form';

export default function Select(props: { props?: any; setStartEventHandler?: any; setEndEventHandler?: any; }) {
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
          {list.map((option: { process_id: string | number | readonly string[] | undefined; process_name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; }, index: Key | null | undefined) => (
            <option key={index} value={option.process_id}>{option.process_name}</option>
          ))}
        </Form.Select>
        <Form.Select aria-label="イベント選択2" onChange={endEventChange}>
          <option value="">----</option>
          {list.map((option: { process_id: string | number | readonly string[] | undefined; process_name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; }, index: Key | null | undefined) => (
            <option key={index} value={option.process_id}>{option.process_name}</option>
          ))}
        </Form.Select>
      </Form.Group>
    </>
  );
}