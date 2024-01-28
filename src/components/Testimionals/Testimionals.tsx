import { slideAnimation } from "../../configs/motion"
import { motion } from "framer-motion"
import TestimionalCards from "../TestimionalsCards/TestimionalCards"

const Testimionals = () => {
  return (
    <section className="py-[50px]">
        <div className="main_container flex flex-col gap-[40px] justify-start items-center">
            <motion.h1 {...slideAnimation("left")} className="leading-[130%] text-center w-full text-[34px] sm:text-[40px] font-bold">Mijozlar sharhlari</motion.h1>

            <TestimionalCards />
        </div>
    </section>
  )
}

export default Testimionals