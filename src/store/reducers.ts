import { combineReducers } from 'redux';
import { userSlice } from './user';

export const reducers = combineReducers({
  user: userSlice.reducer,
});
