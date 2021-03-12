import React from 'react';
import { Router } from '@reach/router';
import { SuspenseFallback } from 'components/common/SuspenseFallback';
import { useUser } from 'hooks/useUser';

const NotLoggedLayout = React.lazy(() => import('layouts/NotLoggedLayout'));
const LoggedLayout = React.lazy(() => import('layouts/LoggedLayout'));

const MainPage = React.lazy(() => import('pages/MainPage'));
const LoginPage = React.lazy(() => import('pages/LoginPage'));
const SignupPage = React.lazy(() => import('pages/SignupPage'));

const Routes: React.VFC = () => {
  const { isLogged } = useUser();

  return (
    <SuspenseFallback>
      <Router>
        {isLogged ? (
          <LoggedLayout path="/">
            <MainPage path="/" />
          </LoggedLayout>
        ) : (
          <NotLoggedLayout path="/">
            <MainPage path="/" />
            <LoginPage path="/login" />
            <SignupPage path="/signup" />
          </NotLoggedLayout>
        )}
      </Router>
    </SuspenseFallback>
  );
};

export default Routes;
