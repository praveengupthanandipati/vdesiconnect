import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import ban01 from '../assets/homeban01.jpg';
import ban02 from '../assets/homeban02.jpg';
import ban03 from '../assets/homeban03.jpg';

const slides = [
  { img: ban01, alt: 'Banner 1' },
  { img: ban02, alt: 'Banner 2' },
  { img: ban03, alt: 'Banner 3' },
];

const Homehero = () => {
  return (
    <section className="homehero">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        loop
        speed={900}
        className="homehero__swiper"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="homehero__slide">
              <img src={slide.img} alt={slide.alt} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Homehero;
