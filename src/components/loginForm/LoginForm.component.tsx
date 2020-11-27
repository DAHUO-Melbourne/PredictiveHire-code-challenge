import React, { useEffect, useState } from 'react'
import { createServer } from "miragejs";
import axios from 'axios';
import { message } from 'antd';
import { Link } from 'react-router-dom';
import './LoginForm.css';

createServer({
  routes() {
    this.post("/api/login", (schema, request) => {
      let attrs = JSON.parse(request.requestBody);
      if (attrs.username === "Okay" && attrs.password === "okay") {
        return ['Logged in successfully']
      } else {
        return ['logged in failed']
      }
    })
  },
})

function LoginForm(): JSX.Element {
  const [res, setRes] = useState<string[]>([]);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  useEffect(() => {
    if (res[0] === 'Logged in successfully') {
      message.info('Successfully logged in');
    }
    if (res[0] === 'logged in failed') {
      message.info('logged in failed');
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
        username: username,
        password: password
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