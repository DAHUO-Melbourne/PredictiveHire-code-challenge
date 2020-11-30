import React from 'react';
import Menu from '../../components/menu';
import data from '../../data/rData.json';
import './Homepage.scss';

function Homepage(): JSX.Element {
  return (
    <div data-test="homepage">
      <Menu data={data} />
      <h1 className="heading">Welcome to PreditiveHire!</h1>
    </div>
  );
}

export default Homepage;
