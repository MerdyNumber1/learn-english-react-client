import React, { Suspense } from 'react';
import { useMount, useUnmount } from '@umijs/hooks';
import { Spin } from 'antd';
import NProgress from 'nprogress';
import styled from 'styled-components';

export const Fallback: React.VFC = () => {
  useMount(NProgress.start);
  useUnmount(NProgress.done);

  return (
    <FallbackContainer>
      <Spin size="large" />
    </FallbackContainer>
  );
};

const SuspenseFallback: React.FC = ({ children }) => (
  <Suspense fallback={<Fallback />}>{children}</Suspense>
);

export const FallbackContainer = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default SuspenseFallback;
