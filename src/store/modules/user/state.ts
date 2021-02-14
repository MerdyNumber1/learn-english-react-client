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
    accessToken: '',
    refreshToken: '',
  },
} as UserState;
