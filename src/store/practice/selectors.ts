import { State } from 'store';
import { createSelector } from '@reduxjs/toolkit';
import { ID } from 'services/models';
import { exercisesAdapter, reportsAdapter } from './index';

export const exercisesSelectors = exercisesAdapter.getSelectors<State>(
  (state) => state.practice.exercises
);

export const reportsSelectors = reportsAdapter.getSelectors<State>(
  (state) => state.practice.reports
);

export const reportSelectorByExerciseId = (exerciseId: ID) =>
  createSelector(reportsSelectors.selectAll, (reports) =>
    reports.find((report) => report.exercise.id === exerciseId)
  );
