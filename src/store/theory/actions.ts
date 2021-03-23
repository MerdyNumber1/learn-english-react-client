import { Dispatch } from 'store';
import { fetchTopic, fetchTopics } from 'services/api';
import { ID } from 'services/models';
import { theorySlice } from './index';

const { setTopics, setTopic } = theorySlice.actions;

export const getTopics = () => (dispatch: Dispatch) =>
  fetchTopics().then((topics) => dispatch(setTopics(topics)));

export const getTopic = (id: ID) => (dispatch: Dispatch) =>
  fetchTopic(id).then((topic) => dispatch(setTopic(topic)));
