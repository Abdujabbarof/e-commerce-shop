import { useContext } from "react";
import { Button } from "../ui/button"
import { HiOutlineXMark } from "react-icons/hi2";
import { CartContext } from "@/context/CartContext";
import CartItems from "../CartItems/CartItems";

const CartBar = () => {
    const {isOpen, setisOpen} = useContext(CartContext)
    
  return (
    <div className={`cart_bg fixed w-full h-[100vh] top-0 ${isOpen ? "right-0" : "right-[-100%]"} bg-black z-20 bg-opacity-[0.5] flex justify-end`}>
        <div className={`max-w-[500px] w-full px-[2.3%] z-10 h-[100vh] top-0 bg-background`}>
            <div className="w-full py-[20px] border-b flex justify-between items-center">
                <h1 className="text-[24px]">Cart</h1>

                <Button variant={'ghost'} className="hover:bg-transparent" onClick={() => {
                    setisOpen(false)
                }}>
                    <HiOutlineXMark size={24} />
                </Button>
            </div>

            <div className="w-full h-full overflow-y-scroll">
                <div className="w-full flex flex-col gap-3 py-4 pb-[165px]">
                    <CartItems />
                    <CartItems />
                    <CartItems />
                    <CartItems />
                    <CartItems />
                    <CartItems />
                </div>
            </div>

            <div className="max-w-[500px] w-full py-[15px] bg-background sticky border-t right-0 bottom-0 flex justify-between items-center">
                <h3 className="font-semibold">Total: {6*100}$</h3>
                <Button variant={'default'}>Check out</Button>
            </div>
        </div>
    </div>
  )
}

export default CartBar