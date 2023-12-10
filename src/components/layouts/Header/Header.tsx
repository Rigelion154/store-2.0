import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink, useLocation } from 'react-router-dom';

import { ROUTES } from '../../../routes/routes';
import { RootState } from '../../../features/store';

import AsideBar from '../Aside/AsideBar';

import { LuUserCircle2 } from 'react-icons/lu';
import { CiSearch } from 'react-icons/ci';
import { RiShoppingCart2Line } from 'react-icons/ri';
import { IoIosMenu } from 'react-icons/io';
import LOGO from '../../../assets/LOGO.svg';

import './header.scss';

const Header = () => {
  const { pathname } = useLocation();
  const { isAuth } = useSelector((state: RootState) => state.user);
  const { lineItems } = useSelector((state: RootState) => state.cart);
  const [isOpen, setIsOpen] = useState(false);

  const burgerHandler = () => {
    setIsOpen(!isOpen);
  };

  const asideHandler = () => {
    if (isOpen) setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to={ROUTES.HOME}>
          <img src={LOGO} alt="Logo" />
        </Link>
      </div>
      <div className={isOpen ? `header__menu open` : 'header__menu'}>
        <form className="header__form">
          <CiSearch color="var(--color-text-primary)" />
          <input
            className="header__input"
            type="text"
            placeholder="Search for anything..."
          />
        </form>

        <nav>
          <ul className="nav">
            <NavLink
              className={({ isActive }) =>
                isActive ? 'nav__link nav_active' : 'nav__link'
              }
              to={
                isAuth
                  ? ROUTES.PROFILE
                  : pathname === ROUTES.REGISTRATION
                  ? ROUTES.REGISTRATION
                  : ROUTES.LOGIN
              }
              onClick={() => {
                if (isOpen) setIsOpen(!isOpen);
              }}
            >
              <span className="nav__link-icon">
                {<LuUserCircle2 size={30} />}
              </span>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'nav__link nav_active' : 'nav__link'
              }
              to={ROUTES.CART}
              onClick={() => {
                if (isOpen) setIsOpen(!isOpen);
              }}
            >
              <span className="nav__link-icon">
                {<RiShoppingCart2Line size={30} />}
              </span>
              <span className="nav__link-size">{lineItems.length}</span>
            </NavLink>
          </ul>
        </nav>
        {isOpen && <AsideBar asideHandler={asideHandler} />}
      </div>
      <button className="burger" onClick={burgerHandler}>
        <IoIosMenu size={40} />
      </button>
    </header>
  );
};

export default Header;
