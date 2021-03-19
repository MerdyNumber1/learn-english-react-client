import { getItem } from 'services/storage';

// TODO: split user state to auth state & user info state.
// TODO: Refactor everywhere User data to user info
// TODO: Deal with null safe ? and null union for my DTOs
// TODO: Refactor User auth state to user auth state: tokens: access, refresh
// That's all :) !

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
