import React from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../features/store';
import { logout } from '../../features/userApi/userSlice';
import { Link } from 'react-router-dom';

const Profile = () => {
  const dispatch: AppDispatch = useDispatch();
  return (
    <div>
      <Link to={'/'} className="button" onClick={() => dispatch(logout())}>
        Logout
      </Link>
    </div>
  );
};

export default Profile;
