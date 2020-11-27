import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { message } from 'antd';
import { Link } from 'react-router-dom';
import './LoginForm.css';

function LoginForm(): JSX.Element {
  const [res, setRes] = useState<string[]>([]);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  useEffect(() => {
    if (res[0] === 'Logged in successfully') {
      message.success('Successfully logged in');
    }
    if (res[0] === 'logged in failed') {
      message.error('logged in failed');
      setUsername('');
      setPassword('');
    }
  }, [res]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!username || !password) {
      message.info('Please complete your username and password!');
    } else {
      axios.post("/api/login", {
        username,
        password
      }).then((response) => response.data)
        .then((json) => setRes(json))
    }
  }
  return (
    <form className="auth-form" onSubmit={(e) => { handleSubmit(e) }}>
      <div className="form-control">
        <label htmlFor="email">E-mail</label>
        <input id="email" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className="form-control">
        <label htmlFor="password">password</label>
        <input id="password" value={password} type="password" onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div className="form-actions">
        <button type="submit">submit</button>
        <Link to='/'>
          <button type="button">
            cancel
            </button>
        </Link>
      </div>
    </form>
  )
}

export default LoginForm