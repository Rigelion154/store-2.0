import React, { useState } from 'react';
import styles from './Inputs.module.scss';
import { IFormProps } from './inputTypes';
import { clearErrors } from '../../../features/userApi/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../features/store';

const InputForm = ({
  type,
  value,
  setValue,
  placeholder,
  validateFunction,
  showButton,
}: IFormProps) => {
  const [error, setError] = useState<string[]>([]);
  const dispatch: AppDispatch = useDispatch();
  const { error: requestError } = useSelector((state: RootState) => state.user);
  return (
    <div className={styles.container}>
      <div className={styles.input__wrapper}>
        <input
          className={
            error.length > 0 ? `${styles.input} ${styles.error}` : styles.input
          }
          type={type}
          required={true}
          placeholder={placeholder}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setError(validateFunction(e.target.value));
            if (requestError) dispatch(clearErrors());
          }}
        />
        {showButton}
      </div>
      {error.length > 0 && <span className={styles.message}>{error[0]}</span>}
    </div>
  );
};

export default InputForm;
