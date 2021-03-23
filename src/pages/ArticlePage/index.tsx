import React from 'react';
import { PageHeader } from 'antd';
import { ID } from 'services/models';
import { ArticleCard } from 'components/theory/ArticleCard';
import { SpinnerSplash } from 'components/common/SpinnerSplash';
import { useTheory } from 'hooks/useTheory';
import { useMount } from '@umijs/hooks';
import { navigate } from '@reach/router';

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

  return article ? (
    <div>
      <PageHeader
        title={article.topic.title}
        subTitle="Вернуться обратно к теме"
        onBack={() => navigate(`/articles/${article.topic.id}`)}
      />
      <ArticleCard article={article} />
    </div>
  ) : (
    <SpinnerSplash size="large" />
  );
};
