import { useDispatch as useActionDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { reducers } from './reducers';

export const store = configureStore({
  reducer: reducers,
  devTools: process.env.NODE_ENV !== 'production',
});

export type Dispatch = typeof store.dispatch;
export const useDispatch = () => useActionDispatch<Dispatch>();

export type State = ReturnType<typeof store.getState>;
