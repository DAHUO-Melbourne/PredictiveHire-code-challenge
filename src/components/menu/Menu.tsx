import React from 'react';
import 'antd/dist/antd.css';
import { Menu as AntdMenu } from 'antd';
import { Link } from 'react-router-dom';
import { IMenuProps, IMenuItem } from '../../interfaces/interfaces';

const { SubMenu } = AntdMenu;

function Menu(props: IMenuProps): JSX.Element {
  const recursion = (data: Array<IMenuItem>) => {
    return data.map((menu) => {
      if (menu.children) {
        return (
          <SubMenu key={menu.key} title={menu.title} data-test="sub-menu">
            {recursion(menu.children)}
          </SubMenu>
        );
      } else {
        return (
          <AntdMenu.Item key={menu.key}>
            <Link to={menu.url}>{menu.title}</Link>
          </AntdMenu.Item>
        );
      }
    });
  };
  return (
    <AntdMenu mode="horizontal" data-test="menu-component">
      {recursion(props.data)}
    </AntdMenu>
  );
}

export default Menu;
