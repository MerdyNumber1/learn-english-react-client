import { createUser, getTokens, fetchCurrentProfile } from 'services/api';
import { Dispatch } from 'store';
import { TokensDTO, UserDTO } from 'services/models';
import userSlice from './index';

const { setAuthData, setUserData, clearUserInfo } = userSlice.actions;

export const signup = (user: UserDTO) => (dispatch: Dispatch) =>
  createUser(user).then((data: UserDTO) => dispatch(setUserData(data)));

export const login = (authData: UserDTO) => (dispatch: Dispatch) => {
  getTokens(authData).then((data: TokensDTO) => {
    console.log(data);
    window.localStorage.setItem('access_token', data.access);
    window.localStorage.setItem('refresh_token', data.refresh);
    dispatch(setAuthData(data));
  });
};

export const logout = () => (dispatch: Dispatch) => {
  window.localStorage.removeItem('access_token');
  window.localStorage.removeItem('refresh_token');
  dispatch(clearUserInfo());
};

export const getCurrentUser = () => (dispatch: Dispatch) =>
  fetchCurrentProfile().then((data) => dispatch(setUserData(data)));
