import React, { Component } from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { findByTestAttr } from './utils';
import App from './App';

const setUp = (props = {}) => {
  const component = shallow(<App {...props} />);
  return component;
};

describe('correctly rendered', () => {
  let component: ShallowWrapper<any, Readonly<{}>, Component<{}, {}, any>>;
  beforeEach(() => {
    component = setUp();
  });
  it('Should render correctly', () => {
    const wrapper = findByTestAttr(component, 'app');
    expect(wrapper.length).toBe(1);
  });
});
