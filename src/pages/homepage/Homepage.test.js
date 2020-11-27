import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../utils'
import Homepage from './index';

const setUp = (props = {}) => {
  const component = shallow(<Homepage {...props} />)
  return component
}

describe('correctly rendered', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  })
  it('Should render correctly', () => {
    const wrapper = findByTestAttr(component, 'Homapage');
    expect(wrapper.length).toBe(1)
  })
})