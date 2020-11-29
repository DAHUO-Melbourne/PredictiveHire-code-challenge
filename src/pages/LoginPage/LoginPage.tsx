import React from 'react';
import LoginForm from '../../components/LoginForm';

function LoginPage(): JSX.Element {
  return (
    <div data-test="login-page">
      <LoginForm />
    </div>
  );
}

export default LoginPage;
