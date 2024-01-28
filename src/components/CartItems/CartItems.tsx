import { useState } from "react"
import { Button } from "../ui/button"

const CartItems = () => {
    const [quantity, setQuantity] = useState(1)

    const increaseQuantity = () => {
        setQuantity(prev => prev + 1)
    }

    const decreaseQuantity = () => {
        if(quantity > 1) {
            setQuantity(prev => prev - 1)
        }
    }

  return (
    <div className="p-[10px] border flex justify-start items-start gap-3">
                        <img src="./cap1.JPG" alt="item cart" className="min-w-[120px] h-[120px] object-cover object-center" />

                        <div className="flex flex-col justify-between h-[120px] w-full">
                            <h2 className='text-start text-[14px]'>FLYING SKELETON' TAPESTRY ZIP SHIRT</h2>
            
                            <div className='flex justify-between items-start gap-2'>
                                <p className='opacity-[.5] text-[13px] sm:text-[14px]'>Best quality</p>

                                <span className='flex flex-col items-end justify-start gap-1 text-[14px] sm:text-[18px]'>
                                    <h3 className='opacity-[.5] line-through'>$140.00USD</h3>
                                    <h3>$100.00USD</h3>
                                </span>
                            </div>

                            <div className="flex justify-between items-center gap-2">
                                <Button variant={'destructive'} size={'sm'} className="w-[90px]">Remove</Button>

                                <div className="flex justify-center items-center gap-2">
                                    <Button variant={'outline'} size={'sm'} onClick={decreaseQuantity}>-</Button>
                                    <h3>{quantity}</h3>
                                    <Button variant={'outline'} size={'sm'} onClick={increaseQuantity}>+</Button>
                                </div>
                            </div>
                        </div>

                    </div>
  )
}

export default CartItems