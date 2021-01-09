import React from 'react';
import { Typography } from 'antd';
import { Helmet } from 'react-helmet';
import LoginForm from 'components/forms/LoginForm';
import styles from './LoginPage.module.sass';

const { Title } = Typography;

const LoginPage: React.FC = () => (
  <>
    <Helmet>
      <title>Войти</title>
    </Helmet>
    <div className={styles.container}>
      <Title level={3}>Войти:</Title>
      <LoginForm />
    </div>
  </>
);

export default LoginPage;
