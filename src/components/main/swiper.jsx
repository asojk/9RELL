import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./swiper.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-cards';
import { EffectCards, Mousewheel, Navigation } from 'swiper/modules';
import SlideImage1 from './pics/finishedroof.webp';
import SlideImage2 from './pics/repair1.jpg';
import SlideImage3 from './pics/new-construction.jpg';
import SlideImage4 from './pics/repair2.jpg';

const Swipe = () => {
  return (
    <div className="swiper-container">
      <Swiper
        mousewheel={true}
        effect={'cards'}
        grabCursor={true}
        navigation={false}
        loop={true}
        modules={[EffectCards, Mousewheel, Navigation]}
        style={{  }}
      >
        <SwiperSlide>
          <img src={SlideImage1} alt="Slide 1" />
            <h1 className="slide-text">12 Million Square Feet Secured</h1>
            <h2 className="emoji">🏢</h2>
            <div className="card"></div>
        </SwiperSlide>
        <SwiperSlide>
        <img src={SlideImage2} alt="Slide 2" />
            <h1 className="slide-text">🌐 Across 20+ States</h1>
        </SwiperSlide>
        <SwiperSlide>
        <img src={SlideImage3} alt="Slide 3" />
            <h1 className="slide-text">⏳ Since 1985</h1>
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