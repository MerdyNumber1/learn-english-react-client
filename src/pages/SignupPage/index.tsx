import React from 'react';
import { Helmet } from 'react-helmet';
import { SignupForm } from 'components/forms/SignupForm';
import { AuthPageContainer } from 'pages/AuthPageContainer';

const SignupPage: React.FC = () => (
  <>
    <Helmet>
      <title>Регистрация</title>
    </Helmet>
    <AuthPageContainer>
      <SignupForm />
    </AuthPageContainer>
  </>
);

export default SignupPage;
