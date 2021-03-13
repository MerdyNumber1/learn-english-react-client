import { getItem } from 'services/storage';

export interface UserAuthState {
  accessToken: string;
  refreshToken: string;
}

export interface UserState {
  username: string;
  email: string;
  auth: UserAuthState;
}

export default {
  username: '',
  email: '',
  auth: {
    accessToken: getItem('access_token'),
    refreshToken: getItem('refresh_token'),
  },
} as UserState;
