import React from 'react';
import { TopicDTO } from 'services/models';
import { Typography } from 'antd';

const { Title, Text } = Typography;

interface TopicCardProps {
  topic: TopicDTO;
}

export const TopicCard: React.VFC<TopicCardProps> = ({ topic }) => (
  <section>
    <Title>{topic.title}</Title>
    {topic.description && (
      <Text>
        <span dangerouslySetInnerHTML={{ __html: topic.description }}></span>
      </Text>
    )}
  </section>
);
