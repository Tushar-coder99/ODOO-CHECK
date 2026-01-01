import React from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../data";

const Home = ({ searchTerm }) => {
  const term = (searchTerm || "").toLowerCase();

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(term) ||
      product.description.toLowerCase().includes(term)
  );

  return (
    <div style={page}>
      {/* Animated blobs */}
      <div style={{ ...blob, ...blob1 }} />
      <div style={{ ...blob, ...blob2 }} />
      <div style={{ ...blob, ...blob3 }} />

      {/* Hero Section - Only show when not searching */}
      {!searchTerm && (
        <section style={heroSection}>
          <div style={heroCard}>
            <div style={badge}>New season • Best deals</div>
            <h1 style={heroTitle}>Ecommerce Site</h1>
            <p style={heroText}>
              Discover the latest gadgets and accessories at unbeatable prices.
              Quality gear for quality life.
            </p>

            <a href="#products" style={heroBtn}>
              <span style={btnGlow} />
              Shop Now
            </a>

            <div style={heroStatsRow}>
              <div style={stat}>
                <div style={statNumber}>Fast</div>
                <div style={statLabel}>Delivery</div>
              </div>
              <div style={stat}>
                <div style={statNumber}>Secure</div>
                <div style={statLabel}>Payments</div>
              </div>
              <div style={stat}>
                <div style={statNumber}>Top</div>
                <div style={statLabel}>Brands</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Products */}
      <section id="products" style={section}>
        <div style={container}>
          <div style={sectionHead}>
            <h2 style={sectionTitle}>
              {searchTerm ? `Search Results for "${searchTerm}"` : "Latest Arrivals"}
            </h2>
            <p style={sectionSub}>
              {searchTerm
                ? `Showing matches from name/description.`
                : `Hand-picked products, updated regularly.`}
            </p>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="product-grid" style={productGridEnhance}>
              {filteredProducts.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          ) : (
            <div style={emptyState}>
              <div style={emptyIcon} aria-hidden="true">🔎</div>
              <h3 style={emptyTitle}>No products found</h3>
              <p style={emptyText}>
                Nothing matched “{searchTerm}”. Try different keywords or browse all products.
              </p>
            </div>
          )}
        </div>
      </section>

      <footer style={footer}>© 2026 MyShop E‑Commerce. All rights reserved.</footer>
    </div>
  );
};

export default Home;

/* ---------- Styles (same theme as auth pages) ---------- */

const page = {
  minHeight: "100vh",
  position: "relative",
  overflow: "hidden",
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
  left: "15%",
  bottom: -300,
  background: "radial-gradient(circle at 30% 30%, #22c55e, transparent 60%)",
  animationDelay: "3s",
};

const heroSection = {
  padding: "54px 16px 10px",
};

const heroCard = {
  width: "min(1100px, 94vw)",
  margin: "0 auto",
  borderRadius: 22,
  padding: "34px 22px",
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.12)",
  boxShadow:
    "0 20px 60px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.08)",
  backdropFilter: "blur(14px)",
  WebkitBackdropFilter: "blur(14px)",
};

const badge = {
  display: "inline-block",
  fontSize: 12,
  padding: "6px 10px",
  borderRadius: 999,
  background: "rgba(255,255,255,0.10)",
  border: "1px solid rgba(255,255,255,0.14)",
  opacity: 0.9,
};

const heroTitle = {
  fontSize: "clamp(28px, 4vw, 46px)",
  margin: "14px 0 10px",
  letterSpacing: 0.2,
};

const heroText = {
  margin: 0,
  maxWidth: 720,
  opacity: 0.85,
  lineHeight: 1.5,
};

const heroBtn = {
  position: "relative",
  display: "inline-block",
  marginTop: 18,
  padding: "12px 16px",
  borderRadius: 12,
  border: "1px solid rgba(255,255,255,0.18)",
  background: "linear-gradient(135deg, #5f5cff, #00d4ff)",
  color: "#071024",
  fontWeight: 900,
  textDecoration: "none",
  overflow: "hidden",
  boxShadow: "0 14px 30px rgba(0, 212, 255, 0.18)",
};

const btnGlow = {
  position: "absolute",
  inset: -80,
  background:
    "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.55), transparent 45%)",
  transform: "translateX(-30%)",
  opacity: 0.6,
};

const heroStatsRow = {
  display: "flex",
  flexWrap: "wrap",
  gap: 12,
  marginTop: 18,
};

const stat = {
  flex: "1 1 180px",
  padding: "12px 14px",
  borderRadius: 14,
  background: "rgba(10, 16, 34, 0.45)",
  border: "1px solid rgba(255,255,255,0.10)",
};

const statNumber = { fontWeight: 900, letterSpacing: 0.2 };
const statLabel = { fontSize: 12, opacity: 0.75, marginTop: 4 };

const section = { padding: "24px 16px 54px" };

const container = {
  width: "min(1100px, 94vw)",
  margin: "0 auto",
};

const sectionHead = { marginTop: 10, marginBottom: 16 };

const sectionTitle = { margin: 0, fontSize: 22, letterSpacing: 0.2 };

const sectionSub = { margin: "6px 0 0", opacity: 0.75, fontSize: 13 };

const productGridEnhance = {
  // Your .product-grid CSS will still control the grid;
  // this just adds spacing/feel if needed.
  gap: 18,
};

const emptyState = {
  marginTop: 18,
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
  padding: "18px 16px",
  textAlign: "center",
  opacity: 0.65,
  borderTop: "1px solid rgba(255,255,255,0.10)",
  background: "rgba(0,0,0,0.18)",
};

/*
Add once globally in index.css / App.css:

@keyframes float {
  0%, 100% { transform: translate(0px, 0px) scale(1); }
  50% { transform: translate(18px, -14px) scale(1.04); }
}
*/
