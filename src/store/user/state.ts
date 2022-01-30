export interface UserAuthState {
  tokens: UserTokensState;
}

export interface UserTokensState {
  access: string | null;
  refresh: string | null;
}

export interface UserInfoState {
  id: number | null;
  username: string | null;
  email: string | null;
  registrationDate: string | null;
  correctReportsCount: number | null;
}

export interface UserState {
  info: UserInfoState;
  auth: UserAuthState;
}

export const initialState = {
  info: {
    id: null,
    username: null,
    email: null,
    registrationDate: null,
    correctReportsCount: null,
  },
  auth: {
    tokens: {
      access: window.localStorage.getItem('access_token') || null,
      refresh: window.localStorage.getItem('refresh_token') || null,
    },
  },
} as UserState;

export const getInitialState = () => ({
  ...initialState,
  auth: {
    ...initialState.auth,
    tokens: {
      access: window.localStorage.getItem('access_token') || null,
      refresh: window.localStorage.getItem('refresh_token') || null,
    },
  },
});
