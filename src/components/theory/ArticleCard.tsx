import React from 'react';
import { ArticleDTO } from 'services/models';
import { Typography } from 'antd';

const { Title } = Typography;

interface ArticleCardProps {
  article: ArticleDTO;
}

export const ArticleCard: React.VFC<ArticleCardProps> = ({ article }) => (
  <section>
    <Title>{article.title}</Title>
    <div dangerouslySetInnerHTML={{ __html: article.content }} />
  </section>
);
