import React from 'react';
import { useTheory } from 'hooks/useTheory';
import { useMount } from '@umijs/hooks';
import { ID } from 'services/models';
import { SpinnerSplash } from 'components/common/SpinnerSplash';
import { TopicCard } from 'components/theory/TopicCard';

interface ArticlesPageProps {
  topicId: ID;
}

export const ArticlesPage: React.VFC<ArticlesPageProps> = ({ topicId }) => {
  const { selectTopic, getTopic } = useTheory();
  const topic = selectTopic(topicId);

  useMount(() => {
    if (!topic) {
      getTopic(topicId);
    }
  });

  return topic ? <TopicCard topic={topic} /> : <SpinnerSplash size="large" />;
};
