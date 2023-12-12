"use client"
import React, { useState } from 'react';
import 'flatpickr/dist/flatpickr.min.css';
import { Japanese } from 'flatpickr/dist/l10n/ja.js';
import Flatpickr from 'react-flatpickr';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link';

function SelectSizesExample() {
    return (
        <>
            <Form.Select>
                <option>T1</option>
                <option>T2</option>
                <option>T3</option>
                <option>T4</option>
                <option>T5</option>
                <option>T6</option>
            </Form.Select>
            <Form.Select>
                <option>T1</option>
                <option>T2</option>
                <option>T3</option>
                <option>T4</option>
                <option>T5</option>
                <option>T6</option>
            </Form.Select>
        </>
    );
}

export function Datepick() {
    const [start, setStart] = useState()
    /** 開始日の設定 */
    const start_option = {
        locale: Japanese,
        dateFormat: 'Y/m/d(D)',
        maxDate: new Date(),
    }

    /**終了日の設定 */
    const end_option = {
        locale: Japanese,
        dateFormat: 'Y/m/d(D)',
        maxDate: start,
    }

    // const[showDate, setshowDate] = useState<Date>()

    // console.log(showate);
    return (
        <>
            <form>
                <div>
                    <label>開始日</label>
                    <Flatpickr
                        options={start_option}
                        className="bg-white border border-gray-300 block w-full p-2.5 shadow;"
                        onChange={([date]) => {
                            setStart(date)
                            field.onChange(date)
                        }}
                    />
                </div>
                <div>
                    <label>終了日</label>
                    <Flatpickr
                        className="bg-white border border-gray-300 block w-full p-2.5 shadow;"
                        options={end_option}
                        onChange={([date]) => field.onChange(date)}
                    />
                </div>
                <input type="submit" />
            </form>
        </>
    )
}

export default function App() {
    return (
        <>
            <Container>
                <Row>
                    <Col><Datepick /></Col>
                    <Col><SelectSizesExample /></Col>
                </Row>
            </Container>
            <Link href="/timestatistics">送信</Link>
        </>
    );
}