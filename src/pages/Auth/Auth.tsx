import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';

import { ROUTES } from '../../routes/routes';
import { authHandler } from '../../utils/authHandler';
import { AppDispatch } from '../../features/store';
import { schema } from '../../utils/validateForms/schema';

import LoaderBar from '../../components/ui/LoaderBar/LoaderBar';
import ShowButton from '../../components/ui/ShowButton/ShowButton';
import InputForm from '../../components/ui/FormInputs/InputForm';

import styles from './Auth.module.scss';

export interface IFormData {
  firstName?: string | undefined;
  email: string;
  password: string;
}

const Auth = () => {
  const dispatch: AppDispatch = useDispatch();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<IFormData>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: IFormData) => {
    await authHandler(dispatch, pathname, data, setLoading, setError, navigate);
    reset();
  };

  return (
    <div className={`${styles.container} section`}>
      {loading ? (
        <LoaderBar />
      ) : (
        <div className={styles.container}>
          <h2>Sign In</h2>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            {pathname === ROUTES.REGISTRATION && (
              <InputForm
                register={register}
                type="text"
                placeholder="First name *"
                message={errors.firstName?.message}
                fieldName="firstName"
              />
            )}
            <InputForm
              register={register}
              type="email"
              placeholder="Email"
              message={errors.email?.message}
              fieldName="email"
            />
            <InputForm
              register={register}
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              message={errors.password?.message}
              fieldName="password"
              showButton={
                <ShowButton
                  showPassword={showPassword}
                  setShowPassword={setShowPassword}
                />
              }
            />

            <button className="button" type="submit" disabled={!isValid}>
              Submit
            </button>
            {error && <p className="error__message">{error}</p>}
          </form>
        </div>
      )}

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
