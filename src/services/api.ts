import { default as axiosClient } from 'axios';
import { logout } from 'store/user/actions';
import { store } from 'store';
import {
  UserDTO,
  TokensDTO,
  TopicDTO,
  ID,
  ArticleDTO,
  ExerciseDTO,
  ExerciseReportDTO,
} from './models';

const { dispatch, getState } = store;

export const axios = axiosClient.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    common: {
      Accept: 'application/json',
    },
  },
});

axios.interceptors.response.use(
  (response) => Promise.resolve(response),
  (error) => {
    if (error.response && error.response.status === 401) {
      dispatch(logout());
    }
    return Promise.reject(error);
  }
);

axios.interceptors.request.use(
  (config) => {
    const token = getState().user.auth.tokens.access;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const createUser = (user: UserDTO) =>
  axios.post<UserDTO>('/users/', user).then((res) => res.data);

export const getTokens = (authData: UserDTO) =>
  axios.post<TokensDTO>('/users/token/', authData).then((res) => res.data);

export const fetchCurrentProfile = () => axios.get<UserDTO>('/users/me').then((res) => res.data);

export const fetchTopics = () => axios.get<TopicDTO[]>('/topics/').then((res) => res.data);

export const fetchTopic = (id: ID) => axios.get<TopicDTO>(`/topics/${id}/`).then((res) => res.data);

export const fetchArticle = (id: ID) =>
  axios.get<ArticleDTO>(`/articles/${id}`).then((res) => res.data);

export const fetchExercise = (id: ID) =>
  axios.get<ExerciseDTO>(`/exercises/${id}`).then((res) => res.data);

export const postExerciseReport = (optionId: ID, exerciseId: ID) =>
  axios
    .post<ExerciseReportDTO>('/reports/', {
      option_id: optionId,
      exercise_id: exerciseId,
    })
    .then((res) => res.data);
