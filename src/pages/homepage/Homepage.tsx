import React from 'react';
import Menu from '../../components/menu';
import { data } from '../../data';
import './Homepage.css';

function Homepage(): JSX.Element {
  return (
    <div>
      <Menu data={data} />
      <h1 className="heading">Welcome to PreditiveHire!</h1>
    </div>
  )
}

export default Homepage;