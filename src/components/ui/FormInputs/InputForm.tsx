import React, { useState } from 'react';
import styles from './Inputs.module.scss';
import { IFormProps } from './inputTypes';

const InputForm = ({
  type,
  value,
  setValue,
  placeholder,
  validateFunction,
  showButton,
}: IFormProps) => {
  const [error, setError] = useState<string[]>([]);
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
          }}
        />
        {showButton}
      </div>
      {error.length > 0 && <span className={styles.message}>{error[0]}</span>}
    </div>
  );
};

export default InputForm;
