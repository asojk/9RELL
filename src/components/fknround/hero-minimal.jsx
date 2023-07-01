import React from 'react'

import PropTypes from 'prop-types'

const HeroMinimal = (props) => {
  return (
    <>
      <div className="hero-minimal-hero-minimal">
        <div className="hero-minimal-container">
          <h1 className="hero-minimal-text">{props.heading}</h1>
          <span className="hero-minimal-text1">
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
          <button className="hero-minimal-button button">{props.button}</button>
        </div>
      </div>
      <style jsx>
        {`
          .hero-minimal-hero-minimal {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            position: relative;
            min-height: 80vh;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-color: #d9d9d9;
            background-image: url('https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDV8fGxhbXAlMjBtaW5pbWFsaXNtfGVufDB8fHx8MTYyNjE2NDMxOA&ixlib=rb-1.2.1&h=1200');
            background-position: bottom;
          }
          .hero-minimal-container {
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .hero-minimal-text {
            font-size: 3rem;
            max-width: 25rem;
          }
          .hero-minimal-text1 {
            font-size: 1.15rem;
            max-width: 60%;
            margin-top: var(--dl-space-space-threeunits);
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .hero-minimal-button {
            color: var(--dl-color-scheme-white);
            font-style: normal;
            text-align: center;
            transition: 0.3s;
            font-weight: 400;
            padding-top: var(--dl-space-space-unit);
            border-width: 0px;
            margin-right: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-scheme-black);
          }
          .hero-minimal-button:hover {
            transform: scale(1.02);
          }
          @media (max-width: 767px) {
            .hero-minimal-hero-minimal {
              align-items: center;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .hero-minimal-text {
              text-align: center;
            }
            .hero-minimal-text1 {
              max-width: 100%;
              text-align: center;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
          }
          @media (max-width: 479px) {
            .hero-minimal-hero-minimal {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .hero-minimal-text1 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .hero-minimal-button {
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

HeroMinimal.defaultProps = {
  heading: "Let's keep things organised",
  button: 'Get Started',
}

HeroMinimal.propTypes = {
  heading: PropTypes.string,
  button: PropTypes.string,
}

export default HeroMinimal
