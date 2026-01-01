import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    const q = Number(quantity) || 0;
    if (q <= 0) {
      removeFromCart(id);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: q } : item))
    );
  };

  const totalPrice = useMemo(() => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  }, [cartItems]);

  return (
    <div style={page}>
      {/* Blobs */}
      <div style={{ ...blob, ...blob1 }} />
      <div style={{ ...blob, ...blob2 }} />
      <div style={{ ...blob, ...blob3 }} />

      <div style={container}>
        <div style={headCard}>
          <h2 style={title}>Shopping Cart</h2>
          <p style={subTitle}>Review items, update quantity, and checkout.</p>
        </div>

        {cartItems.length === 0 ? (
          <div style={emptyState}>
            <div style={emptyIcon} aria-hidden="true">🛒</div>
            <h3 style={emptyTitle}>Your cart is empty</h3>
            <p style={emptyText}>Add some products to get started!</p>
            <Link to="/products" style={primaryBtn}>
              <span style={btnGlow} />
              Browse Products
            </Link>
          </div>
        ) : (
          <div style={layout}>
            {/* Items */}
            <div style={itemsCol}>
              {cartItems.map((item) => (
                <div key={item.id} style={itemCard}>
                  <div style={imgWrap}>
                    <img src={item.image} alt={item.name} style={img} />
                  </div>

                  <div style={itemInfo}>
                    <h3 style={itemTitle}>{item.name}</h3>
                    <div style={itemPrice}>${item.price}</div>
                    <div style={miniMeta}>Fast delivery • Secure payment</div>
                  </div>

                  <div style={controls}>
                    <div style={stepper}>
                      <button
                        type="button"
                        style={stepBtn}
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>

                      <span style={qtyText}>{item.quantity}</span>

                      <button
                        type="button"
                        style={stepBtn}
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>

                    <button
                      type="button"
                      style={removeBtn}
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <aside style={summaryCol}>
              <div style={summaryCard}>
                <h3 style={summaryTitle}>Order Summary</h3>

                <div style={summaryRow}>
                  <span style={sumLabel}>Items</span>
                  <span style={sumValue}>{cartItems.length}</span>
                </div>

                <div style={summaryRow}>
                  <span style={sumLabel}>Total</span>
                  <span style={sumTotal}>${totalPrice}</span>
                </div>

                <Link to="/checkout" style={checkoutBtn}>
                  <span style={btnGlow} />
                  Proceed to Checkout
                </Link>

                <div style={summaryNote}>
                  By proceeding, you agree to our terms & policies.
                </div>
              </div>
            </aside>
          </div>
        )}

        <footer style={footer}>© 2026 MyShop E‑Commerce. All rights reserved.</footer>
      </div>
    </div>
  );
};

export default Cart;

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

const layout = {
  display: "grid",
  gridTemplateColumns: "1.6fr 0.8fr",
  gap: 16,
};

const itemsCol = { minWidth: 0 };
const summaryCol = { minWidth: 0 };

const itemCard = {
  display: "grid",
  gridTemplateColumns: "110px 1fr auto",
  gap: 14,
  alignItems: "center",
  padding: 14,
  borderRadius: 18,
  marginBottom: 12,
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.10)",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
};

const imgWrap = {
  width: 110,
  height: 90,
  borderRadius: 14,
  overflow: "hidden",
  background: "rgba(10, 16, 34, 0.5)",
  border: "1px solid rgba(255,255,255,0.10)",
};

const img = { width: "100%", height: "100%", objectFit: "cover", display: "block" };

const itemInfo = { minWidth: 0 };
const itemTitle = { margin: 0, fontSize: 15, fontWeight: 900 };
const itemPrice = {
  marginTop: 6,
  fontWeight: 950,
  background: "linear-gradient(135deg, #a5b4fc, #9ad9ff)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
};
const miniMeta = { marginTop: 6, fontSize: 12, opacity: 0.7 };

const controls = {
  display: "flex",
  flexDirection: "column",
  gap: 10,
  alignItems: "flex-end",
};

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
  height: 38,
  border: "none",
  cursor: "pointer",
  background: "transparent",
  color: "#eaf0ff",
  fontSize: 18,
};

const qtyText = { width: 40, textAlign: "center", fontWeight: 950 };

const removeBtn = {
  border: "1px solid rgba(255,255,255,0.12)",
  background: "rgba(255,255,255,0.06)",
  color: "#eaf0ff",
  borderRadius: 12,
  padding: "9px 12px",
  cursor: "pointer",
  fontWeight: 850,
  fontSize: 13,
};

const summaryCard = {
  position: "sticky",
  top: 86, // below navbar
  padding: 16,
  borderRadius: 18,
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.12)",
  boxShadow: "0 18px 50px rgba(0,0,0,0.35)",
  backdropFilter: "blur(14px)",
  WebkitBackdropFilter: "blur(14px)",
};

const summaryTitle = { margin: 0, fontSize: 16, fontWeight: 950 };

const summaryRow = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: 12,
  paddingTop: 12,
  borderTop: "1px solid rgba(255,255,255,0.10)",
};

const sumLabel = { opacity: 0.75, fontSize: 13 };
const sumValue = { fontWeight: 900, fontSize: 13 };

const sumTotal = {
  fontWeight: 950,
  background: "linear-gradient(135deg, #a5b4fc, #9ad9ff)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
};

const checkoutBtn = {
  marginTop: 14,
  display: "block",
  textAlign: "center",
  position: "relative",
  overflow: "hidden",
  padding: "12px 14px",
  borderRadius: 14,
  border: "1px solid rgba(255,255,255,0.18)",
  background: "linear-gradient(135deg, #5f5cff, #00d4ff)",
  color: "#071024",
  fontWeight: 950,
  letterSpacing: 0.2,
  textDecoration: "none",
  boxShadow: "0 14px 30px rgba(0, 212, 255, 0.18)",
};

const primaryBtn = { ...checkoutBtn, display: "inline-block" };

const btnGlow = {
  position: "absolute",
  inset: -80,
  background: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.55), transparent 45%)",
  transform: "translateX(-30%)",
  opacity: 0.6,
  pointerEvents: "none",
};

const summaryNote = { marginTop: 12, fontSize: 12, opacity: 0.7 };

const emptyState = {
  marginTop: 16,
  padding: "34px 18px",
  borderRadius: 18,
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.10)",
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)",
  textAlign: "center",
};

const emptyIcon = { fontSize: 30, opacity: 0.9 };
const emptyTitle = { margin: "10px 0 6px" };
const emptyText = { margin: 0, opacity: 0.8 };

const footer = { marginTop: 22, padding: "16px 10px", textAlign: "center", opacity: 0.65 };

/*
Keep once globally in index.css / App.css:

@keyframes float {
  0%, 100% { transform: translate(0px, 0px) scale(1); }
  50% { transform: translate(18px, -14px) scale(1.04); }
}

Optional responsive (recommended):
Use class + CSS media query to switch layout to 1 column on mobile.
*/
