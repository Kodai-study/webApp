'use client'
import React, { Fragment, useState } from 'react';
import Button from 'react-bootstrap/Button';

const ToggleComponent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(prevState => !prevState);
  };

  return (
    <div>
      <p>aaaa</p>
      <Button variant="primary" onClick={toggleVisibility}>Toggle Component</Button>{' '}
      {isVisible && <ChangePass />}
    </div>
  );
};

// 例としてダミーコンポーネントを定義
const ChangePass: React.FC = () => {
  return (
    <Fragment>
      <p>社員番号：</p>
      <form>
        <input type='password' name='Apassword' placeholder='現在のパスワード' />
        <input type='password' name='Bpassword' placeholder='変更後のパスワード' />
      </form>
      </Fragment>
  );
};

export default ToggleComponent;