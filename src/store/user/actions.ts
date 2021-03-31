import { navigate } from '@reach/router';
import { createUser, getTokens, fetchCurrentProfile, patchUser, refreshToken } from 'services/api';
import { Dispatch, store } from 'store';
import { removeItems, setItems, setItem } from 'services/storage';
import { TokensDTO, UserDTO } from 'services/models';
import { userSlice } from './index';
import { tokensSelector } from './selectors';

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

export const reenter = () => async (dispatch: Dispatch, getState: typeof store.getState) => {
  const { refresh } = tokensSelector(getState());

  if (refresh) {
    const { access } = await refreshToken(refresh);
    setItem('access_token', access);
    dispatch(setAuthData({ refresh, access }));
    return access;
  }

  throw new Error('refresh doesnt exist');
};

export const logout = () => (dispatch: Dispatch) => {
  removeItems('access_token', 'refresh_token');
  dispatch(clearUserData());
  navigate('/login');
};

export const getCurrentUser = () => (dispatch: Dispatch) =>
  fetchCurrentProfile().then((data) => dispatch(setUserInfo(data)));

export const updatePartialUser = (fields: Partial<UserDTO>) => (dispatch: Dispatch) =>
  patchUser(fields).then((data) => dispatch(setUserInfo(data)));
