"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

type loginState = { id: string, password: string }

export default function Home() {
    const [postedData, setPostedData] = useState<string>('')
    const router = useRouter()
    //送信ボタンが押された時の処理
    const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const employ_id = formData.get('employ_id') as string;
        const password = formData.get('password') as string;
        const loginstate: loginState = { id: employ_id, password: password };

        const res = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginstate),
        });

        const data = await res.json()
        // const data = await res.text();

        if (data.message == "login success") {
            //setPostedData('OK')
            router.push("/home");
        } else {
            setPostedData('社員番号またはパスワードが違います。');
        }
        console.log(data);
    };

    return (
        <>
            <Container>
                <Row>
                    <Col xs></Col>
                    <Col xs={{ order: 12 }}>
                        <h1>Login</h1>
                        <Form onSubmit={onSubmitHandler} className='flex flex-col justify-center' action='/api/form' method='POST'>
                            <Form.Group className="mb-3">
                                <Form.Label>社員番号</Form.Label>
                                <Form.Control type="text" placeholder='userID' name='employ_id' />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>パスワード</Form.Label>
                                <Form.Control type="password" placeholder='password' name='password' />
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