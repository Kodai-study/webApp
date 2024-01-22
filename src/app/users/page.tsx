'use client'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Link from 'next/link';

type userState = { beforepass: string, afterpass: string }

export default function User() {
  const [showInput, setShowInput] = useState(false);
  // const router = useRouter();

  const onClickhandler = () => {
    setShowInput(!showInput);
  }

  const [validated, setValidated] = useState(false);
  const [hanteikekka, setHantei] = useState('');

  const hoge = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      return false;
    } setValidated(true);
    return true;
  }

  const hantei = (e: string) => {
    if (e != '0') {
      //NG
      setHantei('NG');
    } else {
      //OK
      setHantei('OK');
    }
  }

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (hoge(e) == false) {
      return;
    }
    const formData = new FormData(e.currentTarget);
    const beforepass = formData.get('beforepass') as string;
    const afterpass = formData.get('afterpass') as string;
    const userstate: userState = { beforepass: beforepass, afterpass: afterpass };
    const res = await fetch('/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userstate)
    });
    const data = await res.text();
    hantei(data);
    console.log(data);
  }

  return (
    <>
      <Container>
        <h1>ユーザー管理</h1><br />
        {/* 変更後のパスワードの空白禁止 */}
        <Button variant="primary" onClick={onClickhandler}>パスワード変更{showInput}</Button>{' '}
        {showInput &&
          <Form noValidate validated={validated} onSubmit={onSubmitHandler} className='flex flex-col justify-center' action='/api/form' method='POST'>
            <Form.Group as={Col} md="6" className="mb-3" type="invalid">
              <Form.Label>変更前</Form.Label>
              <Form.Control type="password" name='beforepass' placeholder='BeforePass' required />
              <Form.Control.Feedback type="invalid">
                untipuri.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" className="mb-3" type="invalid">
              <Form.Label>変更後</Form.Label>
              <Form.Control type="password" name='afterpass' placeholder='AfterPass' required />
              <Form.Control.Feedback type="invalid">
                untipuri.
              </Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" type='submit'>送信</Button>
            <p>値書き換え判定:{hanteikekka}</p>
          </Form>
        }
        <Link href="/home">
          <Button variant="secondary">戻る</Button>{' '}
        </Link>
      </Container>
    </>

  );
}
