import React from 'react';
import { Layout } from 'antd';
import Nav from 'components/common/Nav';
import styles from './NotLoggedLayout.module.sass';

const { Header, Content } = Layout;

interface INotLoggedLayout {
  children?: any;
}

const NotLoggedLayout: React.FC = ({ children }: INotLoggedLayout): React.ReactElement => (
  <Layout>
    <Header>
      <Nav />
    </Header>
    <Layout className={styles.layout}>
      <Content className={styles.content}>{children}</Content>
    </Layout>
  </Layout>
);

NotLoggedLayout.defaultProps = {
  children: 'main',
};

export default NotLoggedLayout;
