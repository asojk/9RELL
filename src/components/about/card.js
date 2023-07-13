import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ rootClassName, Header, Description }) => (
  <section className={`card-card ${rootClassName} `}>
    <div className="card-icon">
      <img
        alt="Erica Grell"
        src="assets/grell/erica.jpg"
        className="card-icon1"
      />
    </div>
    <main className="card-content">
      <h1 className="card-header">{Header}</h1>
      <p className="card-description">{Description}</p>
    </main>
  </section>
);

Card.defaultProps = {
  Description:
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium',
  rootClassName: '',
  Header: 'Erica Grell',
};

Card.propTypes = {
  Description: PropTypes.string,
  rootClassName: PropTypes.string,
  Header: PropTypes.string,
};

export default Card;
