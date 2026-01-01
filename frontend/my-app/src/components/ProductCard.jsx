import React from "react";
import { Link } from "react-router-dom";
import "../styles/ProductCard.css";


const ProductCard = ({ product }) => {
  return (
    <div className="pcard">
      <div className="pcard__glow" aria-hidden="true" />

      <div className="pcard__imgWrap">
        <img src={product.image} alt={product.name} className="pcard__img" />
      </div>

      <div className="pcard__body">
        <h3 className="pcard__title">{product.name}</h3>
        <p className="pcard__desc">{product.description.substring(0, 70)}...</p>

        <div className="pcard__footer">
          <span className="pcard__price">${product.price}</span>
          <Link to={`/product/${product._id}`} className="pcard__btn">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
