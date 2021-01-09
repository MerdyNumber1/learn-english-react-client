import { createSlice } from '@reduxjs/toolkit';
import initialState from './state';

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserName(state, action) {
      state.name = action.payload;
    },
  },
});

export default user;
