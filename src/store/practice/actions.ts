import { Dispatch } from 'store';
import { fetchExercise, postExerciseReport } from 'services/api';
import { ID } from 'services/models';
import { practiceSlice } from './index';

const { setExercise, setReport } = practiceSlice.actions;

export const getExercise = (id: ID) => (dispatch: Dispatch) =>
  fetchExercise(id).then((exercise) => {
    dispatch(setExercise(exercise));
  });

export const sendReport = (optionId: ID, exerciseId: ID) => (dispatch: Dispatch) =>
  postExerciseReport(optionId, exerciseId).then((report) => {
    dispatch(setReport(report));
  });
