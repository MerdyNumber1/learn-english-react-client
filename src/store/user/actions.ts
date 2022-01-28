import { navigate } from '@reach/router';
import { createUser, getTokens, fetchCurrentProfile, patchUser, refreshToken } from 'services/api';
import { State } from 'store';
import { TokensDTO, UserDTO } from 'services/models';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { tokensSelector } from './selectors';

export const signup = createAsyncThunk<UserDTO, UserDTO>('user/signup', (user: UserDTO) =>
  createUser(user)
);

export const login = createAsyncThunk<TokensDTO, UserDTO>(
  'user/login',
  async (authData: UserDTO, { rejectWithValue }) => {
    try {
      const { data } = await getTokens(authData);
      window.localStorage.setItem('access_token', data.access);
      window.localStorage.setItem('refresh_token', data.refresh);
      navigate('/');
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const reenter = createAsyncThunk<TokensDTO, void, { state: State }>(
  'user/reenter',
  async (_, { getState }) => {
    const { refresh } = tokensSelector(getState());

    if (refresh) {
      const { access } = await refreshToken(refresh);
      window.localStorage.setItem('access_token', access);
      return { access, refresh };
    }

    throw new Error('Refresh token is missed');
  }
);

export const logout = createAsyncThunk('user/logout', () => {
  window.localStorage.removeItem('access_token');
  window.localStorage.removeItem('refresh_token');
});

export const getCurrentUser = createAsyncThunk<UserDTO>('user/getCurrentUser', () =>
  fetchCurrentProfile()
);

export const updatePartialUser = createAsyncThunk<UserDTO, Partial<UserDTO>>(
  'user/updatePartialUser',
  (data) => patchUser(data)
);
