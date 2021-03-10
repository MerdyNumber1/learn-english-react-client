import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TokensDTO, UserDTO } from 'services/models';
import initialState from './state';

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData(state, { payload }: PayloadAction<UserDTO>) {
      state.email = payload.email;
      state.username = payload.username || '';
    },
    setAuthData(state, { payload }: PayloadAction<TokensDTO>) {
      state.auth.accessToken = payload.access;
      state.auth.refreshToken = payload.refresh;
    },
    clearUserInfo() {
      return initialState;
    },
  },
});

export default userSlice;
