import { State, useDispatch } from 'store';
import { getExercise } from 'store/practice/actions';
import { useSelector } from 'react-redux';
import { exercisesSelectors } from 'store/practice/selectors';
import { ID, ExerciseDTO } from 'services/models';

export const useTheory = () => {
  const dispatch = useDispatch();
  // const selectExercise = (id: ID) =>
  //   useSelector<State, ExerciseDTO | undefined>((state) =>
  //     exercisesSelectors.selectById(state, id)
  //   );

  return {
    getExercise: (id: ID) => dispatch(getExercise(id)),
    //selectExercise: (id: ID) => useSelector(selectExercise(id)),
  };
};
