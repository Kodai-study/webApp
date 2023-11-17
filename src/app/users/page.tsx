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
      <p>社員番号：</p>
      <Button variant="primary" onClick={toggleVisibility}>パスワードを変更する</Button>{' '}
      {isVisible && <ChangePass />}
    </div>
  );
};

// 例としてダミーコンポーネントを定義
const ChangePass: React.FC = () => {
  return (
    <Fragment>
      <form>
        <input type='password' name='Apassword' placeholder='現在のパスワード' />
        <input type='password' name='Bpassword' placeholder='変更後のパスワード' />
      </form>
      </Fragment>
  );
};

export default ToggleComponent;