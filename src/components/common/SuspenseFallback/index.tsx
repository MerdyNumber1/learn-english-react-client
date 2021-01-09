import React, { Suspense } from 'react';
import { Spin } from 'antd';
import styles from './SuspenseFallback.module.sass';

interface ISuspenseFallback {
  children: React.ReactChild;
}

const Fallback: React.FC = (): React.ReactElement => (
  <div className={styles.container}>
    <Spin size="large" />
  </div>
);

const SuspenseFallback = ({ children }: ISuspenseFallback): React.ReactElement => (
  <Suspense fallback={<Fallback />}>{children}</Suspense>
);

export default SuspenseFallback;
