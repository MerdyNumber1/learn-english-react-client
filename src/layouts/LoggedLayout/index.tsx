import React from 'react';
import { useMount } from '@umijs/hooks';
import { Layout } from 'antd';
import Nav from 'components/common/Nav';
import { useDispatch } from 'store';
import { getCurrentUser } from 'store/modules/user/actions';
import styles from './LoggedLayout.module.sass';

const { Header, Content } = Layout;

interface LoggedLayoutProps {
  children: React.ReactNode;
}

const LoggedLayout: React.FC<LoggedLayoutProps> = ({ children }) => {
  const dispatch = useDispatch();

  useMount(() => dispatch(getCurrentUser()));

  return (
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
};

export default LoggedLayout;
