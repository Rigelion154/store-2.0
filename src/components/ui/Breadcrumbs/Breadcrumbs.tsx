import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import styles from './Breadcrumbs.module.scss';

const Breadcrumbs = () => {
  const location = useLocation();

  const crumbs = location.pathname
    .trim()
    .split('/')
    .filter((el) => el !== '');
  console.log(location.pathname);
  console.log(crumbs);
  return (
    <div className={styles.container}>
      {crumbs.map((link) => (
        <Link className={styles.link} to={link} key={link}>
          {link}
        </Link>
      ))}
    </div>
  );
};

export default Breadcrumbs;
