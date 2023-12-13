import React from 'react';
import styles from './Inputs.module.scss';
import { UseFormRegister } from 'react-hook-form';

type FormData = {
  firstName?: string | undefined;
  email: string;
  password: string;
};

const InputForm = ({
  register,
  type,
  placeholder,
  showButton,
  message,
  fieldName,
}: {
  register: UseFormRegister<FormData>;
  type: string;
  placeholder: string;
  showButton?: React.ReactNode;
  message: string | undefined;
  fieldName: 'firstName' | 'email' | 'password';
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.input__wrapper}>
        <input
          {...register(fieldName)}
          placeholder={placeholder}
          type={type}
          className={message ? `${styles.input} ${styles.error}` : styles.input}
          required
        />
        {showButton}
      </div>
      <p className="error__message">{message}</p>
    </div>
  );
};

export default InputForm;
