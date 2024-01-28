import { Link } from "react-router-dom"
import { Button } from "../ui/button"
import { CiMenuFries } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { fadeAnimation, slideAnimation } from "../../configs/motion";
import { CartContext } from "@/context/CartContext";
import { useContext } from "react";

const Header = () => {
  const {setisOpen} = useContext(CartContext)

  return (
    <header className="absolute mt-[5px] py-[20px] left-0 top-0 z-10  w-full shadow-sm">
      <div className="main_container flex justify-between items-center text-background">
        <Link to={'/'}>
          <motion.h3 {...slideAnimation("left")} className="text-[22px] font-semibold">Lanitka_uz</motion.h3>
          {/* <img src="/logo.png" alt="logo" className="w-[40px] bg-white" /> */}
        </Link>

          <nav className="flex items-center justify-center gap-[20px] md:gap-[40px]">
            <input type="checkbox" className="hidden" id="checkbox" />
            <label htmlFor="checkbox" className="bg_cover fixed w-full h-screen bg-black opacity-[.5] right-[-100%] top-0"></label>
            <ul className="nav_links fixed left-[-100%] top-0 max-w-[320px] w-full text-[24px] bg-background h-[100vh] text-foreground flex-col md:static md:bg-transparent md:text-background md:flex-row md:text-[16px] md:max-w-[100%] md:h-auto flex justify-center items-center gap-[25px]">
              <motion.li {...fadeAnimation}>
                <Link className="hover:underline" to={'#'}>О компании</Link>
              </motion.li>
              <motion.li {...fadeAnimation}>
                <Link className="hover:underline" to={'#'}>Каталог</Link>
              </motion.li>
              <motion.li {...fadeAnimation}>
                <Link className="hover:underline" to={'#'}>Услуги</Link>
              </motion.li>
              <motion.li {...fadeAnimation}>
                <Link className="hover:underline" to={'#'}>Контакты</Link>
              </motion.li>
            </ul>
            
            <Button variant="outline" size="icon" className="min-w-[40px]" onClick={() => setisOpen(true)}>
              <IoCartOutline size={20} className="text-foreground" />
            </Button>

            <label className="menu_item md:hidden relative z-[10] shadow-md" htmlFor="checkbox">
              <CiMenuFries className="text-[24px] cursor-pointer" />
            </label>
          </nav>
      </div>
    </header>
  )
}

export default Header