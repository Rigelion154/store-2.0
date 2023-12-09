import React from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../features/store';
import { logout } from '../../features/userApi/userSlice';
import { Link } from 'react-router-dom';
import { getAnonymousToken } from '../../services/Auth/getAnonymousToken';
import { removeCart } from '../../features/cart/cartSlice';

const Profile = () => {
  const dispatch: AppDispatch = useDispatch();

  const handleLogout = async () => {
    dispatch(logout());
    await getAnonymousToken();
    localStorage.removeItem('cartId');
    dispatch(removeCart());
  };

  return (
    <div>
      <Link to={'/'} className="button" onClick={handleLogout}>
        Logout
      </Link>
    </div>
  );
};

export default Profile;
