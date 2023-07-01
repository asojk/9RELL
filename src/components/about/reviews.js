import React from 'react'

import PropTypes from 'prop-types'

import Article from './article.js'
import './reviews.css'

const Reviews = (props) => {
  return (
    <section className="reviews-reviews">
      <header className="reviews-header">
        <span className="section-head">{props.Section}</span>
        <h2 className="reviews-heading section-heading">{props.Heading}</h2>
      </header>
      <main className="reviews-cards">
        <Article rootClassName="article-root-class-name"></Article>
        <Article
          Header="techeu"
          SpecialHeader="eu"
          rootClassName="article-root-class-name"
        ></Article>
        <Article
          Header="sifted/"
          rootClassName="article-root-class-name"
        ></Article>
      </main>
    </section>
  )
}

Reviews.defaultProps = {
  Section: 'Articles about us',
  Heading: 'We’re the app on everyone’s lips',
}

Reviews.propTypes = {
  Section: PropTypes.string,
  Heading: PropTypes.string,
}

export default Reviews
