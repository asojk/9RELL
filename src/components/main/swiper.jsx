import React from 'react';
import './swiper.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';

import SlideImage1 from './pics/finishedroof.jpg';
import SlideImage2 from './pics/repair1.jpg';
import SlideImage3 from './pics/new-construction.jpg';
import SlideImage4 from './pics/repair2.jpg';
import Heading from './heading';

const Swipe = () => {
  return (
    <div className="swiper-container">
      <Swiper
      mousewheel
      effect="cards"
      grabCursor
      loop
      modules={[EffectCards, Mousewheel]}
      style={{}}
    >
      <SwiperSlide>
        <img src={SlideImage1} alt="Slide 1" />
        <div className="slide-text1">
          <Heading />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={SlideImage2} alt="Slide 2" />
        <h1 className="slide-text">12 Million Square Feet Secured</h1>
      </SwiperSlide>
      <SwiperSlide>
        <img src={SlideImage3} alt="Slide 3" />
        <h1 className="slide-text">🌐 Across 20+ States</h1>
      </SwiperSlide>
      <SwiperSlide>
        <img src={SlideImage4} alt="Slide 4" />
        <h1 className="slide-text">⏳ Since 1985</h1>
      </SwiperSlide>
    </Swiper>
  </div>
  );
};

export default Swipe;
