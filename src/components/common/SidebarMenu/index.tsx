import React from 'react';
import { Menu } from 'antd';
import { LaptopOutlined, SwitcherOutlined, UserOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { Link, useLocation } from '@reach/router';

const { SubMenu } = Menu;

export const SidebarMenu: React.FC = () => {
  const location = useLocation();

  return (
    <MenuWrapper mode="inline" defaultSelectedKeys={['/']} selectedKeys={[location.pathname]}>
      <Menu.Item icon={<UserOutlined />} key="/">
        <Link to="/">Профиль</Link>
      </Menu.Item>
      <SubMenu key="/theory" icon={<LaptopOutlined />} title="Теория">
        <Menu.Item key="5">option5</Menu.Item>
        <Menu.Item key="6">option6</Menu.Item>
        <Menu.Item key="7">option7</Menu.Item>
        <Menu.Item key="8">option8</Menu.Item>
      </SubMenu>
      <SubMenu key="/exercises" icon={<SwitcherOutlined />} title="Упражнения">
        <Menu.Item key="9">option9</Menu.Item>
        <Menu.Item key="10">option10</Menu.Item>
        <Menu.Item key="11">option11</Menu.Item>
        <Menu.Item key="12">option12</Menu.Item>
      </SubMenu>
    </MenuWrapper>
  );
};

const MenuWrapper = styled(Menu)`
  height: 100%;
  border-right: 0;
`;
