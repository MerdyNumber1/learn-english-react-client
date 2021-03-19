import { createSelector } from '@reduxjs/toolkit';
import { State } from 'store/index';

export const authDataSelector = (state: State) => state.user.auth;
export const userDataSelector = (state: State) => ({
  username: state.user.username,
  email: state.user.email,
});

export const hasUserLoggedSelector = createSelector(
  authDataSelector,
  ({ accessToken, refreshToken }) => !!(accessToken && refreshToken),
);
