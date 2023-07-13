/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';

const Her = (props) => (
  <section className="her-her">
    <div className="her-her1">
      <div className="her-content">
        <main className="her-main">
          <header className="her-header">
            <h1 className="her-heading">{props.Heading}</h1>
            <span className="her-caption">{props.Caption1}</span>
          </header>
          <div className="her-buttons">
            <div className="her-get-started button">
              <span className="her-text">{props.Text}</span>
            </div>
            <div className="her-get-started1 button">
              <span className="her-text1">{props.Text1}</span>
            </div>
          </div>
        </main>
        <div className="her-highlight">
          <div className="her-avatars">
            <img
              alt={props.Image_alt}
              src={props.Image_src}
              className="her-image avatar"
            />
            <img
              alt={props.Image_alt1}
              src={props.Image_src1}
              className="her-image1 avatar"
            />
            <img
              alt={props.image_alt2}
              src={props.image_src2}
              className="her-image2 avatar"
            />
          </div>
          <label className="her-caption1">{props.Caption}</label>
        </div>
      </div>
      <div className="her-image3">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="her-image4"
        />
      </div>
      <div className="her-image5">
        <img
          alt={props.image_alt1}
          src={props.image_src1}
          className="her-image6"
        />
      </div>
    </div>
  </section>
);

Her.defaultProps = {
  image_src: 'assets/grell/Tagged.png',
  image_alt: 'image',
  image_src1: 'assets/grell/Tagged.png',
  image_alt1: 'image',
  Caption: 'Loved by 10,000+ people like you.',
  Heading: 'The fastest way to make a doctor appointment',
  Caption1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  Image_src:
    'https://images.unsplash.com/photo-1552234994-66ba234fd567?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fHBvdHJhaXR8ZW58MHx8fHwxNjY3MjQ0ODcx&ixlib=rb-4.0.3&w=200',
  Image_alt: 'image',
  Image_src1:
    'https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHBvdHJhaXR8ZW58MHx8fHwxNjY3MjQ0ODcx&ixlib=rb-4.0.3&w=200',
  Image_alt1: 'image',
  image_src2:
    'https://images.unsplash.com/photo-1618151313441-bc79b11e5090?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxwb3RyYWl0fGVufDB8fHx8MTY2NzI0NDg3MQ&ixlib=rb-4.0.3&w=200',
  image_alt2: 'image',
  Text: 'Get started',
  Text1: 'View features',
};

Her.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt1: PropTypes.string,
  Caption: PropTypes.string,
  Heading: PropTypes.string,
  Caption1: PropTypes.string,
  Image_src: PropTypes.string,
  Image_alt: PropTypes.string,
  Image_src1: PropTypes.string,
  Image_alt1: PropTypes.string,
  image_src2: PropTypes.string,
  image_alt2: PropTypes.string,
  Text: PropTypes.string,
  Text1: PropTypes.string,
};

export default Her;
