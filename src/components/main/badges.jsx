/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Badges = (props) => (
  <div className="badges">
    <Link to="/">
      <img alt={props.image1_alt} src={props.image1_src} className="bbb" />
    </Link>
    <Link to="/duro_last">
      <img
        alt={props.image2_alt}
        src={props.image2_src}
        className="duro-last"
      />
    </Link>
  </div>
);

Badges.defaultProps = {
  image1_src: 'assets/BBB.png',
  image1_alt: 'bbb',
  image2_src: 'assets/duro-last-elite.svg',
  image2_alt: 'duro-last',
};

Badges.propTypes = {
  image1_src: PropTypes.string,
  image1_alt: PropTypes.string,
  image2_src: PropTypes.string,
  image2_alt: PropTypes.string,
};

export default Badges;
