import { navigate } from '@reach/router';
import { createUser, getTokens, fetchCurrentProfile } from 'services/api';
import { Dispatch } from 'store/index';
import { removeItems, setItems } from 'services/storage';
import { TokensDTO, UserDTO } from 'services/models';
import { userSlice } from './index';

const { setAuthData, setUserInfo, clearUserData } = userSlice.actions;

export const signup = (user: UserDTO) => (dispatch: Dispatch) =>
  createUser(user).then((data: UserDTO) => dispatch(setUserInfo(data)));

export const login = (authData: UserDTO) => (dispatch: Dispatch) =>
  getTokens(authData).then((data: TokensDTO) => {
    setItems([
      { key: 'access_token', value: data.access },
      { key: 'refresh_token', value: data.refresh },
    ]);
    dispatch(setAuthData(data));
    navigate('/');
  });

export const logout = () => (dispatch: Dispatch) => {
  removeItems('access_token', 'refresh_token');
  dispatch(clearUserData());
  navigate('/login');
};

export const getCurrentUser = () => (dispatch: Dispatch) =>
  fetchCurrentProfile().then((data) => dispatch(setUserInfo(data)));
