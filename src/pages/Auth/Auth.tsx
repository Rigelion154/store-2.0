import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { ROUTES } from '../../routes/routes';
import { useAuth } from '../../hooks/useAuth';
import { validateNames } from '../../utils/validateForms/validateName';

import LoaderBar from '../../components/ui/LoaderBar/LoaderBar';
import LoginForm from '../../components/ui/LoginForm/LoginForm';
import InputForm from '../../components/ui/FormInputs/InputForm';

import styles from './Auth.module.scss';

const Auth = () => {
  const { pathname } = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setName] = useState('');
  const { loading, error, fetchingAuth } = useAuth(
    email,
    password,
    pathname,
    firstName,
  );

  return (
    <div className={`${styles.container} section`}>
      {loading ? (
        <LoaderBar />
      ) : (
        <div className={styles.container}>
          <h2>Sign In</h2>
          <form className={styles.form} onSubmit={fetchingAuth}>
            {pathname === ROUTES.REGISTRATION && (
              <InputForm
                type="text"
                value={firstName}
                setValue={setName}
                placeholder="Name *"
                validateFunction={validateNames}
              />
            )}
            <LoginForm
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
            />
            <button className="button" type="submit">
              Submit
            </button>
            {error && <p>{error}</p>}
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
