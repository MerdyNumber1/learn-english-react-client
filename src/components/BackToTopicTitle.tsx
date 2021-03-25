import React from 'react';
import { navigate } from '@reach/router';
import { PageHeader } from 'antd';
import styled from 'styled-components';

interface BackToTopicTitleProps {
  topicTitle: string;
  topicLink: string;
}

export const BackToTopicTitle: React.VFC<BackToTopicTitleProps> = ({ topicTitle, topicLink }) => (
  <Header
    title={topicTitle}
    subTitle="Вернуться обратно к теме"
    onBack={() => navigate(topicLink)}
  />
);

const Header = styled(PageHeader)`
  padding: 0;
`;
