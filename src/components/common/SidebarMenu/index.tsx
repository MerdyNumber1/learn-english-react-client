import React from 'react';
import { Menu, Spin } from 'antd';
import { LaptopOutlined, SwitcherOutlined, UserOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { Link, useLocation, navigate } from '@reach/router';
import { useTheory } from 'hooks/useTheory';

const { SubMenu } = Menu;

export const SidebarMenu: React.FC = () => {
  const location = useLocation();
  const { selectTopics, getTopics } = useTheory();

  const topics = selectTopics();

  const onTheorySelect = () => {
    getTopics();
  };

  return (
    <MenuWrapper mode="inline" defaultSelectedKeys={['/']} selectedKeys={[location.pathname]}>
      <Menu.Item icon={<UserOutlined />} key="/">
        <Link to="/">Профиль</Link>
      </Menu.Item>
      <SubMenu key="/theory" icon={<LaptopOutlined />} title="Теория" onTitleClick={onTheorySelect}>
        {topics.length ? (
          topics.map((topic) => (
            <Menu.Item
              key={`/articles/${topic.id}`}
              onClick={() => navigate(`/articles/${topic.id}`)}
            >
              {topic.title}
            </Menu.Item>
          ))
        ) : (
          <Menu.Item>
            <Spin />
          </Menu.Item>
        )}
      </SubMenu>
      <SubMenu key="/exercises" icon={<SwitcherOutlined />} title="Упражнения">
        <Menu.Item key="13">
          <Spin />
        </Menu.Item>
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
