import React from 'react';
import { Nav } from 'components/common/Nav';
import { Layout } from 'antd';
import { LayoutWrapper } from 'layouts/LayoutWrapper';
import { LayoutContent } from 'layouts/LayoutContent';

const { Header } = Layout;

export const NotLoggedLayout: React.FC = ({ children }) => (
  <LayoutWrapper>
    <Header>
      <Nav />
    </Header>
    <Layout>
      <LayoutContent>{children}</LayoutContent>
    </Layout>
  </LayoutWrapper>
);
