import React from 'react';
import styles from './LoaderBar.module.scss';

function LoaderBar() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Loading...</h2>
      <div className={styles.loader} />
    </div>
  );
}

export default LoaderBar;
