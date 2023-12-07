import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../features/store';
import styles from './Login.module.scss';
import LoginForm from '../../ui/LoginForm/LoginForm';
import { useNavigate } from 'react-router-dom';
import { userSignIn } from '../../../features/userApi/loginThunk';
import { AxiosError } from 'axios';
import LoaderBar from '../../ui/LoaderBar/LoaderBar';

const Login = () => {
  const dispatch: AppDispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.user);
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(userSignIn({ email, password }))
      .unwrap()
      .then(() => {
        navigate('/');
      })
      .catch((responseError) => {
        if (responseError instanceof AxiosError) {
          setError(responseError.response?.data.message);
        }
      });
  };

  return (
    <>
      {loading ? (
        <LoaderBar />
      ) : (
        <div className={styles.container}>
          <h2>Sign In</h2>
          <form className={styles.form} onSubmit={(e) => handleSignIn(e)}>
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
    </>
  );
};

export default Login;
