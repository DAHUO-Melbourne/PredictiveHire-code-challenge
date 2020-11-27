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
    const wrapper = findByTestAttr(component, 'LoginForm');
    expect(wrapper.length).toBe(1)
  })
})

describe('input correctly interacted', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  })
  it('Should show username correctly', () => {
    const inputElem = findByTestAttr(component, 'usernameInput');
    inputElem.simulate('change', {
      target: {
        value: 'aaa'
      }
    })
    const renewedInputElem = findByTestAttr(component, 'usernameInput');
    expect(renewedInputElem.props().value).toBe('aaa');
  })
  it('Should show username correctly', () => {
    const inputElem = findByTestAttr(component, 'passwordInput');
    inputElem.simulate('change', {
      target: {
        value: 'aaa'
      }
    })
    const renewedInputElem = findByTestAttr(component, 'passwordInput');
    expect(renewedInputElem.props().value).toBe('aaa');
  })
})