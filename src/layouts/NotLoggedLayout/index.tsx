import React from 'react';
import Nav from 'components/common/Nav';
import { LayoutContainer, LayoutContent, MainLayout, MainHeader } from 'layouts';

interface NotLoggedLayoutProps {
  children: React.ReactNode;
}

export const NotLoggedLayout: React.FC<NotLoggedLayoutProps> = ({ children }) => (
  <MainLayout>
    <MainHeader>
      <Nav />
    </MainHeader>
    <LayoutContainer>
      <LayoutContent>{children}</LayoutContent>
    </LayoutContainer>
  </MainLayout>
);
