import React, { useEffect } from 'react';
import styled from 'styled-components';
import { usePractice } from 'hooks/usePractice';
import { RetweetOutlined } from '@ant-design/icons';

interface RepliedExerciseProps {
  exerciseId: number;
}

export const RepliedExercise: React.VFC<RepliedExerciseProps> = ({ exerciseId }) => {
  const { selectExercise, getExercise } = usePractice();

  const exercise = selectExercise(exerciseId);

  useEffect(() => {
    if (!exercise) {
      getExercise(exerciseId);
    }
  }, []);

  return (
    <RepliedExerciseWrapper>
      {exercise ? (
        <div>
          <RetweetOutlined style={{ marginRight: '5px' }} />
          <a href={`/exercises/${exercise.topic.id}/${exercise.id}`}>{exercise.title}</a>
        </div>
      ) : (
        <div>Задание не найдено</div>
      )}
    </RepliedExerciseWrapper>
  );
};

const RepliedExerciseWrapper = styled.div`
  padding: 5px;
`;
