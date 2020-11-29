import React, { Fragment } from 'react';
import Homepage from './pages/homepage';
import LoginPage from './pages/login';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <Fragment>
      <BrowserRouter data-test="app">
        <Route path="/" exact component={Homepage}></Route>
        <Route path="/login" exact component={LoginPage}></Route>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
