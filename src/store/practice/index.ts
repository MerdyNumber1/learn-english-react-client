import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ExerciseDTO, ExerciseReportDTO } from 'services/models';

export const exercisesAdapter = createEntityAdapter<ExerciseDTO>();
export const reportsAdapter = createEntityAdapter<ExerciseReportDTO>();

export const practiceSlice = createSlice({
  name: 'practice',
  initialState: {
    exercises: exercisesAdapter.getInitialState(),
    reports: reportsAdapter.getInitialState(),
  },
  reducers: {
    setExercise(state, { payload }: PayloadAction<ExerciseDTO>) {
      exercisesAdapter.addOne(state.exercises, payload);
    },
    setReport(state, { payload }: PayloadAction<ExerciseReportDTO>) {
      reportsAdapter.addOne(state.reports, payload);
    },
  },
});
