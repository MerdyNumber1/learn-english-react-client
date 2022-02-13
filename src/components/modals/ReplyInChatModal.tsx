import React from 'react';
import { Input, Modal } from 'antd';
import { Formik } from 'formik';
import { RepliedArticle } from 'components/theory/RepliedArticle';
import { RepliedExercise } from 'components/practice/RepliedExercise';
import { useChat } from 'hooks/useChat';
import { MessageType, Message } from 'services/models';
import styled from 'styled-components';

interface ReplyInChatModalProps {
  onOk: () => void;
  onCancel: () => void;
  exerciseId?: number;
  articleId?: number;
}

export const ReplyInChatModal: React.VFC<ReplyInChatModalProps> = ({
  onOk,
  onCancel,
  articleId,
  exerciseId,
}) => {
  const { postMessage } = useChat();

  return (
    <Formik
      initialValues={{ message: '' }}
      validate={(values) => (!values.message ? { message: '' } : {})}
      onSubmit={async (values) => {
        const payload = {
          ...values,
        } as Message;

        if (articleId) {
          payload.type = MessageType.ARTICLE_REPLY;
          payload.article = +articleId;
        } else if (exerciseId) {
          payload.type = MessageType.EXERCISE_REPLY;
          payload.exercise = +exerciseId;
        }

        await postMessage(payload);
        onOk();
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit }) => (
        <form id="replyForm" onSubmit={handleSubmit}>
          <Modal
            title="Переслать в обсуждения"
            visible
            onCancel={onCancel}
            okButtonProps={{ htmlType: 'submit', form: 'replyForm' }}
          >
            <RepliedWrapper>
              {articleId ? (
                <RepliedArticle articleId={articleId} />
              ) : (
                <RepliedExercise exerciseId={exerciseId!} />
              )}
            </RepliedWrapper>
            <Input
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
              name="message"
              placeholder="Введите сообщение..."
            />
          </Modal>
        </form>
      )}
    </Formik>
  );
};

const RepliedWrapper = styled.div`
  margin-bottom: 20px;
`;
