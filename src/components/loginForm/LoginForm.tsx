import React, { useState } from 'react';
import { message } from 'antd';
import './LoginForm.scss';
import Button from '../button';
import Input from '../Input';
import { login } from '../../api/apis';

function LoginForm(): JSX.Element {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username && password) {
      setIsLoading(true);
      login({ username, password })
        .then((response) => response.data)
        .then((json) => {
          setIsLoading(false);
          if (json[0] === 'Logged in successfully') {
            message.success('Successfully logged in');
          }
          if (json[0] === 'logged in failed') {
            throw new Error('login failed');
          }
        })
        .catch(() => {
          message.error('logged in failed');
          setUsername('');
          setPassword('');
        });
    }
  };

  const handleUsernameInput = (value: string) => {
    setUsername(value);
  };

  const handlePasswordInput = (value: string) => {
    setPassword(value);
  };

  return (
    <form
      className="auth-form"
      data-test="login-form"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <Input
        id="username"
        name="username"
        value={username}
        data-test="username-input"
        onValueChange={handleUsernameInput}
      />
      <Input
        id="password"
        name="password"
        type="password"
        value={password}
        data-test="password-input"
        onValueChange={handlePasswordInput}
      />
      <div className="form-actions">
        <Button
          isLoading={isLoading}
          type="submit"
          content="submit"
          data-test="submit-button"
        />
        <Button href="/" isLoading={false} type="button" content="cancel" />
      </div>
    </form>
  );
}

export default LoginForm;
