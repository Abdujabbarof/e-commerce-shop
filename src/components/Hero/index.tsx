import { Swiper, SwiperSlide } from "swiper/react"
import { Button } from "../ui/button"
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { FaArrowRightLong } from "react-icons/fa6";
import { LuMouse } from "react-icons/lu";

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import { AnimatePresence, motion } from "framer-motion";
import { fadeAnimation, headTextAnimation, slideAnimation, topAnimation } from "@/configs/motions";

const getRandomColor = () => {
  const randomValue = () => Math.floor(Math.random() * 64); // Adjusted the range to generate lower values
  const r = randomValue();
  const g = randomValue();
  const b = randomValue();
  return `rgb(${r},${g},${b})`;
};

const Hero = () => {  
  return (
    <AnimatePresence>
      <section className='w-full relative'>
        <Swiper modules={[Pagination, Autoplay, Navigation]} 
          autoplay={{
            delay: 8000,
            disableOnInteraction: false,
          }} 
          loop={true} 
          loopPreventsSliding={false} 
          speed={500}
          spaceBetween={30}
          className="mySwiper">
            {
              [1,2].map((item) => (
                <SwiperSlide key={item} className="lg:h-[100vh]">
                  <div className="pt-[120px] pb-[60px] lg:py-[80px] lg:border-2 flex h-full items-center" style={{ background: `linear-gradient(180deg, ${getRandomColor()} 0%, ${getRandomColor()} 66.67%)` }}>
                    <div className="main_container max-w-[708px] lg:max-w-[1280px] flex flex-col gap-y-5 lg:flex-row justify-between gap-[7%]">
                      <div className="flex flex-col justify-center items-start gap-y-[30px] col-span-3">
                        <div>
                          <motion.h1 {...slideAnimation("left")} className="leading-[130%] text-center lg:text-start w-full text-[34px] sm:text-[48px] font-bold text-background">Get the Latest Dress Models From Us</motion.h1>
                          <motion.p {...slideAnimation("left")} className="mt-[18px] sm:mt-[24px] w-full text-center lg:text-start text-[16px] sm:text-[18px] font-light text-input">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus ullamcorper.</motion.p>
                        </div>

                        <div className="flex justify-between w-full">
                          <motion.div {...fadeAnimation}>
                            <Button className="text-[18px] rounded-none font-semibold text-center w-[180px] border-2 text-background p-[22px] flex gap-2" variant={'ghost'}>Shop now <FaArrowRightLong size={22} /></Button>
                          </motion.div>

                          <motion.div {...headTextAnimation} className="flex flex-col justify-end items-end">
                            <svg xmlns="http://www.w3.org/2000/svg" width="99" height="57" viewBox="0 0 99 57" fill="none">
                            <path d="M1.57183 21.1713C9.24524 24.7918 17.071 28.1463 24.7443 31.7666C26.1878 32.4526 27.8245 30.7064 26.7999 29.4125C25.0548 26.7876 23.2714 24.3528 21.5262 21.728C24.6421 22.454 26.6162 24.4332 28.7795 26.9443C29.7665 27.9338 31.0578 28.8858 32.5405 28.3935C34.8599 27.6742 35.7384 24.2925 36.5391 22.2789C38.56 17.1502 39.9349 11.7924 42.6016 6.89246C45.8014 1.30905 48.1918 4.65687 49.6687 9.10582C51.2972 13.783 52.127 18.9914 52.4249 23.895C52.8703 32.4857 52.8967 41.6841 56.65 49.5566C58.7351 53.9303 64.8108 58.6131 69.6806 55.0461C75.6913 50.7207 79.7321 41.4512 80.6913 34.2306C81.4562 30.4306 83.0847 4.66222 90.8655 13.6422C96.5587 20.2249 96.4668 32.958 96.8746 41.2446C96.9493 42.3469 98.6216 42.387 98.737 41.3229C99.5456 32.8861 98.455 23.5724 95.4242 15.5486C93.7191 11.2514 87.8353 5.12456 83.3438 10.2502C78.091 16.2112 78.6487 26.2084 77.7271 33.7331C77.2651 38.4837 74.7883 43.4219 72.5787 47.5242C67.8546 56.2605 60.7512 52.7547 58.1763 44.9216C55.0713 35.3014 56.491 24.8126 54.7167 14.9658C54.0369 11.468 52.0753 -0.393194 46.1069 0.283353C39.2262 1.07298 36.7039 12.1308 34.9487 17.4117C35.1011 17.1459 32.3153 26.0746 31.2899 25.275C30.2646 24.4755 29.4301 23.2203 28.4429 22.231C26.545 20.366 24.4935 19.2611 22.0995 18.8782C24.3437 17.5507 26.4362 15.9949 28.3769 14.2109C29.3664 13.2239 28.3424 11.4361 27.05 11.4725C18.1169 12.1456 10.206 16.0887 1.6511 18.3206C0.320667 18.5469 0.204084 20.5993 1.57183 21.1713ZM17.7667 18.7967C17.082 19.2519 17.2331 19.9743 17.6508 20.3549C17.4601 20.8108 17.4595 21.3049 17.763 21.7614C18.7494 23.245 19.8117 24.8427 20.7981 26.3263C16.0876 24.1919 11.4528 22.1715 6.74229 20.0371C11.9136 18.4091 16.9714 16.3629 22.2179 15.3435C20.8104 16.4439 19.2886 17.6203 17.7667 18.7967Z" fill="#ffffff"/>
                            </svg>
                            <h2 className="text-[40px] sm:text-[58px] leading-[100%] font-bold text-background">SALE</h2>
                            <h2 className="text-[40px] sm:text-[58px] leading-[100%] font-bold text-background">30%</h2>
                          </motion.div>
                        </div>
                      </div>

                        <motion.div {...headTextAnimation} className="flex justify-center items-center">
                          <Swiper modules={[Pagination, Autoplay, Navigation]} 
                            autoplay={{
                              delay: 2000,
                              disableOnInteraction: false,
                            }} 
                            loop={true} 
                            loopPreventsSliding={false} 
                            speed={500}
                            spaceBetween={30}
                            pagination={{
                              clickable: true,
                            }}
                            className="mySwiper max-w-[400px]">
                            <SwiperSlide>
                              <img src="/cap1.JPG" alt="Hero Image" className="border-[10px] border-white mx-auto w-[300px] h-[391px] sm:w-[400px] sm:h-[522px] object-cover rounded-[100px] rounded-es-none rounded-se-none" />
                            </SwiperSlide>
                            <SwiperSlide>
                              <img src="/cap2.JPG" alt="Hero Image" className="border-[10px] border-white mx-auto w-[300px] h-[391px] sm:w-[400px] sm:h-[522px] object-cover rounded-[100px] rounded-es-none rounded-se-none" />
                            </SwiperSlide>
                            <SwiperSlide>
                              <img src="/cap3.jpeg" alt="Hero Image" className="border-[10px] border-white mx-auto w-[300px] h-[391px] sm:w-[400px] sm:h-[522px] object-cover rounded-[100px] rounded-es-none rounded-se-none" />
                            </SwiperSlide>
                          </Swiper>
                        </motion.div>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            }
        </Swiper>

        <div className="hidden lg:block absolute bottom-[50px] translate-x-[-50%] left-[50%] z-10 cursor-pointer">
          <motion.div className="flex w-[50px] h-[50px] rounded-full border-2 border-white justify-center items-center" {...topAnimation}><LuMouse size={24} color="white" />
          </motion.div>
        </div>
      </section>
    </AnimatePresence>
  )
}

export default Hero