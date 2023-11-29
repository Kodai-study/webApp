'use client'
import React, { Fragment, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

type userState = { id: string, password: string }

export default function User() {
  const [showInput, setShowInput] = useState(false);
 // const router = useRouter();
  
  const onClickhandler = () => {
    setShowInput(!showInput);
  }

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const employ_id = formData.get('employ_id') as string;
    const password = formData.get('password') as string;
    
    const userstate: userState = { id: employ_id, password: password };
    const res = await fetch('/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userstate)
    })
  }

  return(
    <>
      <Button variant="primary" onClick={onClickhandler}>パスワード変更{showInput}</Button>{' '}
      {showInput &&
        <Form onSubmit={onSubmitHandler} className='' action='/api/form' method='POST'>
          <Form.Group className="mb-3">
            <Form.Label>変更前</Form.Label>
            <Form.Control type="password" placeholder='BeforePass' name='BeforePass'></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>変更後</Form.Label>
            <Form.Control type="password" placeholder='AfterPass' name='BeforePass'></Form.Control>
          </Form.Group>
        </Form>
      }
    </>
  );
}
