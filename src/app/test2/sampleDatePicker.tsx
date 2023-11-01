'use client'
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import HtmlDateInput from './testHtmlInputDate';
import Box from '../../components/borderBox'

export default function Home() {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    useEffect(() => {
        setSelectedDate(new Date());
    }, []);

    return (
        <div>
            <Box>
                {selectedDate ? selectedDate.toString() : 'Loading...'}
                {selectedDate && <DatePicker selected={selectedDate} onChange={(date: Date) => setSelectedDate(date)} />}
            </Box>
            <Box>
                <HtmlDateInput />
            </Box>
        </div>
    );
}
