// src/pages/Wishlist.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Wishlist() {
  const [items] = useState([
    { id: 1, name: "Sample Wishlist Product", price: 499 },
  ]);

  return (
    <section>
      <h1>Wishlist</h1>
      {items.length === 0 ? (
        <p>No items in wishlist.</p>
      ) : (
        <ul className="wishlist-list">
          {items.map(item => (
            <li key={item.id} className="wishlist-item">
              <span>{item.name}</span>
              <span>₹{item.price}</span>
              <Link to={`/products/${item.id}`} className="btn-secondary">
                View
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Wishlist;
