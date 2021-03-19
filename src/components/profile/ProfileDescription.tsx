import React from 'react';
import { Descriptions } from 'antd';
import { useUser } from 'hooks/useUser';

export const ProfileDescription: React.FC = () => {
  const { userData } = useUser();

  return (
    <Descriptions title="Информация">
      <Descriptions.Item label="Имя">{userData.username}</Descriptions.Item>
      <Descriptions.Item label="Email">{userData.email}</Descriptions.Item>
    </Descriptions>
  );
};
