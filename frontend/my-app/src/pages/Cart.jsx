import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Cart = () => {
  const {
    cartItemsArray,
    cartTotal,
    updateQuantity,
    removeFromCart,
  } = useContext(ShopContext);

  if (cartItemsArray.length === 0) {
    return (
      <section className="cartPage" style={page}>
        <div style={container}>
          <div style={emptyCard}>
            <div style={emptyIcon} aria-hidden="true">
              🛒
            </div>
            <h2 style={emptyTitle}>Your cart is empty</h2>
            <p style={emptyText}>
              Add some products to get started!
            </p>
            <Link to="/products" style={primaryBtn}>
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="cartPage" style={page}>
      <div style={container}>
        <header style={headerCard}>
          <h1 style={title}>Shopping Cart</h1>
          <p style={subtitle}>
            Review items, update quantity, and checkout.
          </p>
        </header>

        <div style={layout}>
          <div style={itemsCol}>
            {cartItemsArray.map(({ product, quantity }) => (
              <article key={product._id} style={itemCard}>
                <img
                  src={product.image}
                  alt={product.name}
                  style={itemImg}
                />
                <div style={itemBody}>
                  <h3 style={itemTitle}>{product.name}</h3>
                  <p style={itemPrice}>₹{product.price}</p>
                  <div style={controls}>
                    <button
                      type="button"
                      style={qtyBtn}
                      onClick={() =>
                        updateQuantity(product._id, quantity - 1)
                      }
                    >
                      −
                    </button>
                    <span style={qtyLabel}>{quantity}</span>
                    <button
                      type="button"
                      style={qtyBtn}
                      onClick={() =>
                        updateQuantity(product._id, quantity + 1)
                      }
                    >
                      +
                    </button>
                    <button
                      type="button"
                      style={removeBtn}
                      onClick={() => removeFromCart(product._id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <aside style={summaryCard}>
            <h2 style={summaryTitle}>Order Summary</h2>
            <p style={summaryLine}>
              Items:{" "}
              <strong>
                {cartItemsArray.reduce(
                  (sum, i) => sum + i.quantity,
                  0
                )}
              </strong>
            </p>
            <p style={summaryLine}>
              Total: <strong>₹{cartTotal}</strong>
            </p>
            <Link to="/checkout" style={primaryBtn}>
              Proceed to Checkout
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Cart;

/* Inline styles matching your glassmorphism theme */

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

const title = { margin: 0, fontSize: 24 };
const subtitle = { margin: "6px 0 0", opacity: 0.78, fontSize: 13 };

const layout = {
  display: "grid",
  gridTemplateColumns: "minmax(0, 2.3fr) minmax(260px, 1fr)",
  gap: 18,
};

const itemsCol = {
  display: "flex",
  flexDirection: "column",
  gap: 12,
};

const itemCard = {
  display: "flex",
  gap: 14,
  padding: 12,
  borderRadius: 14,
  background: "rgba(15,23,42,0.95)",
  border: "1px solid rgba(148,163,184,0.4)",
  boxShadow: "0 12px 30px rgba(0,0,0,0.5)",
};

const itemImg = {
  width: 90,
  height: 90,
  borderRadius: 10,
  objectFit: "cover",
};

const itemBody = { flex: 1 };
const itemTitle = { margin: 0, fontSize: 16, fontWeight: 600 };
const itemPrice = {
  margin: "4px 0 8px",
  fontSize: 15,
  fontWeight: 700,
  color: "#a5b4fc",
};

const controls = {
  display: "flex",
  alignItems: "center",
  gap: 8,
};

const qtyBtn = {
  width: 28,
  height: 28,
  borderRadius: 8,
  border: "1px solid rgba(148,163,184,0.8)",
  background: "rgba(15,23,42,0.8)",
  color: "#e5e7eb",
  cursor: "pointer",
};

const qtyLabel = { minWidth: 22, textAlign: "center", fontWeight: 600 };

const removeBtn = {
  marginLeft: "auto",
  padding: "6px 10px",
  borderRadius: 999,
  border: "none",
  background: "rgba(239,68,68,0.96)",
  color: "#fff",
  fontSize: 12,
  cursor: "pointer",
};

const summaryCard = {
  borderRadius: 16,
  padding: 16,
  background: "rgba(15,23,42,0.96)",
  border: "1px solid rgba(148,163,184,0.45)",
  boxShadow: "0 16px 40px rgba(0,0,0,0.55)",
  display: "flex",
  flexDirection: "column",
  gap: 8,
};

const summaryTitle = { margin: 0, fontSize: 18 };
const summaryLine = { margin: 0, fontSize: 14 };

const primaryBtn = {
  marginTop: 12,
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

const emptyCard = {
  marginTop: 40,
  padding: "32px 18px 28px",
  borderRadius: 18,
  background: "rgba(15,23,42,0.95)",
  border: "1px solid rgba(148,163,184,0.45)",
  textAlign: "center",
  boxShadow: "0 18px 50px rgba(0,0,0,0.55)",
};

const emptyIcon = { fontSize: 34, marginBottom: 10 };
const emptyTitle = { margin: "0 0 6px", fontSize: 20 };
const emptyText = { margin: "0 0 16px", opacity: 0.8, fontSize: 13 };
