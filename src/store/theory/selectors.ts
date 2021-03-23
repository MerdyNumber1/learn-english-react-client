import { State } from 'store';
import { articlesAdapter, topicsAdapter } from './index';

export const topicsSelectors = topicsAdapter.getSelectors<State>((state) => state.theory.topics);
export const articlesSelectors = articlesAdapter.getSelectors<State>(
  (state) => state.theory.articles,
);
