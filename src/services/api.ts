import { default as axiosClient } from 'axios';
import { User, UserDTO, TokensDTO } from './models';

const axios = axiosClient.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    common: {
      Accept: 'application/json',
    },
  },
});

export function createUser(user: User) {
  return axios.post<User>('/users/', user).then((res) => res.data);
}

export function getTokens(authData: UserDTO) {
  return axios.post<TokensDTO>('/users/token/', authData).then((res) => res.data);
}

export default axios;
