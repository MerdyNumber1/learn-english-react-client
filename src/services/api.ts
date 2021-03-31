import { default as axiosClient } from 'axios';
import { logout, reenter } from 'store/user/actions';
import { store } from 'store';
import { tokensSelector } from 'store/user/selectors';
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

const createAxiosResponseInterceptor = () => {
  const interceptor = axios.interceptors.response.use(
    (response) => Promise.resolve(response),
    async (error) => {
      if (error.response.status !== 401) {
        throw new Error(error);
      }

      axios.interceptors.response.eject(interceptor);

      try {
        const access = await dispatch(reenter());
        error.response.config.headers.Authorization = `Bearer ${access}`;
        return axios.request(error.response.config);
      } catch (err) {
        dispatch(logout());
        throw new Error(error);
      } finally {
        createAxiosResponseInterceptor();
      }
    }
  );
};

createAxiosResponseInterceptor();

axios.interceptors.request.use(
  (config) => {
    const { access } = tokensSelector(getState());

    if (access) {
      config.headers.Authorization = `Bearer ${access}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const createUser = (user: UserDTO) =>
  axios.post<UserDTO>('/users/', user).then((res) => res.data);

export const getTokens = (authData: UserDTO) =>
  axios.post<TokensDTO>('/users/token/', authData).then((res) => res.data);

export const refreshToken = (refresh: TokensDTO['refresh']) =>
  axios
    .post<Pick<TokensDTO, 'access'>>('/users/token/refresh/', { refresh })
    .then((res) => res.data);

export const patchUser = (fields: Partial<UserDTO>) =>
  axios.patch<UserDTO>('/users/me/', fields).then((res) => res.data);

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
      answer: optionId,
      exercise: exerciseId,
    })
    .then((res) => res.data);

export const fetchExerciseReport = (reportId: ID) =>
  axios.get<ExerciseReportDTO>(`/reports/${reportId}/`).then((res) => res.data);
