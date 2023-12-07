import React, { useState } from 'react';
import InputForm from '../FormInputs/InputForm';
import { validateEmail } from '../../../utils/validateForms/validateEmail';
import { validatePassword } from '../../../utils/validateForms/validatePassowrd';
import ShowButton from '../ShowButton/ShowButton';
import styles from './LoginForm.module.scss';

interface ILoginForm {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}

const LoginForm = ({ email, setEmail, password, setPassword }: ILoginForm) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className={styles.container}>
      <InputForm
        type="text"
        value={email}
        setValue={setEmail}
        placeholder="Email *"
        validateFunction={validateEmail}
      />
      <InputForm
        type={showPassword ? 'text' : 'password'}
        value={password}
        setValue={setPassword}
        placeholder="Password *"
        validateFunction={validatePassword}
        showButton={
          <ShowButton
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />
        }
      />
    </div>
  );
};

export default LoginForm;
