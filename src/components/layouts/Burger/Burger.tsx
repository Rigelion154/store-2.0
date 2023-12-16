import React from 'react';
import AsideBar from '../Aside/AsideBar';
import SearchForm from '../../ui/SearchForm/SearchForm';
import HeaderNav from '../../ui/HeaderNav/HeaderNav';
import styles from './Burger.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../../features/store';

const Burger = () => {
  const { isOpen } = useSelector((state: RootState) => state.user);
  return (
    <div className={`${styles.container} ${isOpen && styles.open}`}>
      <SearchForm />
      <HeaderNav />
      <AsideBar />
    </div>
  );
};

export default Burger;
