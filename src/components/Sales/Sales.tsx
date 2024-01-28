import { slideAnimation } from "../../configs/motion"
import { motion } from "framer-motion"
import SalesSwiper from "./SalesSwiper"

const Sales = () => {
  return (
    <section className="py-[50px]" id="catalog">
        <div className="main_container flex flex-col gap-[10px] justify-start items-center">
            <motion.h1 {...slideAnimation("left")} className="leading-[130%] pb-8 text-center w-full text-[34px] sm:text-[40px] font-bold">Chegirmalar</motion.h1>

            <SalesSwiper />
        </div>
    </section>
  )
}

export default Sales