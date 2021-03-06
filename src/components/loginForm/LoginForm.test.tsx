import React, { Component } from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { findByTestAttr } from '../../utils';
import LoginForm from './index';

const setUp = (props = {}) => {
  const component = shallow(<LoginForm {...props} />);
  return component;
};

describe('correctly rendered', () => {
  let component: ShallowWrapper<any, Readonly<{}>, Component<{}, {}, any>>;
  beforeEach(() => {
    component = setUp();
  });
  it('Should render correctly', () => {
    const wrapper = findByTestAttr(component, 'login-form');
    expect(wrapper.length).toBe(1);
  });
  it('Should render username input correctly', () => {
    const inputElem = findByTestAttr(component, 'username-input');
    expect(inputElem.length).toBe(1);
  });
  it('Should render password input correctly', () => {
    const inputElem = findByTestAttr(component, 'password-input');
    expect(inputElem.length).toBe(1);
  });
});

describe('LoginForm correctly acted when submitted', () => {
  let component: ShallowWrapper<any, Readonly<{}>, Component<{}, {}, any>>;
  beforeEach(() => {
    component = setUp();
  });
  it('button loading should be false if user do not input anything', () => {
    component.simulate('submit', {
      preventDefault: () => {},
    });
    const submitButton = findByTestAttr(component, 'submit-button');
    expect(submitButton.props().isLoading).toBe(false);
  });
});
