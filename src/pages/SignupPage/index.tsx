import React from 'react';
import { Typography } from 'antd';
import { Helmet } from 'react-helmet';
import SignupForm from 'components/forms/SignupForm';
import styles from './SignupPage.module.sass';

const { Title } = Typography;

const SignupPage: React.FC = () => (
  <>
    <Helmet>
      <title>Регистрация</title>
    </Helmet>
    <div className={styles.container}>
      <Title level={3}>Зарегистрироваться:</Title>
      <SignupForm />
    </div>
  </>
);

export default SignupPage;
