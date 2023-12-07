"use client"
import React, { useState } from 'react'
import 'flatpickr/dist/flatpickr.min.css'
import { Japanese } from 'flatpickr/dist/l10n/ja.js'
import Flatpickr from 'react-flatpickr'

export default function Home() {
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
    return (
        <form className='grid gap-4 place-content-center min-h-screen'>
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
            <input type="submit" />aa
        </form>
    )
}

