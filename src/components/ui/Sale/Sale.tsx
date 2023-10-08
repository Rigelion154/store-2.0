import React from 'react';

import './sale.scss';
import SALE from '../../../assets/SALE.png';
import SHOE from '../../../assets/shoes.png';
import GADGET from '../../../assets/gadget.png';

const Sale = () => {
  return (
    <section className="sale">
      <div className="section sale__container">
        <div className="sale__description">
          <h2 className="sale__title">
            NEW YEAR <span>SALE</span>
          </h2>
          <button className="button sale__button">See more</button>
        </div>
        <div className="sale__img">
          <img src={SALE} alt="Sale img" />
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

export default Sale;
