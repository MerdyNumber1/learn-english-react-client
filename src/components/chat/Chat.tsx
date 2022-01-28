import React, { useEffect } from 'react';
import { ChatForm } from 'components/forms/ChatForm';
import { Message } from 'components/chat/Message';
import styled from 'styled-components';
import { useChat } from 'hooks/useChat';
import { SpinnerSplash } from 'components/common/SpinnerSplash';
import { fetchMessages } from 'services/api';

export const Chat: React.VFC = () => {
  const { init, send, close, messages, isReady, setMessages } = useChat();

  useEffect(() => {
    fetchMessages().then((initialMessages) => {
      setMessages(initialMessages);
    });
    init();
    return close;
  }, []);

  return (
    <ChatContainer>
      {isReady ? (
        <>
          <Messages>
            {messages.map((message) => (
              <Message key={message.id} message={message} />
            ))}
          </Messages>
          <ChatForm onSubmit={send} />
        </>
      ) : (
        <SpinnerSplash />
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
`;

const Messages = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  margin-bottom: 20px;
`;
