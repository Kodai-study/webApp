import React, { useState } from 'react';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

const DP = () => {
  const [startDateTime, setStartDateTime] = useState('');
  const [stopDateTime, setStopDateTime] = useState('');

  const startDateTimeChange = (moment) => {
    setStartDateTime(moment.format()); // 選択された日時をフォーマットしてセット
  };  
  const stopDateTimeChange = (moment) => {
    setStopDateTime(moment.format()); // 選択された日時をフォーマットしてセット
  };

  return (
    <div>
      <p>選択した開始日時: {startDateTime}</p>
      <p>選択した終了日時: {stopDateTime}</p>
      <br></br>
      開始日時
      <Datetime
        onChange={startDateTimeChange}
        dateFormat="YYYY-MM-DD"
        timeFormat="HH:mm"
      />
    終了日時
      <Datetime
        onChange={stopDateTimeChange}
        dateFormat="YYYY-MM-DD"
        timeFormat="HH:mm"
      />
    </div>
  );
};

export default DP;