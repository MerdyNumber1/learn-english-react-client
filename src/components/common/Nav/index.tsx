import React from 'react';
import { Menu } from 'antd';
import { Link } from '@reach/router';

const Nav: React.FC = (): React.ReactElement => (
  <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
    <Menu.Item key="1">
      <Link to="/">Главная</Link>
    </Menu.Item>
    <Menu.Item key="2">
      <Link to="/login">Войти</Link>
    </Menu.Item>
  </Menu>
);

export default Nav;
