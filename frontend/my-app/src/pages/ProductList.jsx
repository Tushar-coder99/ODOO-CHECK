import React from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../data";

const ProductList = ({ searchTerm }) => {
  const term = (searchTerm || "").toLowerCase();

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(term) ||
      product.description.toLowerCase().includes(term)
  );

  return (
    <div style={page}>
      {/* Background blobs */}
      <div style={{ ...blob, ...blob1 }} />
      <div style={{ ...blob, ...blob2 }} />
      <div style={{ ...blob, ...blob3 }} />

      <div style={container}>
        <div style={headCard}>
          <h2 style={title}>
            {searchTerm ? `Search Results for "${searchTerm}"` : "All Products"}
          </h2>
          <p style={subTitle}>
            {searchTerm
              ? "Results matched by name/description."
              : "Browse the complete catalog."}
          </p>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="product-grid" style={gridEnhance}>
            {filteredProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <div style={emptyState}>
            <div style={emptyIcon} aria-hidden="true">🛒</div>
            <h3 style={emptyTitle}>No products found</h3>
            <p style={emptyText}>
              No products found matching “{searchTerm}”. Try searching for different keywords.
            </p>
          </div>
        )}

        <footer style={footer}>© 2026 MyShop E‑Commerce. All rights reserved.</footer>
      </div>
    </div>
  );
};

export default ProductList;

/* ---------- Styles ---------- */

const page = {
  minHeight: "100vh",
  position: "relative",
  overflow: "hidden",
  padding: "22px 16px 44px",
  background:
    "radial-gradient(1200px 700px at 15% 10%, rgba(95, 92, 255, 0.28), transparent 55%)," +
    "radial-gradient(1000px 600px at 85% 20%, rgba(0, 212, 255, 0.24), transparent 55%)," +
    "linear-gradient(135deg, #0b1020, #0b1227 45%, #08101f)",
  color: "#eaf0ff",
};

const blob = {
  position: "absolute",
  width: 520,
  height: 520,
  borderRadius: "50%",
  filter: "blur(20px)",
  opacity: 0.5,
  animation: "float 9s ease-in-out infinite",
  pointerEvents: "none",
};

const blob1 = {
  left: -160,
  top: -180,
  background: "radial-gradient(circle at 30% 30%, #7c3aed, transparent 60%)",
};

const blob2 = {
  right: -220,
  top: -120,
  background: "radial-gradient(circle at 30% 30%, #06b6d4, transparent 60%)",
  animationDelay: "1.8s",
};

const blob3 = {
  left: "12%",
  bottom: -320,
  background: "radial-gradient(circle at 30% 30%, #22c55e, transparent 60%)",
  animationDelay: "3s",
};

const container = { width: "min(1100px, 94vw)", margin: "0 auto" };

const headCard = {
  borderRadius: 18,
  padding: "16px 16px",
  marginBottom: 16,
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.12)",
  boxShadow: "0 18px 50px rgba(0,0,0,0.35)",
  backdropFilter: "blur(14px)",
  WebkitBackdropFilter: "blur(14px)",
};

const title = { margin: 0, fontSize: 22, letterSpacing: 0.2 };
const subTitle = { margin: "6px 0 0", opacity: 0.75, fontSize: 13 };

const gridEnhance = {
  gap: 18,
};

const emptyState = {
  marginTop: 16,
  padding: "28px 18px",
  borderRadius: 18,
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.10)",
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)",
  textAlign: "center",
};

const emptyIcon = { fontSize: 26, opacity: 0.9 };
const emptyTitle = { margin: "10px 0 6px" };
const emptyText = { margin: 0, opacity: 0.8 };

const footer = {
  marginTop: 22,
  padding: "16px 10px",
  textAlign: "center",
  opacity: 0.65,
};

/*
Keep this once globally in index.css / App.css:

@keyframes float {
  0%, 100% { transform: translate(0px, 0px) scale(1); }
  50% { transform: translate(18px, -14px) scale(1.04); }
}
*/
