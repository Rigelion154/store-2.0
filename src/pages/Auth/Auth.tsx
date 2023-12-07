import React from 'react';
import styles from './Auth.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';

interface IChildren {
  children: React.ReactNode;
}

const Auth = ({ children }: IChildren) => {
  const { pathname } = useLocation();
  return (
    <div className={`${styles.container} section`}>
      {children}
      <div>
        {pathname === ROUTES.REGISTRATION && (
          <span>Do you have an account?</span>
        )}
        {pathname === ROUTES.LOGIN && <span>Don&apos;t have an account?</span>}
        <Link
          className={styles.link}
          to={
            pathname === ROUTES.REGISTRATION
              ? ROUTES.LOGIN
              : ROUTES.REGISTRATION
          }
        >
          {pathname === ROUTES.REGISTRATION ? 'Login' : 'Register'}
        </Link>
      </div>
    </div>
  );
};

export default Auth;
