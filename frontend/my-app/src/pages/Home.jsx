import { useEffect, useState, useContext } from "react"
import { Link } from "react-router-dom"
import { ShopContext } from "../context/ShopContext"

export const Home = () => {
  const [products, setProducts] = useState([])
  const { addToCart } = useContext(ShopContext)

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [])

  return (
    <div>
      <h1>Products</h1>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <img src={product.image} alt={product.title} width="100" />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <Link to={`/product/${product.id}`}>View Details</Link>
            <button onClick={() => addToCart(product.id)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}