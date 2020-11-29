import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../utils';
import LoginForm from './index';

const setUp = (props = {}) => {
  const component = shallow(<LoginForm {...props} />);
  return component;
};

describe('correctly rendered', () => {
  let component;
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

describe('InputBox correctly interacted', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });
  it('should set button loading to true', () => {
    const usernameInputElem = findByTestAttr(component, 'username-input');
    const passwordInputElem = findByTestAttr(component, 'password-input');
    usernameInputElem.simulate('change', {
      currentTarget: {
        value: 'aaa',
      },
    });
    passwordInputElem.simulate('change', {
      currentTarget: {
        value: 'aaa',
      },
    });
    component.simulate('submit', {
      preventDefault: () => {},
    });
    const submitButton = findByTestAttr(component, 'submit-button');
    expect(submitButton.props().isLoading).toBe(true);
  });
});
