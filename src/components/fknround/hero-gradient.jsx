import React from 'react'

import PropTypes from 'prop-types'

const HeroGradient = (props) => {
  return (
    <>
      <div className="hero-gradient-hero-gradient">
        <h1 className="hero-gradient-text">{props.heading}</h1>
        <span className="hero-gradient-text1">
          <span>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              volutpat turpis.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <br></br>
          <span>
            <span>
              Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
        </span>
        <div className="hero-gradient-btn-group">
          <button className="hero-gradient-button button">
            {props.button}
          </button>
          <button className="hero-gradient-button1 button">
            {props.button1}
          </button>
        </div>
      </div>
      <style jsx>
        {`
          .hero-gradient-hero-gradient {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            position: relative;
            min-height: 80vh;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: linear-gradient(
                113.8deg,
                rgba(255, 76, 92, 0.8) 7.5%,
                rgba(255, 177, 70, 0.8) 94.47%
              ),
              url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHx3b3JrJTIwbGFwdG9wfGVufDB8fHx8MTYyNjE3NjkzMA&ixlib=rb-1.2.1&h=1200');
          }
          .hero-gradient-text {
            color: var(--dl-color-scheme-white);
            font-size: 3rem;
          }
          .hero-gradient-text1 {
            color: var(--dl-color-scheme-white);
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
          }
          .hero-gradient-btn-group {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .hero-gradient-button {
            font-size: 0.75rem;
            transition: 0.3s;
            padding-top: var(--dl-space-space-unit);
            border-width: 0px;
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            text-transform: uppercase;
          }
          .hero-gradient-button:hover {
            transform: scale(1.02);
          }
          .hero-gradient-button1 {
            color: var(--dl-color-scheme-white);
            font-size: 0.75rem;
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            padding-top: var(--dl-space-space-unit);
            border-color: var(--dl-color-scheme-white);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            text-transform: uppercase;
            background-color: transparent;
          }
          .hero-gradient-button1:hover {
            transform: scale(1.02);
          }
          @media (max-width: 991px) {
            .hero-gradient-hero-gradient {
              flex-direction: column;
            }
            .hero-gradient-text {
              text-align: center;
            }
            .hero-gradient-text1 {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .hero-gradient-hero-gradient {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .hero-gradient-hero-gradient {
              width: 100%;
              padding: var(--dl-space-space-twounits);
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .hero-gradient-btn-group {
              flex-direction: column;
            }
            .hero-gradient-button1 {
              margin-top: var(--dl-space-space-unit);
              margin-left: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

HeroGradient.defaultProps = {
  heading: "Let's keep things organized",
  button: 'Get Started',
  button1: 'Learn More',
}

HeroGradient.propTypes = {
  heading: PropTypes.string,
  button: PropTypes.string,
  button1: PropTypes.string,
}

export default HeroGradient
