import React from 'react';
import { usePractice } from 'hooks/usePractice';
import { useMount } from '@umijs/hooks';
import { BackToTopicTitle } from 'components/BackToTopicTitle';
import { SpinnerSplash } from 'components/common/SpinnerSplash';
import { ExerciseCard } from 'components/practice/ExerciseCard';
import { Helmet } from 'react-helmet';

interface ExercisePageProps {
  exerciseId: number;
}

export const ExercisePage: React.VFC<ExercisePageProps> = ({ exerciseId }) => {
  const { getExercise, selectExercise } = usePractice();
  const exercise = selectExercise(exerciseId);

  useMount(() => {
    if (!exercise) {
      getExercise(exerciseId);
    }
  });

  return (
    <>
      <Helmet>
        {exercise && (
          <title>
            {exercise.title}: {exercise.topic.title}
          </title>
        )}
      </Helmet>
      {exercise ? (
        <div>
          <BackToTopicTitle
            exerciseId={exerciseId}
            topicTitle={exercise.topic.title}
            topicLink={`/exercises/${exercise.topic.id}`}
          />
          <ExerciseCard exercise={exercise} />
        </div>
      ) : (
        <SpinnerSplash size="large" />
      )}
    </>
  );
};
