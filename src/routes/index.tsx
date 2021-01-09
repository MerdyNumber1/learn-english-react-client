import React from 'react';
import { Router } from '@reach/router';
import SuspenseFallback from 'components/common/SuspenseFallback';

const NotLoggedLayout = React.lazy(() => import('templates/NotLoggedLayout'));

const MainPage = React.lazy(() => import('pages/MainPage'));
const LoginPage = React.lazy(() => import('pages/LoginPage'));
const SignupPage = React.lazy(() => import('pages/SignupPage'));

const Routes: React.FC = (): React.ReactElement => (
  <SuspenseFallback>
    <Router>
      <NotLoggedLayout path="/">
        <MainPage path="/" />
        <LoginPage path="/login" />
        <SignupPage path="/signup" />
      </NotLoggedLayout>
    </Router>
  </SuspenseFallback>
);

export default Routes;
