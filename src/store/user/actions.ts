import { navigate } from '@reach/router';
import { createUser, getTokens, fetchCurrentProfile } from 'services/api';
import { Dispatch } from 'store/index';
import { removeItems, setItems } from 'services/storage';
import { TokensDTO, UserDTO } from 'services/models';
import userSlice from './index';

const { setAuthData, setUserData, clearUserInfo } = userSlice.actions;

export const signup = (user: UserDTO) => (dispatch: Dispatch) =>
  createUser(user).then((data: UserDTO) => dispatch(setUserData(data)));

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
  removeItems(['access_token', 'refresh_token']);
  dispatch(clearUserInfo());
  navigate('/');
};

export const getCurrentUser = () => (dispatch: Dispatch) =>
  fetchCurrentProfile().then((data) => dispatch(setUserData(data)));
