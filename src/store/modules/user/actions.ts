import { createUser, getTokens } from 'services/api';
import { AppDispatch } from 'store';
import { TokensDTO, User, UserDTO } from 'services/models';
import userSlice from './index';

const { setAuthData, setUserData } = userSlice.actions;

export const signup = (user: User) => (dispatch: AppDispatch) =>
  createUser(user).then((data: User) => dispatch(setUserData(data)));

export const login = (authData: UserDTO) => (dispatch: AppDispatch) =>
  getTokens(authData).then((data: TokensDTO) => dispatch(setAuthData(data)));
