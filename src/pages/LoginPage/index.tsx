import React from 'react';
import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/forms/LoginForm';
import { AuthPageWrapper } from 'pages/AuthPageWrapper';

export const LoginPage: React.FC = () => (
  <>
    <Helmet>
      <title>Войти</title>
    </Helmet>
    <AuthPageWrapper>
      <LoginForm />
    </AuthPageWrapper>
  </>
);
