import React from 'react';
import { Menu } from 'antd';
import { Link, useLocation } from '@reach/router';
import { useUser } from 'hooks/useUser';

export const Nav: React.VFC = () => {
  const location = useLocation();
  const { isLogged, logout } = useUser();

  return (
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['/']}
      selectedKeys={[location.pathname]}
    >
      <Menu.Item key="/">
        <Link to="/">{!isLogged ? 'Главная' : 'Профиль'}</Link>
      </Menu.Item>
      {!isLogged ? (
        <Menu.Item key="/login">
          <Link to="/login">Войти</Link>
        </Menu.Item>
      ) : (
        <Menu.Item onClick={logout} key="/logout">
          Выйти
        </Menu.Item>
      )}
    </Menu>
  );
};
