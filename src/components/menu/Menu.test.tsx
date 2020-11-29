import React, { Component } from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { findByTestAttr } from '../../utils';
import MenuComponent from './index';
import { IMenuProps } from '../../interfaces/interfaces';

const setUp = (props: IMenuProps) => {
  const component = shallow(<MenuComponent {...props} />);
  return component;
};

describe('correctly rendered', () => {
  let component: ShallowWrapper<any, Readonly<{}>, Component<{}, {}, any>>;
  const data = [
    {
      key: 1,
      title: 'Why its Fair',
      url: '',
      children: [
        {
          key: 2,
          title: 'Version Testing',
          url: '',
        },
      ],
    },
    {
      key: 3,
      title: 'the third item',
      url: '',
      children: [
        {
          key: 4,
          title: 'the fourth ite,',
          url: '',
        },
      ],
    },
  ];
  beforeEach(() => {
    component = setUp({ data });
  });
  it('menu should render correctly', () => {
    const wrapper = findByTestAttr(component, 'menu-component');
    expect(wrapper.length).toBe(1);
  });
  it('subMenu should render correctly', () => {
    const wrapper = findByTestAttr(component, 'sub-menu');
    expect(wrapper.length).toBe(2);
  });
});
