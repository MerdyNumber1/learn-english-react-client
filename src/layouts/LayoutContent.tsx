import styled from 'styled-components';
import { Layout } from 'antd';
import { Queries } from 'assets/styles/vars';

export const LayoutContent = styled(Layout.Content)`
  background: white;
  padding: 24px;
  margin: 50px;

  @media (max-width: ${Queries.tablet}) {
    padding: 30px 12px;
    margin: 0;
  }
`;
