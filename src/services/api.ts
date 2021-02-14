import axios from 'axios';

export default axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    common: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      Pragma: 'no-cache',
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  },
});

export function createUser(username: string, email: string, password: string) {
  return axios
    .post('/users', {
      username,
      email,
      password,
    })
    .then(console.log);
}

export function loginUser() {}
