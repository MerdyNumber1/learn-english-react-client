import React from 'react';
import { Message as MessageModel } from 'services/models';
import styled from 'styled-components';

interface MessageProps {
  message: MessageModel;
}

export const Message: React.VFC<MessageProps> = ({ message }) => (
  <MessageWrapper>{message.message}</MessageWrapper>
);

const MessageWrapper = styled.div`
  padding: 2px 10px;
  border: 1px solid #d9d9d9;
  border-radius: 3px;
  margin-bottom: 5px;
`;
