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
  const [selectedOption, setSelectedOption] = useState<ID | null>();
  const [error, setError] = useState<string | null>(null);
  const { selectReportByExerciseId, sendReport } = usePractice();
  const report = selectReportByExerciseId(exercise.id);

  const onSendReport = () => {
    if (selectedOption) {
      sendReport(selectedOption, exercise.id).catch((err) => {
        setError(err.response.data.detail);
      });
    } else {
      setError('Не был выбран вариант ответа');
    }
  };

  const onSelectOption = (e: RadioChangeEvent) => setSelectedOption(e.target.value);

  return (
    <section>
      <Title>{exercise.title}</Title>
      <Text>{exercise.description}</Text>
      {error && <Alert type="error" message={error} />}
      <Title level={4}>Выберите ответ:</Title>
      <RadioItems
        onChange={onSelectOption}
        defaultValue={report && report.answer.id}
        disabled={!!report}
      >
        {exercise.options.map(({ option, id }) => (
          <RadioItem key={id} value={id}>
            {report && report.answer.id === id && report.is_correct && (
              <Text type="success">{option}</Text>
            )}
            {report && report.answer.id === id && !report.is_correct && (
              <Text type="danger">{option}</Text>
            )}
            {(!report || report.answer.id !== id) && option}
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
