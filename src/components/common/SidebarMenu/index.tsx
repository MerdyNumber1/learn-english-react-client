import React from 'react';
import { Menu, Spin } from 'antd';
import { LaptopOutlined, SwitcherOutlined, UserOutlined, CommentOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { Link, useLocation, navigate } from '@reach/router';
import { useTheory } from 'hooks/useTheory';
import { useMount } from '@umijs/hooks';

const { SubMenu } = Menu;

interface SidebarMenuProps {
  onMenuItemClick?: () => void;
}

export const SidebarMenu: React.FC<SidebarMenuProps> = ({ onMenuItemClick }) => {
  const location = useLocation();
  const { selectTopics, getTopics } = useTheory();

  const topics = selectTopics();

  useMount(() => {
    getTopics();
  });

  return (
    <MenuWrapper mode="inline" defaultSelectedKeys={['/']} selectedKeys={[location.pathname]}>
      <Menu.Item onClick={onMenuItemClick} icon={<UserOutlined />} key="/">
        <Link to="/">Профиль</Link>
      </Menu.Item>
      <Menu.Item onClick={onMenuItemClick} key="/chat" icon={<CommentOutlined />}>
        <Link to="/chat">Обсуждение</Link>
      </Menu.Item>
      <SubMenu key="/theory" icon={<LaptopOutlined />} title="Теория">
        {topics.length ? (
          topics.map((topic) => (
            <Menu.Item
              key={`/articles/${topic.id}`}
              onClick={() => {
                if (onMenuItemClick) {
                  onMenuItemClick();
                }
                navigate(`/articles/${topic.id}`);
              }}
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
              onClick={() => {
                if (onMenuItemClick) {
                  onMenuItemClick();
                }
                navigate(`/exercises/${topic.id}`);
              }}
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

  @media (max-width: 800px) {
    width: 99vw;
    background: white;
    height: calc(100vh - 64px);
  }
`;
