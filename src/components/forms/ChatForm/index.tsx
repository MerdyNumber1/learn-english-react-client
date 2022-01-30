import React from 'react';
import styled from 'styled-components';
import { Input, Button } from 'antd';
import { Formik } from 'formik';

interface ChatFormProps {
  onSubmit: (message: { message: string }) => any;
}

export const ChatForm: React.VFC<ChatFormProps> = ({ onSubmit: onSubmitCallback }) => (
  <Formik
    initialValues={{ message: '' }}
    validate={(values) => (!values.message ? { message: '' } : {})}
    onSubmit={(values, actions) => {
      onSubmitCallback(values);
      actions.resetForm();
    }}
  >
    {({ values, handleChange, handleBlur, handleSubmit }) => (
      <ChatFormWrapper onSubmit={handleSubmit}>
        <ChatInput
          value={values.message}
          onChange={handleChange}
          onBlur={handleBlur}
          name="message"
          placeholder="Введите сообщение..."
        />
        <ChatButton htmlType="submit" type="primary">
          Отправить
        </ChatButton>
      </ChatFormWrapper>
    )}
  </Formik>
);

const ChatFormWrapper = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ChatInput = styled(Input)`
  width: 100%;
`;

const ChatButton = styled(Button)`
  width: 100px;
`;
