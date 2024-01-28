import { ReactNode, createContext, useState } from "react"

export const CartContext = createContext({
    isOpen: false,
    setisOpen: (val: boolean) => {val}
})

const CartContextProvider = ({children}:{children: ReactNode}) => {
    const [isOpen, setisOpen] = useState(false)
  return (
    <CartContext.Provider value={{isOpen, setisOpen}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider