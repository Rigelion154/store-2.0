import React from 'react';

import './sale.scss';
import SALE from '../../../assets/SALE.png';
import SHOE from '../../../assets/shoes.png';
import GADGET from '../../../assets/gadget.png';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../routes/routes';

const SaleBar = () => {
  return (
    <section className="sale">
      <div className="section sale__container">
        <div className="sale__description">
          <h2 className="sale__title">
            NEW YEAR <span>SALE</span>
          </h2>
          <Link to={ROUTES.SALE} className="button sale__button">
            See more
          </Link>
        </div>
        <div className="sale__img">
          <img src={SALE} alt="SaleBar img" />
        </div>
        <div className="sale__img-shoe">
          <img src={SHOE} alt="Shoe" />
        </div>
        <div className="sale__img-gadget">
          <img src={GADGET} alt="Gadget" />
        </div>
      </div>
    </section>
  );
};

export default SaleBar;
