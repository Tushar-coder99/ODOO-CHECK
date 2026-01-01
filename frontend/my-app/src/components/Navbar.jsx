import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = ({ searchTerm, setSearchTerm }) => {
  const [open, setOpen] = useState(false);

  return (
    <header className="gNav">
      <div className="gNav__inner">
        <Link to="/" className="gNav__logo" onClick={() => setOpen(false)}>
          MyShop<span className="gNav__dot">.</span>
        </Link>

        {/* Search */}
        <div className="gNav__search">
          <span className="gNav__searchIcon" aria-hidden="true">
            🔎
          </span>
          <input
            className="gNav__searchInput"
            type="text"
            placeholder="Search products..."
            value={searchTerm || ""}
            onChange={(e) => setSearchTerm && setSearchTerm(e.target.value)}
          />
          {searchTerm ? (
            <button
              type="button"
              className="gNav__clear"
              onClick={() => setSearchTerm && setSearchTerm("")}
              aria-label="Clear search"
              title="Clear"
            >
              ✕
            </button>
          ) : null}
        </div>

        {/* Mobile toggle */}
        <button
          className="gNav__toggle"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>

        {/* Links */}
        <nav className={`gNav__links ${open ? "is-open" : ""}`}>
          <NavLink to="/" className="gNav__link" onClick={() => setOpen(false)}>
            Home
          </NavLink>

          <NavLink
            to="/products"
            className="gNav__link"
            onClick={() => setOpen(false)}
          >
            Products
          </NavLink>

          <NavLink
            to="/cart"
            className="gNav__link"
            onClick={() => setOpen(false)}
          >
            Cart
          </NavLink>

          <NavLink
            to="/wishlist"
            className="gNav__link"
            onClick={() => setOpen(false)}
          >
            Wishlist
          </NavLink>

          <NavLink
            to="/contact"
            className="gNav__link"
            onClick={() => setOpen(false)}
          >
            Contact
          </NavLink>

          <NavLink
            to="/profile"
            className="gNav__link"
            onClick={() => setOpen(false)}
          >
            Profile
          </NavLink>

          <NavLink
            to="/login"
            className="gNav__btn"
            onClick={() => setOpen(false)}
          >
            <span className="gNav__btnGlow" aria-hidden="true" />
            Login
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
