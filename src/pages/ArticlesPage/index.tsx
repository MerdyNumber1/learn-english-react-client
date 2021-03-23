import React from 'react';
import { useTheory } from 'hooks/useTheory';
import { useMount } from '@umijs/hooks';
import { ID } from 'services/models';
import { Typography } from 'antd';
import { SpinnerSplash } from 'components/common/SpinnerSplash';

const { Title } = Typography;

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

  return topic ? <Title>{topic.title}</Title> : <SpinnerSplash size="large" />;
};
