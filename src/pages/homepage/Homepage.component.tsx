import React from 'react';
import Menu from '../../components/menu';
import { data } from '../../data';

function Homepage() {
  return (
    <div>
      <Menu data={data} />
      <h1>Welcome to PreditiveHire!</h1>
    </div>
  )
}

export default Homepage;