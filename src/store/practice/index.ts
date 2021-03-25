import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ExerciseDTO } from 'services/models';

export const exercisesAdapter = createEntityAdapter<ExerciseDTO>();

export const practiceSlice = createSlice({
  name: 'practice',
  initialState: {
    exercises: exercisesAdapter.getInitialState(),
  },
  reducers: {
    setExercise(state, { payload }: PayloadAction<ExerciseDTO>) {
      exercisesAdapter.addOne(state.exercises, payload);
    },
  },
});
