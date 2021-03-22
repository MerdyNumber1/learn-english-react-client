import { State } from 'store';
import { topicsAdapter } from './index';

export const topicsSelectors = topicsAdapter.getSelectors<State>((state) => state.theory.topics);
