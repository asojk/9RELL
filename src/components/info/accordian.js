import React from 'react'

import PropTypes from 'prop-types'

import Accordion from './accordion.js'
import './accordian.css'

const Accordian = (props) => {
  return (
    <section className="accordian-accordian">
      <div className="accordian-note">
        <div className="accordian-image">
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="accordian-image1"
          />
        </div>
        <div className="accordian-content">
          <div className="accordian-caption">
            <span className="section-head">{props.Section}</span>
          </div>
          <div className="accordian-heading">
            <div className="accordian-header">
              <h2 className="section-heading">{props.Heading}</h2>
            </div>
            <Accordion rootClassName="accordion-root-class-name"></Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}

Accordian.defaultProps = {
  image_src: '/SectionImages/iphone%2014%20pro%20max-1200w.png',
  image_alt: 'image',
  Section: 'Tempor incididunt',
  Heading: 'Tips to get care, answers and advice faster',
}

Accordian.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  Section: PropTypes.string,
  Heading: PropTypes.string,
}

export default Accordian
