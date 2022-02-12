import React from 'react';
import { Menu, Button } from 'antd';
import { Link, useLocation } from '@reach/router';
import { useUser } from 'hooks/useUser';
import { UnorderedListOutlined } from '@ant-design/icons';
import { useSize } from '@umijs/hooks';

interface NavProps {
  onSiderCollapse?: () => void;
}

export const Nav: React.VFC<NavProps> = ({ onSiderCollapse }) => {
  const location = useLocation();
  const { isLogged, logout } = useUser();
  const [size] = useSize(document.body);

  return (
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['/']}
      selectedKeys={[location.pathname]}
    >
      {isLogged && size.width! < 800 && (
        <Menu.Item onClick={onSiderCollapse} key="expand">
          <Button icon={<UnorderedListOutlined style={{ marginRight: 0 }} />} type="primary" />
        </Menu.Item>
      )}
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
