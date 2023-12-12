import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useRouter } from "next/navigation";


const InputSerialNumber = () => {
    const [inputValue, setInputValue] = useState('');
    const router = useRouter();
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.push(`/result?no=${inputValue}`);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">シリアルナンバー</InputGroup.Text>
                <Form.Control
                    placeholder="xxxxxxxx"
                    value={inputValue}
                    onChange={handleChange} />
            </InputGroup>
            <Button variant="secondary" type="submit">送信</Button>
        </form>
    );
}

export function Input() {
    const [showInput, setShowInput] = useState(false);

    //ボタンをクリックした時のstate変数
    const onClickhandler = () => {
        setShowInput(!showInput);
    };

    return (
        <>
            <Button variant="primary" onClick={onClickhandler}>手動入力
                {showInput}
            </Button>{' '}
            {showInput &&
                <InputSerialNumber />
            }
        </>
    );
}
