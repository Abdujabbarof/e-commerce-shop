import { Swiper, SwiperSlide } from "swiper/react"
import { Button } from "../ui/button"
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

const Hero = () => {  
  return (
    <section className='w-full bg_gradient py-[80px]'>
      <Swiper className="mySwiper">
        <SwiperSlide>
          <div className="main_container grid grid-cols-2">
            <div className="flex flex-col justify-center items-start gap-y-20 pr-[7%]">
              <div>
                <h1 className="leading-[130%] w-full text-[48px] font-bold text-background">Get the Latest Dress Models From Us</h1>
                <p className="mt-[24px] w-full text-[18px] font-light text-input">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus ullamcorper.</p>
              </div>

              <div className="flex justify-between w-full">
                <Button className="text-[18px] font-semibold text-center w-[150px]" variant={'outline'}>Shop now</Button>

                <div className="flex flex-col justify-end items-end">
                  <h2 className="text-[58px] font-bold text-background">30%</h2>
                  <h2 className="text-[58px] font-bold text-background">OFF</h2>
                </div>
              </div>
            </div>

            <div className="w-full gap-10 grid grid-cols-3">
              <div className="w-full col-start-2 col-span-2">
                <Swiper modules={[Pagination, Autoplay, Navigation]} 
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }} 
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                  }}
                  className="mySwiper max-w-[400px] w-full">
                  <SwiperSlide>
                    <img src="/cap1.JPG" alt="Hero Image" className="border-[10px] rounded-[100px] rounded-es-none" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/cap2.JPG" alt="Hero Image" className="border-[10px] rounded-[100px] rounded-es-none" />
                  </SwiperSlide>
                </Swiper>
              </div>

              <div className="flex flex-col justify-between items-center row-start-1 col-span-1">
                <Swiper modules={[Pagination, Autoplay, Navigation]} 
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }} 
                  spaceBetween={30}
                  navigation
                  className="mySwiper max-w-[400px] w-full h-[50%]">
                  <SwiperSlide className="w-full object-fill flex justify-center items-center">
                    <img src="/cap3.jpeg" alt="Hero Image" />
                  </SwiperSlide>
                  <SwiperSlide className="w-full object-cover">
                    <img src="/cap4.jpeg" alt="Hero Image" />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="main_container">
            <h1 className="max-w-[426px] w-full text-[48px] font-bold text-background">Get the Latest Dress Models From Us</h1>
            <p className="mt-[24px] max-w-[508px] w-full text-[18px] font-normal text-input">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus ullamcorper.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="main_container">
            <h1 className="max-w-[426px] w-full text-[48px] font-bold text-background">Get the Latest Dress Models From Us</h1>
            <p className="mt-[24px] max-w-[508px] w-full text-[18px] font-normal text-input">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus ullamcorper.</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Hero