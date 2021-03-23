import React from 'react';
import { ID } from 'services/models';

interface ArticlePageProps {
  articleId: ID;
}

export const ArticlePage: React.VFC<ArticlePageProps> = ({ articleId }) => <div>{articleId}</div>;
