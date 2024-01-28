import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Card from '../Card'

import './styles.css'

const SalesSwiper = () => {
  return (
    // <Swiper
    //     effect={'coverflow'}
    //     grabCursor={true}
    //     centeredSlides={true}
    //     slidesPerView={'auto'}
    //     initialSlide={4}
    //     coverflowEffect={{
    //       rotate: 50,
    //       stretch: 0,
    //       depth: 100,
    //       modifier: 1,
    //       slideShadows: true,
    //     }}
    //     pagination={{
    //         clickable: true,
    //     }}
    //     autoplay={{
    //         delay: 3000,
    //         disableOnInteraction: false,
    //     }} 
    //     loop={true} 
    //     slideToClickedSlide={true}
    //     loopPreventsSliding={false} 
    //     modules={[EffectCoverflow, Autoplay, Pagination]}
    //     className="mySwiperCards"
    //   >
    //     {
    //         [0,1,2,3,4,5,6,7,8].map((item) => (
    //             <SwiperSlide key={item}>
    //                 <Card />
    //             </SwiperSlide>
    //         ))
    //     }
    // </Swiper>

    <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
        }} 
        pagination={{
        clickable: true,
        }}
        breakpoints={{
        580: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        830: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
        
        }}
        modules={[Pagination, Autoplay]}
        className="swiper_sale"
        >
        {
            [0,1,2,3,4,5,6,7,8].map((item) => (
                <SwiperSlide key={item}>
                    <Card />
                </SwiperSlide>
            ))
        }
    </Swiper>
  )
}

export default SalesSwiper