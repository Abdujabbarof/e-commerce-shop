// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';

import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import Card from '../Card';

export default function SwiperCompoent() {    
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        initialSlide={4}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
            clickable: true,
        }}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
        }} 
        loop={true} 
        slideToClickedSlide={true}
        loopPreventsSliding={false} 
        modules={[EffectCoverflow, Autoplay,Pagination]}
        className="mySwiperCards"
      >
        {
            [0,1,2,3,4,5,6,7,8].map((item) => (
                <SwiperSlide key={item}>
                  <Card />
                </SwiperSlide>
            ))
        }
      </Swiper>
    </>
  );
}
