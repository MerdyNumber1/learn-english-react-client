import React from 'react';
import { Menu } from 'antd';
import { Link, useLocation } from '@reach/router';

interface NavProps {
  isLogged?: boolean;
}

const Nav: React.FC<NavProps> = ({ isLogged = false }) => {
  const location = useLocation();

  return (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[location.pathname]}>
      <Menu.Item key="/">
        <Link to="/">Главная</Link>
      </Menu.Item>
      {!isLogged && (
        <Menu.Item key="/login">
          <Link to="/login">Войти</Link>
        </Menu.Item>
      )}
    </Menu>
  );
};

export default Nav;
