// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import TestimionalCard from '../TestimionalCard/TestimionalCard';

export default function TestimionalCards() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{

          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          968: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
        }} 
        loop={true} 
        slideToClickedSlide={true}
        modules={[Pagination, Autoplay]}
        className="swiperTestimionals"
      >
        <SwiperSlide>
          <TestimionalCard />
        </SwiperSlide>

        <SwiperSlide>
          <TestimionalCard />
        </SwiperSlide>

        <SwiperSlide>
          <TestimionalCard />
        </SwiperSlide>

        <SwiperSlide>
          <TestimionalCard />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
