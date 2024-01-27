import { fadeAnimation, slideAnimation } from "@/configs/motions"
import { motion } from "framer-motion"

const Locations = () => {
  return (
    <section className="py-[50px]">
        <div className="main_container flex flex-col gap-[40px] justify-start items-center">
            <motion.h1 {...slideAnimation("left")} className="leading-[130%] text-center w-full text-[34px] sm:text-[48px] font-bold">Our Locations</motion.h1>

            <div className="w-full border py-[20px] px-[20px] grid grid-cols-2 gap-3">
                <div className="w-full flex flex-col gap-[15px]">
                    <motion.h1 {...slideAnimation("left")} className="leading-[130%] max-w-[400px] w-full text-[34px] sm:text-[34px] font-semibold">Tashkent Shahar, Shayhontohur tumani, Chorsu bozor</motion.h1>
                </div>
                <div >
                    <motion.iframe {...fadeAnimation} className="w-full rounded-md" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.517377620516!2d69.227675225946!3d41.319361700212134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b99b2c2aeb3%3A0x76bfac859c7018a0!2sChorsu%2C%20%D0%A2%D0%BEshkent%2C%20Toshkent%20Viloyati%2C%20O%60zbekiston!5e0!3m2!1suz!2s!4v1706350551686!5m2!1suz!2s" width="600" height="450" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></motion.iframe>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Locations