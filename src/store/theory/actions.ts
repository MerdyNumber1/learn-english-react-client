import { Dispatch } from 'store';
import { fetchTopics } from 'services/api';
import { theorySlice } from './index';

const { setTopics } = theorySlice.actions;

export const getTopics = () => (dispatch: Dispatch) =>
  fetchTopics().then((topics) => dispatch(setTopics(topics)));
