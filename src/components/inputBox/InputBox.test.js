import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../utils'
import InputBox from './index';

const setUp = (props = {}) => {
  const component = shallow(<InputBox {...props} />)
  return component
}

describe('InputBox should be correctly rendered', () => {
  let component;
  const props = {
    id: "username", 
    name: "username", 
    value: "", 
    changeValue: ()=>{}
  }
  beforeEach(() => {
    component = setUp(props);
  })
  it('InputBox should be rendered correctly', () => {
    const wrapper = findByTestAttr(component, 'input-box');
    expect(wrapper.length).toBe(1)
  })
  it('input initial value should be correct', () => {
    const wrapper = findByTestAttr(component, 'input');
    expect(wrapper.props().value).toBe("");
  })
})