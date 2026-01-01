import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/ShopContext"

export const Cart = () => {
  const { cartItems, removeFromCart } = useContext(ShopContext)
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [])

  return (
    <div>
      <h1>Your Cart Items</h1>
      <div>
        {products.map((product) => {
          if (cartItems[product.id]) {
            return (
              <div key={product.id}>
                <img src={product.image} width="100" />
                <h3>{product.title}</h3>
                <p>
                  ${product.price} x {cartItems[product.id]}
                </p>
                <button onClick={() => removeFromCart(product.id)}>
                  Remove
                </button>
              </div>
            )
          }
        })}
      </div>
    </div>
  )
}