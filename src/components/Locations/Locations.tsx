import { fadeAnimation, slideAnimation } from "../../configs/motion"
import { motion } from "framer-motion"
import { IoLocationSharp } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { IoShareSocialSharp } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";
import { BsTelegram } from "react-icons/bs";
import { IoMail } from "react-icons/io5";

const Locations = () => {
  return (
    <section className="py-[50px]">
        <div className="main_container flex flex-col gap-[40px] justify-start items-center">
            <motion.h1 {...slideAnimation("left")} className="leading-[130%] text-center w-full text-[34px] sm:text-[48px] font-bold">Contacts</motion.h1>

            <div className="w-full border py-[20px] px-[20px] grid md:grid-cols-2 gap-3">
                <div className="w-full flex flex-col gap-[15px] pb-[20px] md:pb-0">
                    <motion.h1 {...slideAnimation("left")} className="leading-[130%] max-w-[400px] w-full text-[24px] sm:text-[34px] font-semibold">Lanitka_uz</motion.h1>

                    <div className="mt-4 flex flex-col gap-1">
                        <h2 className="flex justify-start gap-1 text-[22px] font-semibold"><span><IoLocationSharp /></span> Manzil:</h2>
                        <p className="text-[18px]">Чиланзарский район, станция метро «Xalqalar Do'stligi»</p>
                    </div>

                    <div className="mt-4 flex flex-col gap-1">
                        <h2 className="flex justify-start gap-1 text-[22px] font-semibold"><span><BsFillTelephoneFill /></span> Telefon:</h2>
                        <span className="flex justify-start items-center gap-4 flex-wrap">
                            <Link to={'tel:'} className="text-[18px]">+998999999999</Link>
                            <Link to={'tel:'} className="text-[18px]">+998999999999</Link>
                        </span>
                    </div>

                    <div className="mt-4 flex flex-col gap-1">
                        <h2 className="flex justify-start gap-1 text-[22px] font-semibold"><span><IoShareSocialSharp /></span> Ijtimoiy tarmoqlar:</h2>
                        <span className="flex justify-start items-center gap-4 mt-2 flex-wrap">
                            <Link to={'tel:'} className="text-[28px]"><RiInstagramFill /></Link>
                            <Link to={'tel:'} className="text-[28px]"><BsTelegram /></Link>
                            <Link to={'tel:'} className="text-[28px]"><IoMail /></Link>
                        </span>
                    </div>
                </div>
                <div >
                    <motion.iframe {...fadeAnimation} className="w-full rounded-md h-[300px] md:h-[440px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.517377620516!2d69.227675225946!3d41.319361700212134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b99b2c2aeb3%3A0x76bfac859c7018a0!2sChorsu%2C%20%D0%A2%D0%BEshkent%2C%20Toshkent%20Viloyati%2C%20O%60zbekiston!5e0!3m2!1suz!2s!4v1706350551686!5m2!1suz!2s" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></motion.iframe>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Locations