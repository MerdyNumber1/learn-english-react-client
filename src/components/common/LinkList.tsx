import React from 'react';
import { List, Typography } from 'antd';
import { navigate } from '@reach/router';

const { Link } = Typography;

interface LinkListProps {
  items: LinkListItem[];
}

interface LinkListItem {
  link: string;
  content: string;
}

export const LinkList: React.VFC<LinkListProps> = ({ items }) => (
  <List
    itemLayout="horizontal"
    dataSource={items}
    renderItem={(item) => (
      <List.Item>
        <Link onClick={() => navigate(item.link)}>{item.content}</Link>
      </List.Item>
    )}
  />
);
