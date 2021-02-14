import React from 'react';
import { Layout } from 'antd';
import Nav from 'components/common/Nav';
import styles from './LoggedLayout.module.sass';

const { Header, Content } = Layout;

interface LoggedLayoutProps {
  children: React.ReactNode;
}

const LoggedLayout: React.FC<LoggedLayoutProps> = ({ children }) => (
  <Layout>
    <Header>
      <Nav />
    </Header>
    <Layout className={styles.layout}>
      ты залогинен
      <Content className={styles.content}>{children}</Content>
    </Layout>
  </Layout>
);

export default LoggedLayout;
