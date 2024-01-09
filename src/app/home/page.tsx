import React from 'react';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function home() {
    return (
        <>
            <Container>
                <h1>HOME</h1>
                <Row>
                    <Col>
                        <br></br>
                        <Link href="/tracker">
                            <Button variant="primary">製品追跡</Button>{' '}
                        </Link>
                    </Col>
                    <Col>
                        <br></br>
                        <Link href="/statistics">
                            <Button variant="primary">統計データ</Button>{' '}
                        </Link>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <br></br>
                        <Link href="/webcam">
                            <Button variant="primary">監視カメラ</Button>{' '}
                        </Link>
                    </Col>
                    <Col>
                        <br></br>
                        <Link href="/users">
                            <Button variant="primary">ユーザー管理</Button>{' '}
                        </Link>
                    </Col>
                </Row>
            </Container>
        </>
    );
}