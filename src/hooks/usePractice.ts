import { State, useAppDispatch } from 'store';
import { getExercise, sendReport } from 'store/practice/actions';
import { useSelector } from 'react-redux';
import { exercisesSelectors, reportSelectorByExerciseId } from 'store/practice/selectors';
import { ID, ExerciseDTO } from 'services/models';

export const usePractice = () => {
  const dispatch = useAppDispatch();

  return {
    getExercise: (id: ID) => dispatch(getExercise(id)),
    selectExercise: (id: ID) =>
      useSelector<State, ExerciseDTO | undefined>((state) =>
        exercisesSelectors.selectById(state, id)
      ),
    sendReport: (optionId: ID, exerciseId: ID) => dispatch(sendReport(optionId, exerciseId)),
    selectReportByExerciseId: (exerciseId: ID) =>
      useSelector(reportSelectorByExerciseId(exerciseId)),
  };
};
