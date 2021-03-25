import React from 'react';
import { ExerciseDTO } from 'services/models';

interface ExerciseCardProps {
  exercise: ExerciseDTO;
}

export const ExerciseCard: React.VFC<ExerciseCardProps> = ({ exercise }) => (
  <div>{exercise.title}</div>
);
