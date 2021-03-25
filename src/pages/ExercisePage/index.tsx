import React from 'react';
import { useTheory } from 'hooks/useTheory';

interface ExercisePageProps {
  topicId: string;
  exerciseId: string;
}

export const ExercisePage: React.VFC<ExercisePageProps> = ({ topicId, exerciseId }) => {
  const { getExercise, selectExercise } = useTheory();

  return (
    <div>
      {topicId} {exerciseId}
    </div>
  );
};
