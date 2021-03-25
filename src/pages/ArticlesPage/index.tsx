import React from 'react';
import { useTheory } from 'hooks/useTheory';
import { useMount } from '@umijs/hooks';
import { ID } from 'services/models';
import { SpinnerSplash } from 'components/common/SpinnerSplash';
import { TopicCard } from 'components/theory/TopicCard';
import { LinkList } from 'components/common/LinkList';

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

  return topic ? (
    <div>
      <TopicCard topic={topic} />
      <LinkList
        items={topic.articles.map((article) => ({
          link: `/articles/${topic.id}/${article.id}`,
          content: article.title,
        }))}
      />
    </div>
  ) : (
    <SpinnerSplash size="large" />
  );
};
