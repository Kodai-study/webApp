"use client"
import React from 'react';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Page() {
    return (
        <div>
            <Container>
                <h1>統計データ</h1>
                <Row>
                    <Col>
                        <br></br>
                        <Link href="/quantityselect">
                            <Button variant="primary">加工数統計</Button>{' '}
                        </Link>
                    </Col>
                    <Col>
                        <br></br>
                        <Link href="/goodidea">
                            <Button variant="primary">良品率統計</Button>{' '}
                        </Link>
                    </Col>
                </Row>
                <br />
                <Link href="/home">
                    <Button variant="secondary">戻る</Button>{' '}
                </Link>
            </Container>
        </div>
    );
}