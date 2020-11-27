import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../utils'
import MenuComponent from './index';
import { data } from '../../data';

const setUp = (props = {}) => {
  const component = shallow(<MenuComponent {...props} />)
  return component
}

describe('correctly rendered', () => {
  let component;
  beforeEach(() => {
    component = setUp({ data });
  })
  it('Should render correctly', () => {
    const wrapper = findByTestAttr(component, 'MenuComponent');
    expect(wrapper.length).toBe(1)
  })
})