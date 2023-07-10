import React from 'react'
import PropTypes from 'prop-types'

const Cube = (props) => {
  return (
    <section className="cube-cube">
      <div className="cube-cube1">
        <div className="cube-top side"></div>
        <div className="cube-front side"></div>
        <div className="cube-left side"></div>
      </div>
      <main className="cube-banner">
        <div className="cube-header">
          <h2 className="section-heading">{props.Heading}</h2>
          <p className="cube-description section-description">
            {props.Description}
          </p>
        </div>
        <div className="cube-buttons">
          <div className="cube-get-started button">
            <span className="cube-text">{props.Text}</span>
          </div>
          <div className="cube-book-demo button">
            <span className="cube-text1">{props.Text1}</span>
          </div>
        </div>
      </main>
    </section>
  )
}

Cube.defaultProps = {
  Heading: 'Planical makes online doctor visits easier',
  Description: 'Lorem ipsum dolor sit amet!',
  Text: 'Get started',
  Text1: 'Book a demo',
}

Cube.propTypes = {
  Heading: PropTypes.string,
  Description: PropTypes.string,
  Text: PropTypes.string,
  Text1: PropTypes.string,
}

export default Cube
