import React from 'react';
import Menu from '../../components/menu';
import { data } from '../../data/rData';
import './Homepage.css';

function Homepage(): JSX.Element {
  return (
    <div data-test="Homapage">
      <Menu data={data} />
      <h1 className="heading">Welcome to PreditiveHire!</h1>
    </div>
  )
}

export default Homepage;