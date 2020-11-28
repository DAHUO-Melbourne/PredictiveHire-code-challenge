import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../utils'
import LoginForm from './index';

const setUp = (props = {}) => {
  const component = shallow(<LoginForm {...props} />)
  return component
}

describe('correctly rendered', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  })
  it('Should render correctly', () => {
    const wrapper = findByTestAttr(component, 'login-form');
    expect(wrapper.length).toBe(1)
  })
})

describe('InputBox correctly interacted', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  })
  it('Should show username input correctly', () => {
    const inputElem = findByTestAttr(component, 'username-input');
    expect(inputElem.length).toBe(1)
  })
  it('Should show password input correctly', () => {
    const inputElem = findByTestAttr(component, 'password-input');
    expect(inputElem.length).toBe(1)
  })
})