import React from 'react';
import { Typography } from 'antd';
import LoginForm from 'components/forms/LoginForm';
import styles from './LoginPage.module.sass';

const { Title } = Typography;

const LoginPage: React.FC = () => (
  <div className={styles.container}>
    <Title level={3}>Войти:</Title>
    <LoginForm />
  </div>
);

export default LoginPage;
