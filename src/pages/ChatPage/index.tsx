import React from 'react';
import { Chat } from 'components/chat/Chat';
import styled from 'styled-components';

export const ChatPage: React.VFC = () => (
  <ChatWrapper>
    <Chat />
  </ChatWrapper>
);

const ChatWrapper = styled.div`
  min-height: 80%;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
`;
