import React from 'react';
import { Provider } from 'react-redux';
import { Helmet } from 'react-helmet';
import { store } from 'store';
import { Routes } from './routes';
import 'antd/dist/antd.css';
import 'assets/styles/index.scss';

export const App: React.FC = () => (
  <Provider store={store}>
    <Helmet titleTemplate="%s - Learn English" defaultTitle="Learn English" />
    <Routes />
  </Provider>
);
