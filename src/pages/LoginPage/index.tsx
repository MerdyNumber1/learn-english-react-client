import React from 'react';
import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/forms/LoginForm';
import { AuthPageContainer } from 'pages/AuthPageContainer';

const LoginPage: React.FC = () => (
  <>
    <Helmet>
      <title>Войти</title>
    </Helmet>
    <AuthPageContainer>
      <LoginForm />
    </AuthPageContainer>
  </>
);

export default LoginPage;
