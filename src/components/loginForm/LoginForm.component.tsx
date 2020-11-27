import React, { useEffect, useState } from 'react'
import { createServer } from "miragejs";
import axios from 'axios';
import { message } from 'antd';
import { Link } from 'react-router-dom';

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
  let [res, setRes] = useState<string[]>([]);
  let [username, setUsername] = useState<string>('');
  let [password, setPassword] = useState<string>('');

  useEffect(() => {
    if (res[0] === 'Logged in successfully') {
      message.info('Successfully logged in');
    }
    if (res[0] === 'logged in failed') {
      console.log(res[0]);
      message.info('logged in failed');
      setUsername('');
      setPassword('');
    }
  }, [res]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username === '' || password === '') {
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
    <div>
      <form onSubmit={(e) => { handleSubmit(e) }}>
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
        <input value={password} type="password" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">submit</button>
        <button type="button">
          <Link to='/'>
            cancel
          </Link>
        </button>
      </form>
    </div>
  )
}

export default LoginForm