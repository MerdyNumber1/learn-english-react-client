import React from 'react';
import { Layout } from 'antd';
import Nav from 'components/common/Nav';
import styles from './NotLoggedLayout.module.sass';

const { Header, Content } = Layout;

interface INotLoggedLayoutProps {
  children: React.ReactNode;
}

const NotLoggedLayout: React.FC<INotLoggedLayoutProps> = ({ children }) => (
  <Layout>
    <Header>
      <Nav />
    </Header>
    <Layout className={styles.layout}>
      <Content className={styles.content}>{children}</Content>
    </Layout>
  </Layout>
);

export default NotLoggedLayout;
