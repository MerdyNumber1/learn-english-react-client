import React from 'react';
import { Message as MessageModel } from 'services/models';
import styled from 'styled-components';
import dayjs from 'dayjs';
import { useUser } from 'hooks/useUser';
import { RepliedArticle } from 'components/theory/RepliedArticle';
import { RepliedExercise } from 'components/practice/RepliedExercise';

interface MessageProps {
  message: MessageModel;
}

export const Message: React.VFC<MessageProps> = ({ message }) => {
  const { userData } = useUser();

  return (
    <MessageWrapper style={{ alignSelf: userData.id === message.user ? 'flex-end' : 'flex-start' }}>
      {message.type === 'exercise_reply' ? (
        <RepliedExercise exerciseId={message.exercise!} />
      ) : (
        message.type === 'article_reply' && <RepliedArticle articleId={message.article!} />
      )}
      {message.message}
      <MessageDateWrapper>{dayjs(message.created_at).format('HH:mm')}</MessageDateWrapper>
    </MessageWrapper>
  );
};

const MessageWrapper = styled.div`
  padding: 5px 15px 2px 10px;
  border: 1px solid #d9d9d9;
  border-radius: 3px;
  margin-bottom: 5px;
  position: relative;
`;

const MessageDateWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 2px;
  font-size: 9px;
  color: gray;
`;
