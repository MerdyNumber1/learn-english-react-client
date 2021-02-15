import { createUser, getTokens } from 'services/api';
import { Dispatch } from 'store';
import { TokensDTO, User, UserDTO } from 'services/models';
import userSlice from './index';

const { setAuthData, setUserData } = userSlice.actions;

export const signup = (user: User) => (dispatch: Dispatch) =>
  createUser(user).then((data: User) => dispatch(setUserData(data)));

export const login = (authData: UserDTO) => (dispatch: Dispatch) =>
  getTokens(authData).then((data: TokensDTO) => dispatch(setAuthData(data)));
