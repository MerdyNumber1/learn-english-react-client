import React, { Suspense } from 'react';
import { Spin } from 'antd';
import styles from './SuspenseFallback.module.sass';

interface ISuspenseFallbackProps {
  children: React.ReactNode;
}

const Fallback: React.FC = () => (
  <div className={styles.container}>
    <Spin size="large" />
  </div>
);

const SuspenseFallback: React.FC<ISuspenseFallbackProps> = ({ children }) => (
  <Suspense fallback={<Fallback />}>{children}</Suspense>
);

export default SuspenseFallback;
