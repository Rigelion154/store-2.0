import React, { useState } from 'react';
import styles from '../Login/Login.module.scss';
import { AppDispatch, RootState } from '../../../features/store';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from '../../ui/LoginForm/LoginForm';
import InputForm from '../../ui/FormInputs/InputForm';
import { validateNames } from '../../../utils/validateForms/validateName';
import { userSignUp } from '../../../features/userApi/userSlice';
import { userSignIn } from '../../../features/userApi/loginThunk';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import LoaderBar from '../../ui/LoaderBar/LoaderBar';

const Registration = () => {
  const dispatch: AppDispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.user);
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setName] = useState('');
  const navigate = useNavigate();

  const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(userSignUp({ firstName, email, password }))
      .unwrap()
      .then(() => {
        dispatch(userSignIn({ email, password }))
          .unwrap()
          .then(() => {
            navigate('/');
          })
          .catch((loginError) => {
            if (loginError instanceof AxiosError) {
              setError(loginError.response?.data.message);
            }
          });
      })
      .catch((registrationError) => {
        if (registrationError instanceof AxiosError) {
          setError(registrationError.response?.data.message);
        }
      });
  };

  return (
    <>
      {loading ? (
        <LoaderBar />
      ) : (
        <div className={styles.container}>
          <h2>Sign Up</h2>
          <form className={styles.form} onSubmit={(e) => handleSignUp(e)}>
            <InputForm
              type="text"
              value={firstName}
              setValue={setName}
              placeholder="Name *"
              validateFunction={validateNames}
            />
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

export default Registration;
