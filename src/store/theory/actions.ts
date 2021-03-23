import { Dispatch } from 'store';
import { fetchTopic, fetchTopics, fetchArticle } from 'services/api';
import { ID } from 'services/models';
import { theorySlice } from './index';

const { setTopics, setTopic, setArticle } = theorySlice.actions;

export const getTopics = () => (dispatch: Dispatch) =>
  fetchTopics().then((topics) => dispatch(setTopics(topics)));

export const getTopic = (id: ID) => (dispatch: Dispatch) =>
  fetchTopic(id).then((topic) => dispatch(setTopic(topic)));

export const getArticle = (id: ID) => (dispatch: Dispatch) =>
  fetchArticle(id).then((article) => dispatch(setArticle(article)));
