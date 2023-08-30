import React from 'react'

import PropTypes from 'prop-types'

import PrimaryPinkButton from './primary-pink-button'
import OutlineGrayButton from './outline-gray-button'
import './hero.css'

const Hero = (props) => {
  return (
    <div className="hero-hero">
            <img alt="image" src="/curved6-1500h.jpg" className="home-image" />
      <div className="hero-container">
        <div className="hero-card">
          <h1 className="hero-text HeadingOne">{props.heading}</h1>
          <h1 className="hero-text1 HeadingOne">{props.heading1}</h1>
          <span className="hero-text2 Lead">
            <span>
              Find the story of Creative Tim&apos;s most complex design
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              system and all the work that make this design available.
            </span>
          </span>
          <div className="hero-container1">
            <div className="hero-container2">
              <PrimaryPinkButton button="contact us"></PrimaryPinkButton>
            </div>
            <OutlineGrayButton button="read more"></OutlineGrayButton>
          </div>
          <div className="hero-container3">
            <img
              alt={props.image_alt}
              src={props.image_src}
              className="hero-image"
            />
            <img
              alt={props.image_alt1}
              src={props.image_src1}
              className="hero-image1"
            />
            <img
              alt={props.image_alt2}
              src={props.image_src2}
              className="hero-image2"
            />
            <img
              alt={props.image_alt3}
              src={props.image_src3}
              className="hero-image3"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

Hero.defaultProps = {
  heading: 'Soft Design System.',
  heading1: 'Choose the best',
  image_src:
    'https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/gray-logos/logo-pinterest.svg',
  image_alt: 'image',
  image_src1:
    'https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/gray-logos/logo-netflix.svg',
  image_alt1: 'image',
  image_src2:
    'https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/gray-logos/logo-coinbase.svg',
  image_alt2: 'image',
  image_src3:
    'https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/gray-logos/logo-nasa.svg',
  image_alt3: 'image',
}

Hero.propTypes = {
  heading: PropTypes.string,
  heading1: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt1: PropTypes.string,
  image_src2: PropTypes.string,
  image_alt2: PropTypes.string,
  image_src3: PropTypes.string,
  image_alt3: PropTypes.string,
}

export default Hero