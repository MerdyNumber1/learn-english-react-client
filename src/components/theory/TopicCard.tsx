import React from 'react';
import { TopicDTO } from 'services/models';
import { Typography } from 'antd';

const { Title } = Typography;

interface TopicCardProps {
  topic: TopicDTO;
}

export const TopicCard: React.VFC<TopicCardProps> = ({ topic }) => (
  <section>
    <Title>{topic.title}</Title>
    {topic.description && <div dangerouslySetInnerHTML={{ __html: topic.description }} />}
  </section>
);
