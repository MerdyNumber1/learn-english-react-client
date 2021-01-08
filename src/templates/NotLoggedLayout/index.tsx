import React from 'react';
import { Layout } from 'antd';

const { Header, Sider, Content, Footer } = Layout;

interface INotLoggedLayout {
  children?: any;
}

const NotLoggedLayout: React.FC = ({ children }: INotLoggedLayout): React.ReactElement => (
  <Layout>
    <Header>header</Header>
    <Layout>
      <Sider>left sidebar</Sider>
      <Content>{children}</Content>
      <Sider>right sidebar</Sider>
    </Layout>
    <Footer>footer</Footer>
  </Layout>
);

NotLoggedLayout.defaultProps = {
  children: 'main',
};

export default NotLoggedLayout;
