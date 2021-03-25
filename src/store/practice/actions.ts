import { Dispatch } from 'store';
import { fetchExercise } from 'services/api';
import { ID } from 'services/models';
import { practiceSlice } from './index';

const { setExercise } = practiceSlice.actions;

export const getExercise = (id: ID) => (dispatch: Dispatch) =>
  fetchExercise(id).then((exercise) => dispatch(setExercise(exercise)));
