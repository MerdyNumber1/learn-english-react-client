import React from 'react';
import { Descriptions, Typography, Input } from 'antd';
import { useUser } from 'hooks/useUser';
import styled from 'styled-components';

const { Paragraph } = Typography;

export const ProfileDescription: React.FC = () => {
  const { userData, updatePartialUser } = useUser();

  return (
    <section>
      <Descriptions title="Информация">
        <Descriptions.Item label="Имя">
          <Paragraph editable={{ onChange: (str) => updatePartialUser({ username: str }) }}>
            {userData.username || ''}
          </Paragraph>
        </Descriptions.Item>
        <Descriptions.Item label="Email">
          <Paragraph editable={{ onChange: (str) => updatePartialUser({ email: str }) }}>
            {userData.email || ''}
          </Paragraph>
        </Descriptions.Item>
        <Descriptions.Item label="Дата регистрации">{userData.registrationDate}</Descriptions.Item>
        <Descriptions.Item label="Правильных ответов">
          {userData.correctReportsCount}
        </Descriptions.Item>
        <Descriptions.Item label="Правильных ответов">
          <PasswordInput
            onChange={(e) => updatePartialUser({ password: e.target.value })}
            placeholder="Введите новый пароль"
          />
        </Descriptions.Item>
      </Descriptions>
    </section>
  );
};

const PasswordInput = styled(Input.Password)`
  width: 200px;
  margin-left: 10px;
`;
