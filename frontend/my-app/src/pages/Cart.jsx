
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

import React from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data'; // Importing mock data

const Home = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Latest Products</h1>
      <div style={gridStyle}>
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

// Styles
const gridStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '2rem',
};

export default Home;

