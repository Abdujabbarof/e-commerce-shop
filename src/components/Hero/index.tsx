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
      <Swiper modules={[Pagination, Autoplay, Navigation]} 
            autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }} 
          spaceBetween={30}
          className="mySwiper">
        <SwiperSlide>
          <div className="main_container max-w-[708px] lg:max-w-[1280px] flex flex-col gap-y-10 lg:flex-row justify-between gap-[7%]">
            <div className="flex flex-col justify-center items-start gap-y-[50px] col-span-3">
              <div>
                <h1 className="leading-[130%] text-center lg:text-start w-full text-[34px] sm:text-[48px] font-bold text-background">Get the Latest Dress Models From Us</h1>
                <p className="mt-[24px] w-full text-center lg:text-start text-[18px] font-light text-input">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus ullamcorper.</p>
              </div>

              <div className="flex justify-between w-full">
                <Button className="text-[18px] rounded-none font-semibold text-center w-[180px] border-2 text-background p-[22px]" variant={'ghost'}>Shop now</Button>

                <div className="flex flex-col justify-end items-end">
                  <h2 className="text-[40px] sm:text-[58px] leading-[100%] font-bold text-background">30%</h2>
                  <h2 className="text-[40px] sm:text-[58px] leading-[100%] font-bold text-background">OFF</h2>
                </div>
              </div>
            </div>

              <div className="flex justify-center items-center">
                <Swiper modules={[Pagination, Autoplay, Navigation]} 
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }} 
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                  }}
                  className="mySwiper max-w-[400px]">
                  <SwiperSlide>
                    <img src="/cap1.JPG" alt="Hero Image" className="border-[10px] mx-auto w-[300px] h-[391px] sm:w-[400px] sm:h-[522px] object-cover rounded-[100px] rounded-es-none" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/cap2.JPG" alt="Hero Image" className="border-[10px] mx-auto w-[300px] h-[391px] sm:w-[400px] sm:h-[522px] object-cover rounded-[100px] rounded-es-none" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/cap3.jpeg" alt="Hero Image" className="border-[10px] mx-auto w-[300px] h-[391px] sm:w-[400px] sm:h-[522px] object-cover rounded-[100px] rounded-es-none" />
                  </SwiperSlide>
                </Swiper>
              </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="main_container max-w-[708px] lg:max-w-[1280px] flex flex-col gap-y-10 lg:flex-row justify-between gap-[7%]">
            <div className="flex flex-col justify-center items-start gap-y-[50px] col-span-3">
              <div>
                <h1 className="leading-[130%] text-center lg:text-start w-full text-[34px] sm:text-[48px] font-bold text-background">Get the Latest Dress Models From Us</h1>
                <p className="mt-[24px] w-full text-center lg:text-start text-[18px] font-light text-input">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus ullamcorper.</p>
              </div>

              <div className="flex justify-between w-full">
                <Button className="text-[18px] rounded-none font-semibold text-center w-[180px] border-2 text-background p-[22px]" variant={'ghost'}>Shop now</Button>

                <div className="flex flex-col justify-end items-end">
                  <h2 className="text-[40px] sm:text-[58px] leading-[100%] font-bold text-background">30%</h2>
                  <h2 className="text-[40px] sm:text-[58px] leading-[100%] font-bold text-background">OFF</h2>
                </div>
              </div>
            </div>

              <div className="flex justify-center items-center">
                <Swiper modules={[Pagination, Autoplay, Navigation]} 
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }} 
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                  }}
                  className="mySwiper max-w-[400px]">
                  <SwiperSlide>
                    <img src="/cap1.JPG" alt="Hero Image" className="border-[10px] mx-auto w-[300px] h-[391px] sm:w-[400px] sm:h-[522px] object-cover rounded-[100px] rounded-es-none" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/cap2.JPG" alt="Hero Image" className="border-[10px] mx-auto w-[300px] h-[391px] sm:w-[400px] sm:h-[522px] object-cover rounded-[100px] rounded-es-none" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/cap3.jpeg" alt="Hero Image" className="border-[10px] mx-auto w-[300px] h-[391px] sm:w-[400px] sm:h-[522px] object-cover rounded-[100px] rounded-es-none" />
                  </SwiperSlide>
                </Swiper>
              </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="main_container max-w-[708px] lg:max-w-[1280px] flex flex-col gap-y-10 lg:flex-row justify-between gap-[7%]">
            <div className="flex flex-col justify-center items-start gap-y-[50px] col-span-3">
              <div>
                <h1 className="leading-[130%] text-center lg:text-start w-full text-[34px] sm:text-[48px] font-bold text-background">Get the Latest Dress Models From Us</h1>
                <p className="mt-[24px] w-full text-center lg:text-start text-[18px] font-light text-input">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus ullamcorper.</p>
              </div>

              <div className="flex justify-between w-full">
                <Button className="text-[18px] rounded-none font-semibold text-center w-[180px] border-2 text-background p-[22px]" variant={'ghost'}>Shop now</Button>

                <div className="flex flex-col justify-end items-end">
                  <h2 className="text-[40px] sm:text-[58px] leading-[100%] font-bold text-background">30%</h2>
                  <h2 className="text-[40px] sm:text-[58px] leading-[100%] font-bold text-background">OFF</h2>
                </div>
              </div>
            </div>

              <div className="flex justify-center items-center">
                <Swiper modules={[Pagination, Autoplay, Navigation]} 
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }} 
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                  }}
                  className="mySwiper max-w-[400px]">
                  <SwiperSlide>
                    <img src="/cap1.JPG" alt="Hero Image" className="border-[10px] mx-auto w-[300px] h-[391px] sm:w-[400px] sm:h-[522px] object-cover rounded-[100px] rounded-es-none" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/cap2.JPG" alt="Hero Image" className="border-[10px] mx-auto w-[300px] h-[391px] sm:w-[400px] sm:h-[522px] object-cover rounded-[100px] rounded-es-none" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/cap3.jpeg" alt="Hero Image" className="border-[10px] mx-auto w-[300px] h-[391px] sm:w-[400px] sm:h-[522px] object-cover rounded-[100px] rounded-es-none" />
                  </SwiperSlide>
                </Swiper>
              </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Hero