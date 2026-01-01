import { createContext, useState } from "react"

export const ShopContext = createContext(null)

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({})

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    }
  }

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const newCart = { ...prev }
      delete newCart[itemId]
      return newCart
    })
  }

  const contextValue = { cartItems, addToCart, removeFromCart }

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}