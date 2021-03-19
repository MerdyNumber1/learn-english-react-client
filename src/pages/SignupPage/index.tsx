import React from 'react';
import { Helmet } from 'react-helmet';
import { SignupForm } from 'components/forms/SignupForm';
import { AuthPageWrapper } from 'pages/AuthPageWrapper';

export const SignupPage: React.FC = () => (
  <>
    <Helmet>
      <title>Регистрация</title>
    </Helmet>
    <AuthPageWrapper>
      <SignupForm />
    </AuthPageWrapper>
  </>
);
