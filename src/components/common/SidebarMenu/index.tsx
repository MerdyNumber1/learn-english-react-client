import React from 'react';
import { Menu, Spin } from 'antd';
import { LaptopOutlined, SwitcherOutlined, UserOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { Link, useLocation, navigate } from '@reach/router';
import { useTheory } from 'hooks/useTheory';
import { useMount } from '@umijs/hooks';

const { SubMenu } = Menu;

export const SidebarMenu: React.FC = () => {
  const location = useLocation();
  const { selectTopics, getTopics } = useTheory();

  const topics = selectTopics();

  useMount(() => {
    getTopics();
  });

  return (
    <MenuWrapper mode="inline" defaultSelectedKeys={['/']} selectedKeys={[location.pathname]}>
      <Menu.Item icon={<UserOutlined />} key="/">
        <Link to="/">Профиль</Link>
      </Menu.Item>
      <SubMenu key="/theory" icon={<LaptopOutlined />} title="Теория">
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
        {topics.length ? (
          topics.map((topic) => (
            <Menu.Item
              key={`/exercises/${topic.id}`}
              onClick={() => navigate(`/exercises/${topic.id}`)}
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
    </MenuWrapper>
  );
};

const MenuWrapper = styled(Menu)`
  height: 100%;
  border-right: 0;
`;
