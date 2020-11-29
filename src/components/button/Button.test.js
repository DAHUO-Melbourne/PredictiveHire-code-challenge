import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../utils';
import Button from './index';

const setUp = (props = {}) => {
  const component = shallow(<Button {...props} />);
  return component;
};

describe('link button correctly rendered', () => {
  let component;
  const props = {
    href: '/',
    isLoading: false,
    type: 'button',
    content: 'click',
  };
  beforeEach(() => {
    component = setUp(props);
  });
  it('Should render correctly', () => {
    const wrapper = findByTestAttr(component, 'link-button');
    expect(wrapper.length).toBe(1);
  });
});

describe('no-link button correctly rendered', () => {
  let component;
  const props = {
    isLoading: false,
    type: 'button',
    content: 'click',
  };
  beforeEach(() => {
    component = setUp(props);
  });
  it('Should render correctly', () => {
    const wrapper = findByTestAttr(component, 'no-link-button');
    expect(wrapper.length).toBe(1);
  });
  it('Button load should render correctly', () => {
    const wrapper = findByTestAttr(component, 'no-link-button');
    expect(wrapper.props().loading).toBe(false);
  });
  it('Button type should render correctly', () => {
    const wrapper = findByTestAttr(component, 'no-link-button');
    expect(wrapper.props().htmlType).toBe('button');
  });
});