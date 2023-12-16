import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ROUTES } from '../../../routes/routes';
import { LuUserCircle2 } from 'react-icons/lu';
import { RiShoppingCart2Line } from 'react-icons/ri';
import { setIsOpen } from '../../../features/userApi/userSlice';
import { AppDispatch, RootState } from '../../../features/store';
import { useDispatch, useSelector } from 'react-redux';
import styles from './HeaderNav.module.scss';

const HeaderNav = () => {
  const { pathname } = useLocation();
  const dispatch: AppDispatch = useDispatch();
  const { isAuth, isOpen } = useSelector((state: RootState) => state.user);
  const { lineItems } = useSelector((state: RootState) => state.cart);

  const burgerHandler = () => {
    if (isOpen) dispatch(setIsOpen());
  };

  return (
    <nav>
      <ul className={styles.nav}>
        <NavLink
          className={({ isActive }) =>
            `${styles.link} ${isActive && styles.link_active}`
          }
          to={
            isAuth
              ? ROUTES.PROFILE
              : pathname === ROUTES.REGISTRATION
              ? ROUTES.REGISTRATION
              : ROUTES.LOGIN
          }
          onClick={burgerHandler}
        >
          <span className={styles.icon}>{<LuUserCircle2 size={30} />}</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.link_active}` : styles.link
          }
          to={ROUTES.CART}
          onClick={burgerHandler}
        >
          <span className={styles.icon}>
            {<RiShoppingCart2Line size={30} />}
          </span>
          <span className={styles.cart__size}>{lineItems.length}</span>
        </NavLink>
      </ul>
    </nav>
  );
};

export default HeaderNav;
