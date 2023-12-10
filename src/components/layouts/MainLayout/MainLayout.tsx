import React from 'react';
import { Outlet } from 'react-router-dom';
import AsideBar from '../Aside/AsideBar';
import styles from './MainContent.module.scss';

const MainLayout = () => (
  <div className={styles.container}>
    <div className={styles.aside}>
      <AsideBar />
    </div>
    <Outlet />
  </div>
);

export default MainLayout;
