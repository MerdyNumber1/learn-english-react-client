import React from 'react';
import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/forms/LoginForm';
import { AuthPageContainer } from 'pages';

export const LoginPage: React.FC = () => (
  <>
    <Helmet>
      <title>Войти</title>
    </Helmet>
    <AuthPageContainer>
      <LoginForm />
    </AuthPageContainer>
  </>
);
