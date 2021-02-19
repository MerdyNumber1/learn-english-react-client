export interface UserAuthState {
  accessToken: string;
  refreshToken: string;
}

export interface UserState {
  username: string;
  email: string;
  auth: UserAuthState;
}

console.log(window.localStorage.getItem('access_token') || false);

export default {
  username: '',
  email: '',
  auth: {
    accessToken: window.localStorage.getItem('access_token') || '',
    refreshToken: window.localStorage.getItem('refresh_token') || '',
  },
} as UserState;
