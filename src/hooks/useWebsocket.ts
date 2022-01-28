import { useState } from 'react';
import { MessageType } from 'services/models';

interface useWebsocketEvents {
  onOpen: (e: WebSocketEventMap['open']) => void;
  onClose: (e: WebSocketEventMap['close']) => void;
  onMessage: (e: WebSocketEventMap['message']) => void;
}

export const useWebsocket = (url: string, events: useWebsocketEvents) => {
  const [ws, setWs] = useState<WebSocket>();

  const init = () => {
    const wsInstance = new WebSocket(url);
    wsInstance.onopen = events.onOpen;
    wsInstance.onclose = events.onClose;
    wsInstance.onmessage = events.onMessage;
    setWs(wsInstance);
  };

  return {
    init,
    ws,
    send: (data: any) => ws?.send(JSON.stringify({ ...data, type: MessageType.MESSAGE })),
    close: ws?.close,
  };
};
