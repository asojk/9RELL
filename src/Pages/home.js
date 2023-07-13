import React from 'react';
import { Helmet } from 'react-helmet';
import Partners from '../Components/partners.js';
import Expertise from '../Components/main/expertise.js';
import Testimonials from '../Components/testi/testimonials.js';
import Badges from '../Components/main/badges.jsx';
//import Carousel1 from '../Components/main/carousel1.jsx';
import Swipe from '../Components/main/swiper.jsx';

const Home = () => (
  <div className="home-container">
    <Helmet
      title="GRELL ROOFING | Home"
      meta={[
        { name: 'description', content: 'Home page for the website.' },
        { name: 'keywords', content: 'roofing, construction, home' },
      ]}
    />
    <Swipe />
    <Badges />
    <Expertise />
    <Partners />
    <Testimonials />
  </div>
);

export default Home;
