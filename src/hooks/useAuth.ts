import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';

import { AppDispatch } from '../features/store';
import { ROUTES } from '../routes/routes';

import { userSignIn } from '../services/Auth/userSignIn';
import { getUserToken } from '../services/Auth/getUserToken';
import { UserSignUp } from '../services/Auth/userSignUp';
import { getActiveCarts } from '../services/cart/getCarts';

export const useAuth = (
  email: string,
  password: string,
  pathname: string,
  firstName: string,
) => {
  const dispatch: AppDispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const fetchingAuth = async () => {
    try {
      setLoading(true);
      if (pathname === ROUTES.REGISTRATION) {
        await UserSignUp(firstName, email, password);
        await getUserToken(email, password);
        await dispatch(userSignIn({ email, password }));
      }

      if (pathname === ROUTES.LOGIN) {
        await dispatch(userSignIn({ email, password }));
        await getUserToken(email, password);
      }
      await dispatch(getActiveCarts());
      setLoading(false);
      navigate('/');
    } catch (e) {
      if (e instanceof AxiosError) {
        setError(e.response?.data.message);
      }
    }
    setLoading(false);
  };

  return { loading, error, fetchingAuth };
};
