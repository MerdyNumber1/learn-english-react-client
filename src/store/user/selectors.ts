import { createSelector } from '@reduxjs/toolkit';
import { State } from 'store/index';

export const authDataSelector = (state: State) => state.user.auth;

export const hasUserLoggedSelector = createSelector(
  authDataSelector,
  ({ accessToken, refreshToken }) => !!(accessToken && refreshToken),
);
