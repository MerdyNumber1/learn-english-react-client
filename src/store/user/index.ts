import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TokensDTO, UserDTO } from 'services/models';
import { initialState, getInitialState } from './state';
import { login, signup, reenter, logout, getCurrentUser, updatePartialUser } from './actions';

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo(state, { payload }: PayloadAction<UserDTO>) {
      state.info.id = payload.id || null;
      state.info.email = payload.email;
      state.info.username = payload.username || null;
      state.info.registrationDate = payload.registration_date || null;
      state.info.correctReportsCount = payload.correct_reports_count ?? null;
    },
    setAuthData(state, { payload }: PayloadAction<TokensDTO>) {
      state.auth.tokens = payload;
    },
    clearUserData(state) {
      state.auth = getInitialState().auth;
      state.info = getInitialState().info;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(login.fulfilled, (state, action) => {
        userSlice.caseReducers.setAuthData(state, action);
      })
      .addCase(signup.fulfilled, (state, action) => {
        userSlice.caseReducers.setUserInfo(state, action);
      })
      .addCase(reenter.fulfilled, (state, action) => {
        userSlice.caseReducers.setAuthData(state, action);
      })
      .addCase(logout.fulfilled, (state) => {
        userSlice.caseReducers.clearUserData(state);
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        userSlice.caseReducers.setUserInfo(state, action);
      })
      .addCase(updatePartialUser.fulfilled, (state, action) => {
        userSlice.caseReducers.setUserInfo(state, action);
      });
  },
});

export const { actions } = userSlice;
