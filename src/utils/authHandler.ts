import { ROUTES } from '../routes/routes';
import { UserSignUp } from '../services/Auth/userSignUp';
import { getUserToken } from '../services/Auth/getUserToken';
import { userSignIn } from '../services/Auth/userSignIn';
import { getActiveCarts } from '../services/cart/getCarts';
import { AppDispatch } from '../features/store';
import { IFormData } from '../pages/Auth/Auth';
import { AxiosError } from 'axios';
import React from 'react';
import { NavigateFunction } from 'react-router-dom';

export const authHandler = async (
  dispatch: AppDispatch,
  pathname: string,
  data: IFormData,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setError: React.Dispatch<React.SetStateAction<string>>,
  navigate: NavigateFunction,
) => {
  try {
    setLoading(true);
    if (pathname === ROUTES.REGISTRATION) {
      await UserSignUp(data.firstName as string, data.email, data.password);
      await getUserToken(data.email, data.password);
      await dispatch(
        userSignIn({ email: data.email, password: data.password }),
      );
    }

    if (pathname === ROUTES.LOGIN) {
      await dispatch(
        userSignIn({ email: data.email, password: data.password }),
      );
      await getUserToken(data.email, data.password);
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
