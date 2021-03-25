import { combineReducers } from 'redux';
import { userSlice } from './user';
import { theorySlice } from './theory';
import { practiceSlice } from './practice';

export const reducers = combineReducers({
  user: userSlice.reducer,
  theory: theorySlice.reducer,
  practice: practiceSlice.reducer,
});
