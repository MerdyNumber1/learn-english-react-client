import React from 'react';
import { TopicDTO } from 'services/models';
import { Typography, List } from 'antd';
import { navigate } from '@reach/router';

const { Title, Text, Link } = Typography;

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
      renderItem={(article) => (
        <List.Item>
          <Link onClick={() => navigate(`/articles/${topic.id}/${article.id}`)}>
            {article.title}
          </Link>
        </List.Item>
      )}
    />
  </section>
);
