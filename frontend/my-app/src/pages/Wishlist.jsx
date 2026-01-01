import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("wishlist")) || [];
    setItems(stored);
  }, []);

  const removeFromWishlist = (id) => {
    const updated = items.filter((item) => item._id !== id);
    setItems(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  return (
    <section className="wishlistPage" style={page}>
      <div style={container}>
        <header style={headerCard}>
          <h1 style={title}>My Wishlist</h1>
          <p style={subtitle}>Products you saved for later.</p>
        </header>

        {items.length === 0 ? (
          <div style={emptyState}>
            <div style={emptyIcon} aria-hidden="true">
              ♡
            </div>
            <h3 style={emptyTitle}>Your wishlist is empty</h3>
            <p style={emptyText}>
              Tap the heart icon on any product to add it here.
            </p>
            <Link to="/products" style={primaryBtn}>
              Browse products
            </Link>
          </div>
        ) : (
          <div style={grid}>
            {items.map((item) => (
              <article key={item._id} style={card}>
                <div style={imgWrap}>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={img}
                  />
                </div>
                <div style={body}>
                  <h3 style={cardTitle}>{item.name}</h3>
                  <p style={price}>₹{item.price}</p>
                  <div style={actions}>
                    <Link
                      to={`/product/${item._id}`}
                      style={secondaryBtn}
                    >
                      View details
                    </Link>
                    <button
                      type="button"
                      style={dangerBtn}
                      onClick={() => removeFromWishlist(item._id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Wishlist;

/* Inline styles to match existing glass UI */

const page = {
  minHeight: "100vh",
  padding: "24px 16px 40px",
  background:
    "radial-gradient(1200px 700px at 15% 10%, rgba(95, 92, 255, 0.28), transparent 55%)," +
    "radial-gradient(1000px 600px at 85% 20%, rgba(0, 212, 255, 0.24), transparent 55%)," +
    "linear-gradient(135deg, #0b1020, #0b1227 45%, #08101f)",
  color: "#eaf0ff",
};

const container = {
  width: "min(1100px, 94vw)",
  margin: "0 auto",
};

const headerCard = {
  borderRadius: 18,
  padding: "16px 16px",
  marginBottom: 18,
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.12)",
  boxShadow: "0 18px 50px rgba(0,0,0,0.35)",
  backdropFilter: "blur(14px)",
  WebkitBackdropFilter: "blur(14px)",
};

const title = { margin: 0, fontSize: 24, letterSpacing: 0.3 };
const subtitle = { margin: "6px 0 0", opacity: 0.78, fontSize: 13 };

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: 18,
};

const card = {
  borderRadius: 16,
  overflow: "hidden",
  background: "rgba(15,23,42,0.9)",
  border: "1px solid rgba(148,163,184,0.35)",
  boxShadow: "0 14px 40px rgba(0,0,0,0.45)",
  display: "flex",
  flexDirection: "column",
};

const imgWrap = {
  height: 180,
  background: "#020617",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const img = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

const body = {
  padding: "14px 14px 16px",
  display: "flex",
  flexDirection: "column",
  gap: 6,
};

const cardTitle = { margin: 0, fontSize: 16, fontWeight: 600 };
const price = { margin: 0, fontSize: 15, fontWeight: 700, color: "#a5b4fc" };

const actions = {
  marginTop: 10,
  display: "flex",
  gap: 8,
};

const primaryBtn = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "10px 18px",
  borderRadius: 999,
  border: "none",
  background:
    "linear-gradient(135deg, rgba(59,130,246,0.98), rgba(37,99,235,0.98))",
  color: "#fff",
  fontSize: 13,
  fontWeight: 600,
  cursor: "pointer",
  textDecoration: "none",
};

const secondaryBtn = {
  ...primaryBtn,
  background: "rgba(15,23,42,0.4)",
  border: "1px solid rgba(148,163,184,0.9)",
};

const dangerBtn = {
  ...primaryBtn,
  background: "rgba(239,68,68,0.96)",
};

const emptyState = {
  marginTop: 18,
  padding: "26px 18px 24px",
  borderRadius: 18,
  background: "rgba(15,23,42,0.9)",
  border: "1px solid rgba(148,163,184,0.45)",
  textAlign: "center",
  boxShadow: "0 18px 50px rgba(0,0,0,0.45)",
};

const emptyIcon = { fontSize: 34, opacity: 0.92 };
const emptyTitle = { margin: "10px 0 6px", fontSize: 18 };
const emptyText = { margin: "0 0 14px", opacity: 0.8, fontSize: 13 };
