import { default as axiosClient } from 'axios';
import { logout } from 'store/modules/user/actions';
import store from 'store';
import { UserDTO, TokensDTO } from './models';

const { dispatch } = store;

const axios = axiosClient.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    common: {
      Accept: 'application/json',
    },
  },
});

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      dispatch(logout());
    }
    return error;
  },
);

export function createUser(user: UserDTO) {
  return axios.post<UserDTO>('/users/', user).then((res) => res.data);
}

export function getTokens(authData: UserDTO) {
  return axios.post<TokensDTO>('/users/token/', authData).then((res) => res.data);
}

export function fetchCurrentProfile() {
  return axios.get<UserDTO>('/users/me').then((res) => res.data);
}

export default axios;
