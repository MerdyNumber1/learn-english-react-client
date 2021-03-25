import { createSelector } from '@reduxjs/toolkit';
import { State } from 'store/index';

export const authDataSelector = (state: State) => state.user.auth;
export const userInfoSelector = (state: State) => state.user.info;

export const hasUserLoggedSelector = createSelector(
  authDataSelector,
  ({ tokens }) => !!(tokens.access && tokens.refresh)
);
