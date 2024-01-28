
import { Button } from "@/components/ui/button"
import "../Header/header.css"
import { LuShoppingCart } from "react-icons/lu";
import { IoMenu } from "react-icons/io5";

const Header = () => {
  return (
    <header>
      <div className="nav-logo">
      <img src={"logo.jpg"} alt="" />
      <p>Lanitka</p>
      </div>
    <div className="navbar">
    <ul>
      <li><a className="active" href="">Home</a></li>
      <li><a href="./Shop">Shop</a></li>
      <li><a href="">About us</a></li>
      <li><a href="">Contact</a></li>
      <li><a href="">Men</a></li>
      <li><a href="">Women</a></li>
    </ul>
    <Button variant={"ghost"}>
      <LuShoppingCart/>
    </Button>
   </div>
   <div id="mobile">
   <IoMenu id="bar" />
   <Button variant={"ghost"}>
      <LuShoppingCart className="i"/>
    </Button>
   </div>
    </header>
   
  )
}

export default Header