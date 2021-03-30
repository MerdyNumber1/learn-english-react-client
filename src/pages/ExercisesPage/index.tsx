import React from 'react';
import { useTheory } from 'hooks/useTheory';
import { useMount } from '@umijs/hooks';
import { ID } from 'services/models';
import { SpinnerSplash } from 'components/common/SpinnerSplash';
import { TopicCard } from 'components/theory/TopicCard';
import { LinkList } from 'components/common/LinkList';
import { Typography } from 'antd';
import styled from 'styled-components';

const { Title } = Typography;

interface ExercisesPageProps {
  topicId: ID;
}

export const ExercisesPage: React.VFC<ExercisesPageProps> = ({ topicId }) => {
  const { selectTopic, getTopic } = useTheory();
  const topic = selectTopic(topicId);

  useMount(() => {
    if (!topic) {
      getTopic(topicId);
    }
  });

  return topic ? (
    <div>
      <TopicCard topic={topic} />
      <ExercisesListTitle level={3}>Задания по теме:</ExercisesListTitle>
      <LinkList
        items={topic.exercises.map((article) => ({
          link: `/exercises/${topic.id}/${article.id}`,
          content: article.title,
        }))}
      />
    </div>
  ) : (
    <SpinnerSplash size="large" />
  );
};

const ExercisesListTitle = styled(Title)`
  margin: 30px 0;
`;
