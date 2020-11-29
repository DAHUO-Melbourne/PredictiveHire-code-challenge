import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from './utils';
import App from './App';

const setUp = (props = {}) => {
  const component = shallow(<App {...props} />);
  return component;
};

describe('correctly rendered', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });
  it('Should render correctly', () => {
    const wrapper = findByTestAttr(component, 'app');
    expect(wrapper.length).toBe(1);
  });
});
