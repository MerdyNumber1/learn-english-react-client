import React from 'react';
import { Router } from '@reach/router';
import { SuspenseFallback } from 'components/common/SuspenseFallback';
import { useUser } from 'hooks/useUser';
import { lazyImport } from 'utils/lazyNamedImport';

const NotLoggedLayout = lazyImport(() => import('layouts/NotLoggedLayout'), 'NotLoggedLayout');
const LoggedLayout = lazyImport(() => import('layouts/LoggedLayout'), 'LoggedLayout');

const MainPage = lazyImport(() => import('pages/MainPage'), 'MainPage');
const LoginPage = lazyImport(() => import('pages/LoginPage'), 'LoginPage');
const SignupPage = lazyImport(() => import('pages/SignupPage'), 'SignupPage');
const ProfilePage = lazyImport(() => import('pages/ProfilePage'), 'ProfilePage');
const ExercisesPage = lazyImport(() => import('pages/ExercisesPage'), 'ExercisesPage');
const ArticlesPage = lazyImport(() => import('pages/ArticlesPage'), 'ArticlesPage');

export const Routes: React.VFC = () => {
  const { isLogged } = useUser();

  return (
    <SuspenseFallback>
      <Router>
        {isLogged ? (
          <LoggedLayout path="/">
            <ProfilePage path="/" />
            <ExercisesPage path="/exercises" />
            <ArticlesPage path="/articles/:topicId" />
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
