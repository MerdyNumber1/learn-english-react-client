import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TokensDTO, UserDTO } from 'services/models';
import { initialState, getInitialState } from './state';

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo(state, { payload }: PayloadAction<UserDTO>) {
      state.info.email = payload.email;
      state.info.username = payload.username || null;
      state.info.registrationDate = payload.registration_date || null;
    },
    setAuthData(state, { payload }: PayloadAction<TokensDTO>) {
      state.auth.tokens = payload;
    },
    clearUserData() {
      return getInitialState();
    },
  },
});
