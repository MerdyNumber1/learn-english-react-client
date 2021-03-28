import { Dispatch } from 'store';
import { fetchExercise, postExerciseReport, fetchExerciseReport } from 'services/api';
import { ID } from 'services/models';
import { practiceSlice } from './index';

const { setExercise, setReport } = practiceSlice.actions;

export const getExercise = (id: ID) => (dispatch: Dispatch) =>
  fetchExercise(id).then((exercise) => {
    dispatch(setExercise(exercise));

    if (exercise.report) {
      fetchExerciseReport(exercise.report.id).then((report) => dispatch(setReport(report)));
    }
  });

export const sendReport = (optionId: ID, exerciseId: ID) => async (dispatch: Dispatch) => {
  const report = await postExerciseReport(optionId, exerciseId);
  const reportDetail = await fetchExerciseReport(report.id);
  dispatch(setReport(reportDetail));
};
