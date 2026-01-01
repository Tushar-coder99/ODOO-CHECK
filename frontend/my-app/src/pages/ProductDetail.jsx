import React, { useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../data";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p._id === id);

  const [qty, setQty] = useState(1);

  const inStock = true; // mock
  const safeQty = useMemo(() => Math.max(1, Number(qty) || 1), [qty]);

  if (!product) {
    return (
      <div style={page}>
        <div style={emptyCard}>
          <h2 style={{ margin: 0 }}>Product not found</h2>
          <p style={{ margin: "8px 0 0", opacity: 0.8 }}>
            The product you are looking for doesn’t exist.
          </p>
          <Link to="/" style={backLink}>← Back to Products</Link>
        </div>
      </div>
    );
  }

  return (
    <div style={page}>
      {/* Blobs */}
      <div style={{ ...blob, ...blob1 }} />
      <div style={{ ...blob, ...blob2 }} />
      <div style={{ ...blob, ...blob3 }} />

      <div style={wrap}>
        <div style={card}>
          {/* Left: image */}
          <div style={imgCol}>
            <div style={imgFrame}>
              <img src={product.image} alt={product.name} style={img} />
            </div>
          </div>

          {/* Right: info */}
          <div style={infoCol}>
            <Link to="/" style={backLink}>← Back to Products</Link>

            <h1 style={title}>{product.name}</h1>

            <div style={metaRow}>
              <span style={pill}>
                Status:{" "}
                <span style={{ color: inStock ? "#22c55e" : "#ef4444", fontWeight: 900 }}>
                  {inStock ? "In Stock" : "Out of Stock"}
                </span>
              </span>
              <span style={pillSoft}>Free returns</span>
              <span style={pillSoft}>Secure checkout</span>
            </div>

            <div style={priceRow}>
              <div style={price}>${product.price}</div>
              <div style={priceHint}>Inclusive of all taxes</div>
            </div>

            <p style={desc}>{product.description}</p>

            <div style={buyBox}>
              <div style={qtyRow}>
                <span style={qtyLabel}>Quantity</span>

                <div style={stepper}>
                  <button
                    type="button"
                    style={stepBtn}
                    onClick={() => setQty((q) => Math.max(1, (Number(q) || 1) - 1))}
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>

                  <input
                    type="number"
                    min="1"
                    value={safeQty}
                    onChange={(e) => setQty(e.target.value)}
                    style={qtyInput}
                  />

                  <button
                    type="button"
                    style={stepBtn}
                    onClick={() => setQty((q) => (Number(q) || 1) + 1)}
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                style={{ ...btn, ...(inStock ? null : btnDisabled) }}
                disabled={!inStock}
                onClick={() => alert(`Added ${safeQty} item(s) to cart!`)}
              >
                <span style={btnGlow} />
                Add to Cart
              </button>

              <div style={note}>
                Tip: add more items to unlock better combo offers.
              </div>
            </div>
          </div>
        </div>

        <footer style={footer}>© 2026 MyShop E‑Commerce. All rights reserved.</footer>
      </div>
    </div>
  );
};

export default ProductDetail;

/* ---------- Styles ---------- */

const page = {
  minHeight: "100vh",
  position: "relative",
  overflow: "hidden",
  padding: "24px 16px 40px",
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
  left: "10%",
  bottom: -320,
  background: "radial-gradient(circle at 30% 30%, #22c55e, transparent 60%)",
  animationDelay: "3s",
};

const wrap = { width: "min(1100px, 94vw)", margin: "0 auto" };

const card = {
  display: "grid",
  gridTemplateColumns: "1.1fr 1fr",
  gap: 22,
  padding: 18,
  borderRadius: 22,
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.12)",
  boxShadow: "0 20px 60px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.08)",
  backdropFilter: "blur(14px)",
  WebkitBackdropFilter: "blur(14px)",
};

const imgCol = { minWidth: 0 };
const imgFrame = {
  borderRadius: 18,
  overflow: "hidden",
  background: "rgba(10, 16, 34, 0.5)",
  border: "1px solid rgba(255,255,255,0.10)",
};
const img = { width: "100%", height: "100%", display: "block", objectFit: "cover" };

const infoCol = { minWidth: 0, padding: "4px 6px" };

const backLink = {
  display: "inline-block",
  marginBottom: 10,
  color: "#9ad9ff",
  textDecoration: "none",
  fontWeight: 800,
  fontSize: 13,
};

const title = { margin: "6px 0 10px", fontSize: "clamp(22px, 2.6vw, 36px)" };

const metaRow = { display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 12 };

const pill = {
  padding: "8px 10px",
  borderRadius: 999,
  background: "rgba(10,16,34,0.55)",
  border: "1px solid rgba(255,255,255,0.12)",
  fontSize: 12,
  opacity: 0.95,
};

const pillSoft = {
  padding: "8px 10px",
  borderRadius: 999,
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.10)",
  fontSize: 12,
  opacity: 0.85,
};

const priceRow = { margin: "4px 0 14px" };
const price = {
  fontSize: 28,
  fontWeight: 950,
  letterSpacing: 0.2,
  background: "linear-gradient(135deg, #a5b4fc, #9ad9ff)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
};
const priceHint = { marginTop: 4, fontSize: 12, opacity: 0.7 };

const desc = { margin: "0 0 18px", opacity: 0.85, lineHeight: 1.6 };

const buyBox = {
  borderRadius: 18,
  padding: 14,
  background: "rgba(10,16,34,0.45)",
  border: "1px solid rgba(255,255,255,0.10)",
};

const qtyRow = { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 };
const qtyLabel = { fontSize: 12, opacity: 0.85, fontWeight: 800 };

const stepper = {
  display: "flex",
  alignItems: "center",
  borderRadius: 14,
  overflow: "hidden",
  border: "1px solid rgba(255,255,255,0.12)",
  background: "rgba(255,255,255,0.06)",
};

const stepBtn = {
  width: 42,
  height: 40,
  border: "none",
  cursor: "pointer",
  background: "transparent",
  color: "#eaf0ff",
  fontSize: 18,
};

const qtyInput = {
  width: 64,
  height: 40,
  border: "none",
  outline: "none",
  textAlign: "center",
  background: "transparent",
  color: "#eaf0ff",
  fontWeight: 900,
};

const btn = {
  marginTop: 14,
  width: "100%",
  position: "relative",
  overflow: "hidden",
  padding: "12px 14px",
  borderRadius: 14,
  border: "1px solid rgba(255,255,255,0.18)",
  background: "linear-gradient(135deg, #5f5cff, #00d4ff)",
  color: "#071024",
  fontWeight: 950,
  letterSpacing: 0.2,
  cursor: "pointer",
  boxShadow: "0 14px 30px rgba(0, 212, 255, 0.18)",
};

const btnGlow = {
  position: "absolute",
  inset: -80,
  background: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.55), transparent 45%)",
  transform: "translateX(-30%)",
  opacity: 0.6,
  pointerEvents: "none",
};

const btnDisabled = { opacity: 0.5, cursor: "not-allowed", filter: "grayscale(20%)" };

const note = { marginTop: 10, fontSize: 12, opacity: 0.7 };

const footer = {
  marginTop: 18,
  padding: "16px 10px",
  textAlign: "center",
  opacity: 0.65,
};

const emptyCard = {
  width: "min(520px, 92vw)",
  margin: "90px auto 0",
  padding: 22,
  borderRadius: 18,
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.12)",
  backdropFilter: "blur(14px)",
  WebkitBackdropFilter: "blur(14px)",
};

/*
Responsive: add this once globally (recommended) in CSS:

@media (max-width: 900px) {
  .YOUR_WRAPPER_CLASS_FOR_DETAIL_CARD { grid-template-columns: 1fr; }
}

Since this file uses inline styles, easiest is:
- wrap `card` with a className and move card styles to CSS,
OR
- keep as-is; it will still wrap but remain 2 columns.

Also keep your global keyframes (same as other pages):

@keyframes float {
  0%, 100% { transform: translate(0px, 0px) scale(1); }
  50% { transform: translate(18px, -14px) scale(1.04); }
}
*/
