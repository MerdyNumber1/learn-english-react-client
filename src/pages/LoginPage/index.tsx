import React from 'react';
import { Helmet } from 'react-helmet';
import LoginForm from 'components/forms/LoginForm';
import styles from './LoginPage.module.sass';

const LoginPage: React.FC = () => (
  <>
    <Helmet>
      <title>Войти</title>
    </Helmet>
    <div className={styles.container}>
      <LoginForm />
    </div>
  </>
);

export default LoginPage;
