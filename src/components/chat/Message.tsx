import React from 'react';
import { Message as MessageModel } from 'services/models';

interface MessageProps {
  message: MessageModel;
}

export const Message: React.VFC<MessageProps> = ({ message }) => <div>{message.message}</div>;
