"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Home() {
  const [postedData, setPostedData] = useState('')
  const router = useRouter()
  //送信ボタンが押された時の処理
  const onSubmitHandler = async (e) => {
    e.preventDefault()
    const loginstate = { id: e.target[0].value, password: e.target[1].value }
    //
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginstate),

    })
    // const data = await res.json()

    const data = await res.text()

    if (data == 1) {
      //setPostedData('OK')
      router.push("/home")
    }
    else {
      setPostedData('社員番号またはパスワードが違います。')
    }
    console.log(data)
  }

  return (
    <>
      <Container>
        <Row>
          <Col xs></Col>
          <Col xs={{ order: 12 }}>
            <h1>Login</h1>
            <Form onSubmit={onSubmitHandler} className='flex flex-col justify-center' action='/api/form' method='POST'>
              <Form.Group className="mb-3" name="id">
                <Form.Label>社員番号</Form.Label>
                <Form.Control type="text" placeholder='userID' />
              </Form.Group>
              <Form.Group className="mb-3" name="id">
                <Form.Label>パスワード</Form.Label>
                <Form.Control type="password" placeholder='password' />
              </Form.Group>
              <Button variant="primary" type='submit'>送信</Button>
            </Form>
            <p>{postedData}</p>
          </Col>
          <Col xs={{ order: 1 }}></Col>
        </Row>
      </Container>
    </>
  )
}