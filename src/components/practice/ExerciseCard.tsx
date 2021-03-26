import React, { useState } from 'react';
import { Typography, Radio, Button, RadioChangeEvent, Alert } from 'antd';
import { ExerciseDTO, ID } from 'services/models';
import styled from 'styled-components';
import { usePractice } from 'hooks/usePractice';

const { Text, Title } = Typography;

interface ExerciseCardProps {
  exercise: ExerciseDTO;
}

export const ExerciseCard: React.VFC<ExerciseCardProps> = ({ exercise }) => {
  const [option, setOption] = useState<ID | null>();
  const [error, setError] = useState<string | null>(null);
  const { selectReportByExerciseId, sendReport } = usePractice();
  const report = selectReportByExerciseId(exercise.id);

  console.log(report);

  const onSendReport = () => {
    if (option) {
      sendReport(option, exercise.id);
    } else {
      setError('Не был выбран вариант ответа');
    }
  };

  const onSelectOption = (e: RadioChangeEvent) => setOption(e.target.value);

  return (
    <section>
      <Title>{exercise.title}</Title>
      <Text>{exercise.description}</Text>
      {error && <Alert type="error" message={error} />}
      <Title level={4}>Выберите ответ:</Title>
      <RadioItems onChange={onSelectOption}>
        {exercise.options.map(({ title, id }) => (
          <RadioItem key={id} value={id}>
            {title}
          </RadioItem>
        ))}
      </RadioItems>
      <AnswerButton type="primary" disabled={!!report} onClick={onSendReport}>
        Ответить
      </AnswerButton>
    </section>
  );
};

const RadioItem = styled(Radio)`
  display: block;
`;

const RadioItems = styled(Radio.Group)`
  display: block;
`;

const AnswerButton = styled(Button)`
  margin-top: 20px;
`;
