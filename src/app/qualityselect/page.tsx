import Link from 'next/link'
import Button from 'react-bootstrap/Button';
import DB from './DB.tsx'
import Select from './select.tsx'

export default function App() {
  return (
    <>
      <DB></DB>
      <Select></Select>
      <Link href="/statistics">
        <Button variant="primary">戻る</Button>{' '}
      </Link>
    </>
  );
} 