import { useState } from 'react';
import { Message } from 'services/models';
import { useWebsocket } from './useWebsocket';
import { useUser } from './useUser';

export const useChat = () => {
  const { tokens } = useUser();
  const [messages, setMessages] = useState<Message[]>([]);
  const [isReady, setIsReady] = useState(false);

  const onOpen = () => setIsReady(true);
  const onClose = () => setIsReady(false);
  const onMessage = (e: WebSocketEventMap['message']) =>
    setMessages((prev) => [...prev, JSON.parse(e.data)]);

  const ws = useWebsocket(`${process.env.REACT_APP_WS_URL}/chat/?token=${tokens.tokens.access}`, {
    onOpen,
    onClose,
    onMessage,
  });

  return { ...ws, isReady, messages };
};
