import React from 'react';
import LoginForm from '../../components/loginForm';

function LoginPage(): JSX.Element {
  return (
    <div data-test="login-page">
      <LoginForm />
    </div>
  )
}

export default LoginPage;