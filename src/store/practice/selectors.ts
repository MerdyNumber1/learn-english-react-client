import { State } from 'store';
import { exercisesAdapter } from './index';

export const exercisesSelectors = exercisesAdapter.getSelectors<State>(
  (state) => state.practice.exercises
);
