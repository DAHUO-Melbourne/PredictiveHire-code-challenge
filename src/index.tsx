import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { mockServerRun } from './mock/mock';

mockServerRun();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
