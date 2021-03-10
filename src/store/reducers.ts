import { combineReducers } from 'redux';
import userSlice from './user';

const reducers = combineReducers({
  user: userSlice.reducer,
});

export default reducers;
