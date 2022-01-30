import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useTheory } from 'hooks/useTheory';
import { RetweetOutlined } from '@ant-design/icons';

interface RepliedArticleProps {
  articleId: number;
}

export const RepliedArticle: React.VFC<RepliedArticleProps> = ({ articleId }) => {
  const { selectArticle, getArticle } = useTheory();

  const article = selectArticle(articleId);

  useEffect(() => {
    if (!article) {
      getArticle(articleId);
    }
  }, []);

  return (
    <RepliedArticleWrapper>
      {article ? (
        <div>
          <RetweetOutlined style={{ marginRight: '5px' }} />
          <a href={`/articles/${article.topic.id}/${article.id}`}>{article.title}</a>
        </div>
      ) : (
        <div>Статья не найдена</div>
      )}
    </RepliedArticleWrapper>
  );
};

const RepliedArticleWrapper = styled.div`
  padding: 5px;
`;
