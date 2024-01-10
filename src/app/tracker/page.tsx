'use client'
import { QrCaputure } from "./Cam";
import { Input } from "./ManualInput";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function App() {
  return (
    <>
      <Container>
        <h1>製品追跡</h1>
        <Row>
          <Col>
            <QrCaputure></QrCaputure>
          </Col>
        </Row>
        <br /><br />
        <Col>
        <Input></Input>
        </Col>
      </Container>
    </>
  );
}