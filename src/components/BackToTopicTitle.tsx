import React, { useState } from 'react';
import { navigate } from '@reach/router';
import { PageHeader, Tooltip } from 'antd';
import styled from 'styled-components';
import { RollbackOutlined } from '@ant-design/icons';
import { ReplyInChatModal } from 'components/modals/ReplyInChatModal';

interface BackToTopicTitleProps {
  topicTitle: string;
  topicLink: string;
  exerciseId?: number;
  articleId?: number;
}

export const BackToTopicTitle: React.VFC<BackToTopicTitleProps> = ({
  topicTitle,
  topicLink,
  articleId,
  exerciseId,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <HeaderWrapper>
      {isModalVisible && (
        <ReplyInChatModal
          articleId={articleId}
          exerciseId={exerciseId}
          onOk={() => setIsModalVisible(false)}
          onCancel={() => setIsModalVisible(false)}
        />
      )}
      <Header title={topicTitle} onBack={() => navigate(topicLink)} />
      <Tooltip title="Отправить в обсуждение">
        <Reply onClick={() => setIsModalVisible(true)} />
      </Tooltip>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 600px) {
    flex-wrap: wrap;
  }
`;

const Header = styled(PageHeader)`
  padding: 0;
`;

const Reply = styled(RollbackOutlined)`
  cursor: pointer;
  font-size: 20px;
`;
