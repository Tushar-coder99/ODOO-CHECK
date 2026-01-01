import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/ProductCard.css";

const ProductCard = ({ product }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  // On first render, check whether this product is already in wishlist
  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const exists = wishlist.find((item) => item._id === product._id);
    setIsWishlisted(!!exists);
  }, [product._id]);

  const toggleWishlist = () => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    let updatedWishlist;

    if (isWishlisted) {
      // remove
      updatedWishlist = wishlist.filter((item) => item._id !== product._id);
    } else {
      // add
      updatedWishlist = [...wishlist, product];
    }

    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    setIsWishlisted(!isWishlisted);
  };

  return (
    <div className="pcard">
      <div className="pcard__glow" aria-hidden="true" />

      <div className="pcard__imgWrap">
        <img src={product.image} alt={product.name} className="pcard__img" />

        {/* Heart wishlist button */}
        <button
          type="button"
          className={`pcard__wish ${isWishlisted ? "is-active" : ""}`}
          onClick={toggleWishlist}
          aria-label={
            isWishlisted ? "Remove from wishlist" : "Add to wishlist"
          }
        >
          {isWishlisted ? "♥" : "♡"}
        </button>
      </div>

      <div className="pcard__body">
        <h3 className="pcard__title">{product.name}</h3>
        <p className="pcard__desc">
          {product.description.substring(0, 70)}...
        </p>

        <div className="pcard__footer">
          <span className="pcard__price">₹{product.price}</span>
          <Link to={`/product/${product._id}`} className="pcard__btn">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
