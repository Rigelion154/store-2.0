import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../routes/routes';

import LOGO from '../../../assets/LOGO.svg';
import { footerLinks } from '../../../utils/constants/footerLinks';

import './footer.scss';

const Footer = () => {
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
          {footerLinks.map((el) => (
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
