import { createUser } from 'services/api';
import { AppDispatch } from 'store';
import user from './index';

const { loginUser } = user.actions;

export const signup = (username: string, email: string, password: string) => (
  dispatch: AppDispatch,
) => {
  createUser(username, email, password).then((res) => dispatch(loginUser(res)));
};
