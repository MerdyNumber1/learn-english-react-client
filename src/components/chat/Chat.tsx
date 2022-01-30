import React, { useEffect, useRef } from 'react';
import { ChatForm } from 'components/forms/ChatForm';
import { Message } from 'components/chat/Message';
import styled from 'styled-components';
import { useChat } from 'hooks/useChat';
import { SpinnerSplash } from 'components/common/SpinnerSplash';
import { fetchMessages } from 'services/api';

export const Chat: React.VFC = () => {
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const { init, send, close, messages, isReady, setMessages } = useChat();

  useEffect(() => {
    fetchMessages().then((initialMessages) => {
      setMessages(initialMessages);
    });
    init();
    return close;
  }, []);

  useEffect(() => {
    messagesContainerRef.current?.scrollTo(
      0,
      messagesContainerRef.current.scrollHeight - messagesContainerRef.current.clientHeight
    );
  }, [messages]);

  return (
    <ChatContainer>
      {isReady ? (
        <>
          <ScrollMessagesContainer ref={messagesContainerRef}>
            <Messages>
              {messages.map((message) => (
                <Message key={message.id} message={message} />
              ))}
            </Messages>
          </ScrollMessagesContainer>
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

const ScrollMessagesContainer = styled.div`
  max-height: 715px;
  overflow-y: auto;
  margin-bottom: 20px;
`;

const Messages = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
`;
