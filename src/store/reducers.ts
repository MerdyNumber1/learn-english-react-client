import { combineReducers } from 'redux';
import { userSlice } from './user';
import { theorySlice } from './theory';

export const reducers = combineReducers({
  user: userSlice.reducer,
  theory: theorySlice.reducer,
});
