import React from 'react';
import { useMount } from '@umijs/hooks';
import { Layout } from 'antd';
import { Nav } from 'components/common/Nav';
import { SidebarMenu } from 'components/common/SidebarMenu';
import { LayoutContent } from 'layouts/LayoutContent';
import { LayoutWrapper } from 'layouts/LayoutWrapper';
import { useUser } from 'hooks/useUser';

const { Header, Sider } = Layout;

export const LoggedLayout: React.FC = ({ children }) => {
  const { getCurrentUser } = useUser();

  useMount(getCurrentUser);

  return (
    <Layout>
      <Header>
        <Nav />
      </Header>
      <LayoutWrapper>
        <Sider width={200}>
          <SidebarMenu />
        </Sider>
        <Layout>
          <LayoutContent>{children}</LayoutContent>
        </Layout>
      </LayoutWrapper>
    </Layout>
  );
};
