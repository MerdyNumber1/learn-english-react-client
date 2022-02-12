import React from 'react';
import { Input, Modal } from 'antd';
import { Formik } from 'formik';
import { RepliedArticle } from 'components/theory/RepliedArticle';
import { RepliedExercise } from 'components/practice/RepliedExercise';
import { useChat } from 'hooks/useChat';
import { MessageType } from 'services/models';
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
        await postMessage({
          ...values,
          type: articleId ? MessageType.ARTICLE_REPLY : MessageType.EXERCISE_REPLY,
          article: Number(articleId || exerciseId),
        });
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
