import React from 'react';
import MainPage from 'pages/MainPage';
import { Router } from '@reach/router';
import NotLoggedLayout from '../templates/NotLoggedLayout';

const Routes: React.FC = (): React.ReactElement => (
  <Router>
    <NotLoggedLayout path="/">
      <MainPage path="/" />
    </NotLoggedLayout>
  </Router>
);

export default Routes;
