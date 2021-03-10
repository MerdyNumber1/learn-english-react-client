import React from 'react';
import { useSelector } from 'react-redux';
import { Router } from '@reach/router';
import SuspenseFallback from 'components/common/SuspenseFallback';
import { hasUserLogged } from 'store/user/selectors';

const NotLoggedLayout = React.lazy(() => import('layouts/NotLoggedLayout'));
const LoggedLayout = React.lazy(() => import('layouts/LoggedLayout'));

const MainPage = React.lazy(() => import('pages/MainPage'));
const LoginPage = React.lazy(() => import('pages/LoginPage'));
const SignupPage = React.lazy(() => import('pages/SignupPage'));

const Routes: React.FC = () => {
  const isLogged = useSelector(hasUserLogged);

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
