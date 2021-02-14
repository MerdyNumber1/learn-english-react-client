import { createSelector } from '@reduxjs/toolkit';
import { State } from 'store';

export const getAuthStatus = createSelector(
  (state: State) => state.user.auth,
  ({ accessToken, refreshToken }) => accessToken && refreshToken,
);
