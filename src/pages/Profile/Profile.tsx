import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { AppDispatch } from '../../features/store';
import { removeCart } from '../../features/cart/cartSlice';
import { logout } from '../../features/userApi/userSlice';

import { getAnonymousToken } from '../../services/Auth/getAnonymousToken';

import styles from './Profile.module.scss';

const Profile = () => {
  const dispatch: AppDispatch = useDispatch();

  const handleLogout = async () => {
    dispatch(logout());
    await getAnonymousToken();
    localStorage.removeItem('cartId');
    dispatch(removeCart());
  };

  return (
    <div className={`${styles.container} section`}>
      <Link to={'/'} className="button" onClick={handleLogout}>
        Logout
      </Link>
    </div>
  );
};

export default Profile;
