import React, { Suspense } from 'react';
import { useMount, useUnmount } from '@umijs/hooks';
import { Spin } from 'antd';
import NProgress from 'nprogress';
import styles from './SuspenseFallback.module.sass';

interface SuspenseFallbackProps {
  children: React.ReactNode;
}

const Fallback: React.FC = () => {
  useMount(NProgress.start);
  useUnmount(NProgress.done);

  return (
    <div className={styles.container}>
      <Spin size="large" />
    </div>
  );
};

const SuspenseFallback: React.FC<SuspenseFallbackProps> = ({ children }) => (
  <Suspense fallback={<Fallback />}>{children}</Suspense>
);

export default SuspenseFallback;
