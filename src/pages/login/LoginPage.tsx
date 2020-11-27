import React from 'react';
import LoginForm from '../../components/loginForm';

function LoginPage(): JSX.Element {
  return (
    <div data-test="LoginPage">
      <LoginForm />
    </div>
  )
}

export default LoginPage;