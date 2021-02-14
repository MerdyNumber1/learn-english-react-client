import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TokensDTO, User } from 'services/models';
import initialState from './state';

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData(state, { payload }: PayloadAction<User>) {
      state.email = payload.email;
      state.username = payload.username;
    },
    setAuthData(state, { payload }: PayloadAction<TokensDTO>) {
      state.auth.accessToken = payload.access;
      state.auth.refreshToken = payload.refresh;
    },
  },
});

export default userSlice;
