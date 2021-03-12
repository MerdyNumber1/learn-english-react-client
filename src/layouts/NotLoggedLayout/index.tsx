import React from 'react';
import { Layout } from 'antd';
import Nav from 'components/common/Nav';
import { LayoutContainer, LayoutContent } from 'layouts';

const { Header } = Layout;

interface NotLoggedLayoutProps {
  children: React.ReactNode;
}

const NotLoggedLayout: React.FC<NotLoggedLayoutProps> = ({ children }) => (
  <Layout>
    <Header>
      <Nav />
    </Header>
    <LayoutContainer>
      <LayoutContent>{children}</LayoutContent>
    </LayoutContainer>
  </Layout>
);

export default NotLoggedLayout;
