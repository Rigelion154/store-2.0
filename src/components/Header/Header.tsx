import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';

import './header.scss';
import LOGO from '../../assets/LOGO.svg';
import { LuUserCircle2 } from 'react-icons/lu';
import { RiShoppingCart2Line } from 'react-icons/ri';
import { CiSearch } from 'react-icons/ci';

const NAV_LINKS = [
  {
    id: 1,
    name: 'Profile',
    path: ROUTES.PROFILE,
    icon: <LuUserCircle2 size={25} />,
    callback: () => {},
  },
  {
    id: 2,
    name: 'Cart',
    path: ROUTES.CART,
    icon: <RiShoppingCart2Line size={25} />,
    callback: () => {},
  },
];

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to={ROUTES.HOME}>
          <img src={LOGO} alt="Logo" />
        </Link>
      </div>
      <form className="header__form">
        <CiSearch color="var(--color-text-primary)" />
        <input
          className="header__input"
          type="text"
          placeholder="Search for anything..."
        />
      </form>
      <ul className="nav">
        {NAV_LINKS.map((link) => (
          <Link className="nav__link" key={link.id} to={link.path}>
            <span className="nav__link-icon">{link.icon}</span>
            <span className="nav__link-title">{link.name}</span>
          </Link>
        ))}
      </ul>
    </header>
  );
};

export default Header;
