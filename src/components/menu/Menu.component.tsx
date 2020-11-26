import React from 'react';
import 'antd/dist/antd.css';
import { Menu } from 'antd';
import Icon from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { IMenuProps } from '../../interfaces';

const { SubMenu } = Menu;

function MenuComponent(props: IMenuProps) {
  console.log(props.data);
  const recursion = (data: Array<any>) => {
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
              <Icon type={menu.icon} />
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
      mode="inline"
      style={{ width: 240 }}
    >
      {recursion(props.data)}
    </Menu>
  )
}

export default MenuComponent;
