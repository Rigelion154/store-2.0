import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ROUTES } from '../../../routes/routes';

import './header.scss';
import LOGO from '../../../assets/LOGO.svg';
import { LuUserCircle2 } from 'react-icons/lu';
import { CiSearch } from 'react-icons/ci';
import { RiShoppingCart2Line } from 'react-icons/ri';

const links = [
  {
    id: 1,
    name: '',
    path: ROUTES.PROFILE,
    icon: <LuUserCircle2 size={30} />,
    callback: () => {},
  },
  {
    id: 2,
    name: '',
    path: ROUTES.CART,
    icon: <RiShoppingCart2Line size={30} />,
    count: 7,
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

      <nav>
        <ul className="nav">
          {links.map((el) => (
            <NavLink
              to={el.path}
              key={el.id}
              className={({ isActive }) =>
                isActive ? 'nav__link nav_active' : 'nav__link'
              }
            >
              <span className="nav__link-icon">{el.icon}</span>
              <span className="nav__link-title">{el.name}</span>
              {el.count && <span className="nav__link-size">{el.count}</span>}
            </NavLink>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
