import React from 'react';
import { ID } from 'services/models';
import { ArticleCard } from 'components/theory/ArticleCard';
import { SpinnerSplash } from 'components/common/SpinnerSplash';
import { BackToTopicTitle } from 'components/BackToTopicTitle';
import { useTheory } from 'hooks/useTheory';
import { useMount } from '@umijs/hooks';
import { Helmet } from 'react-helmet';

interface ArticlePageProps {
  articleId: ID;
}

export const ArticlePage: React.VFC<ArticlePageProps> = ({ articleId }) => {
  const { getArticle, selectArticle } = useTheory();
  const article = selectArticle(articleId);

  useMount(() => {
    if (!article) {
      getArticle(articleId);
    }
  });

  return (
    <>
      <Helmet>{article && <title>{article.title}</title>}</Helmet>
      {article ? (
        <div>
          <BackToTopicTitle
            topicTitle={article.topic.title}
            topicLink={`/articles/${article.topic.id}`}
          />
          <ArticleCard article={article} />
        </div>
      ) : (
        <SpinnerSplash size="large" />
      )}
    </>
  );
};
