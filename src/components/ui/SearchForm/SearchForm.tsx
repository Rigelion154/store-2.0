import React from 'react';
import { CiSearch } from 'react-icons/ci';
import styles from './SearchForm.module.scss';

const SearchForm = () => {
  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        console.log('search submit');
      }}
    >
      <button type="submit" className={styles.button}>
        <CiSearch color="var(--color-text-primary)" size={25} />
      </button>
      <input
        className={styles.input}
        type="text"
        placeholder="Search for anything..."
      />
    </form>
  );
};

export default SearchForm;
