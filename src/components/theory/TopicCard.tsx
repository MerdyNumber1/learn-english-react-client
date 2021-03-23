import React from 'react';
import { TopicDTO } from 'services/models';
import { Typography, List } from 'antd';

const { Title, Text } = Typography;

interface TopicCardProps {
  topic: TopicDTO;
}

export const TopicCard: React.VFC<TopicCardProps> = ({ topic }) => (
  <section>
    <Title>{topic.title}</Title>
    {topic.description && <Text>{topic.description}</Text>}
    <List
      itemLayout="horizontal"
      dataSource={topic.articles}
      renderItem={(article) => <List.Item>{article}</List.Item>}
    />
  </section>
);
