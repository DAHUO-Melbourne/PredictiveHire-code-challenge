import React from 'react';
import 'antd/dist/antd.css';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { IMenuProps, IMenuItem } from '../../interfaces/interfaces';

const { SubMenu } = Menu;

function MenuComponent(props: IMenuProps): JSX.Element {
  const recursion = (data: Array<IMenuItem>) => {
    return (
      data.map((menu) => {
        if (menu.children) {
          return (
            <SubMenu key={menu.key} title={menu.title}>
              {recursion(menu.children)}
            </SubMenu>
          )
        } else {
          return (
            <Menu.Item key={menu.key}>
              <Link to={menu.url}>
                {menu.title}
              </Link>
            </Menu.Item>)
        }
      })
    )
  }
  return (
    <Menu
      mode="horizontal"
      data-test="menu-component"
    >
      {recursion(props.data)}
    </Menu>
  )
}

export default MenuComponent;
