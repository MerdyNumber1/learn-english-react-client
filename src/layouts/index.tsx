import React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';

export const LayoutContainer: React.FC = styled(Layout)`
  padding: 50px;
  min-height: calc(100vh - 65px);
`;

export const LayoutContent: React.FC = styled(Layout.Content)`
  background: white;
  padding: 24px;
`;
