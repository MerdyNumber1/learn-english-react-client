import React, { useEffect } from 'react';
import { ChatForm } from 'components/forms/ChatForm';
import { Message } from 'components/chat/Message';
import styled from 'styled-components';
import { useChat } from 'hooks/useChat';

export const Chat: React.VFC = () => {
  const { init, send, close, messages, isReady } = useChat();

  useEffect(() => {
    init();
    return close;
  }, []);

  return (
    <ChatContainer>
      {isReady ? (
        <>
          {messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
          <ChatForm onSubmit={send} />
        </>
      ) : (
        <div>loading</div>
      )}
    </ChatContainer>
  );
};

const ChatContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
`;
