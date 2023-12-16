import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { ROUTES } from '../../../routes/routes';
import { AppDispatch, RootState } from '../../../features/store';

import { IoIosMenu, IoMdClose } from 'react-icons/io';
import LOGO from '../../../assets/LOGO.svg';

import './header.scss';
import { setIsOpen } from '../../../features/userApi/userSlice';
import SearchForm from '../../ui/SearchForm/SearchForm';
import HeaderNav from '../../ui/HeaderNav/HeaderNav';

const Header = () => {
  const dispatch: AppDispatch = useDispatch();
  const { isOpen } = useSelector((state: RootState) => state.user);
  const burgerHandler = () => {
    dispatch(setIsOpen());
  };

  return (
    <header className={`header ${isOpen && 'open'}`}>
      <div className="logo">
        <Link to={ROUTES.HOME}>
          <img src={LOGO} alt="Logo" />
        </Link>
      </div>
      <div className="header__menu">
        <SearchForm />
        <HeaderNav />
      </div>
      <button className="burger" onClick={burgerHandler}>
        {isOpen ? <IoMdClose size={40} /> : <IoIosMenu size={40} />}
      </button>
    </header>
  );
};

export default Header;
