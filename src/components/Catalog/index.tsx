import { slideAnimation } from "../../configs/motion"
import { motion } from "framer-motion"
import SwiperCompoent from "../Swiper/Swiper"

const Catalog = () => {
  return (
    <section className="py-[50px]">
        <div className="main_container flex flex-col gap-[10px] justify-start items-center">
            <motion.h1 {...slideAnimation("left")} className="leading-[130%] text-center w-full text-[34px] sm:text-[48px] font-bold">Our Collections</motion.h1>

            <SwiperCompoent />
        </div>
    </section>
  )
}

export default Catalog