import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../routes/routes';

import { FaTelegram } from 'react-icons/fa6';
import { BsDiscord } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';

import './footer.scss';
import LOGO from '../../../assets/LOGO.svg';

const Footer = () => {
  const links = [
    {
      id: 1,
      name: 'Telegram',
      path: 'https://t.me/Rigelion154',
      icon: <FaTelegram size={30} />,
    },
    {
      id: 21,
      name: 'Discord',
      path: 'https://discordapp.com/users/580826430804459533/',
      icon: <BsDiscord size={30} />,
    },
    {
      id: 3,
      name: 'Github',
      path: 'https://github.com/Rigelion154/',
      icon: <AiFillGithub size={30} />,
    },
  ];

  return (
    <footer className="footer">
      <div className="footer__container section">
        <div className="footer__logo">
          <Link to={ROUTES.HOME}>
            <img src={LOGO} alt="Logo" />
          </Link>
        </div>
        <div className="footer__copyright">
          Developed by{' '}
          <Link
            to="https://github.com/Rigelion154"
            className="footer__link"
            target="_blank"
          >
            Rigelion
          </Link>
        </div>
        <ul className="footer__social">
          {links.map((el) => (
            <li className="footer__social-link" key={el.id}>
              <Link to={el.path} target="_blank">
                {el.icon}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
