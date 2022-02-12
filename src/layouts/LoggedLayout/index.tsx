import React, { useState } from 'react';
import { useMount, useSize } from '@umijs/hooks';
import { Layout } from 'antd';
import { Nav } from 'components/common/Nav';
import { SidebarMenu } from 'components/common/SidebarMenu';
import { LayoutContent } from 'layouts/LayoutContent';
import { LayoutWrapper } from 'layouts/LayoutWrapper';
import { useUser } from 'hooks/useUser';
import styled from 'styled-components';

const { Header, Sider } = Layout;

export const LoggedLayout: React.FC = ({ children }) => {
  const [size] = useSize(document.body);
  const [isCollapsed, setIsCollapsed] = useState(size.width! < 800);
  const { getCurrentUser } = useUser();

  useMount(getCurrentUser);

  const isMobileSiderVisible = !isCollapsed && size.width! < 800;

  return (
    <Layout>
      <Header>
        <Nav
          onSiderCollapse={() => {
            setIsCollapsed((prev) => !prev);
          }}
        />
      </Header>
      <LayoutWrapper
        style={{
          height: isMobileSiderVisible ? 'calc(100vh - 64px)' : 'auto',
          overflowY: isMobileSiderVisible ? 'hidden' : 'auto',
        }}
      >
        {!isCollapsed && (
          <SiderWrapper width={200}>
            <SidebarMenu onMenuItemClick={() => size.width! < 800 && setIsCollapsed(true)} />
          </SiderWrapper>
        )}
        <Layout>
          <LayoutContent>{children}</LayoutContent>
        </Layout>
      </LayoutWrapper>
    </Layout>
  );
};

const SiderWrapper = styled(Sider)`
  @media (max-width: 800px) {
    z-index: 1000;
    position: absolute;
    top: 64px;
    left: 0;
    height: calc(100vh - 64px);
    width: 100vh;
  }
`;
