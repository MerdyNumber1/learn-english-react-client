import { Layout } from 'antd';
import styled from 'styled-components';
import { Queries } from 'assets/styles/vars';

const { Header } = Layout;

export const MainHeader = styled(Header)`
  padding: 0 4%;
`;

export const MainLayout = styled(Layout)`
  height: 100vh;
`;

export const LayoutContainer = styled(Layout)`
  padding: 50px;

  @media (max-width: ${Queries.tablet}) {
    padding: 0;
  }
`;

export const LayoutContent = styled(Layout.Content)`
  background: white;
  padding: 50px 24px;

  @media (max-width: ${Queries.tablet}) {
    padding: 30px 12px;
  }
`;
