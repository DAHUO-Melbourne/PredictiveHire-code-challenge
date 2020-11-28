import React, { useState } from 'react'
import axios from 'axios';
import { message } from 'antd';
import './LoginForm.css';
import ButtonComponent from '../button';

function LoginForm(): JSX.Element {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    if (username && password) {
      axios.post("/api/login", {
        username,
        password
      }).then((response) => response.data)
        .then((json) => {
          setLoading(false);
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
        })
    }
  }
  return (
    <form className="auth-form" data-test="LoginForm" onSubmit={(e) => { handleSubmit(e) }}>
      <div className="form-control">
        <label htmlFor="username">username</label>
        <input data-test="usernameInput" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
      </div>
      <div className="form-control">
        <label htmlFor="password">password</label>
        <input data-test="passwordInput" id="password" value={password} type="password" onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <div className="form-actions">
        <ButtonComponent loading={loading} type='submit' content='submit' />
        <ButtonComponent href='/' loading={false} type='button' content='cancel' />
      </div>
    </form>
  )
}

export default LoginForm