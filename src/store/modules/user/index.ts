import { createSlice } from '@reduxjs/toolkit';
import initialState from './state';

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser(state, { payload }) {
      state.auth = {
        accessToken: payload.access,
        refreshToken: payload.refresh,
      };
    },
  },
});

export default user;
