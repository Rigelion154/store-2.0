import React from 'react';
import styles from './ShowButton.module.scss';

interface IShowButton {
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
}

const ShowButton = ({ showPassword, setShowPassword }: IShowButton) => {
  return (
    <button
      className={styles.button}
      type="button"
      onClick={() => setShowPassword(!showPassword)}
    >
      {showPassword ? 'hide' : 'show'}
    </button>
  );
};

export default ShowButton;
