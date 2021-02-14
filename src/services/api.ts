import { default as axiosClient } from 'axios';

const axios = axiosClient.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    common: {
      Accept: 'application/json',
    },
  },
});

export function createUser(username: string, email: string, password: string) {
  return axios
    .post('/users/', {
      username,
      email,
      password,
    })
    .then((res) => res.data);
}

export function loginUser() {}

export default axios;
