import React, { Component } from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { findByTestAttr } from '../../utils';
import LoginPage from './index';

const setUp = (props = {}) => {
  const component = shallow(<LoginPage {...props} />);
  return component;
};

describe('correctly rendered', () => {
  let component: ShallowWrapper<any, Readonly<{}>, Component<{}, {}, any>>;
  beforeEach(() => {
    component = setUp();
  });
  it('Should render correctly', () => {
    const wrapper = findByTestAttr(component, 'login-page');
    expect(wrapper.length).toBe(1);
  });
});
