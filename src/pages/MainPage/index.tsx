import React from 'react';
import { Helmet } from 'react-helmet';
import { Intro } from 'components/main/Intro';

export const MainPage: React.FC = () => (
  <>
    <Helmet>
      <title>Главная</title>
    </Helmet>
    <Intro />
  </>
);
