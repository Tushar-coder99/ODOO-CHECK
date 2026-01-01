import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    address: "",
    city: "",
    postalCode: "",
    country: "",
    payment: "card",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // simple validation
    if (!form.address || !form.city || !form.postalCode || !form.country) {
      alert("Please fill all address fields.");
      return;
    }
    navigate("/order-success");
  };

  return (
    <section style={page}>
      {/* background blobs */}
      <div style={{ ...blob, ...blob1 }} />
      <div style={{ ...blob, ...blob2 }} />

      <div style={container}>
        <header style={headerCard}>
          <h1 style={title}>Checkout</h1>
          <p style={subtitle}>Securely complete your purchase in one step.</p>
        </header>

        <div style={layout}>
          {/* Left: form */}
          <form style={formCard} onSubmit={handleSubmit}>
            <h2 style={sectionTitle}>Shipping Address</h2>

            <label style={label}>
              Address
              <input
                style={input}
                type="text"
                name="address"
                value={form.address}
                onChange={handleChange}
                placeholder="Street and house number"
                required
              />
            </label>

            <div style={twoCol}>
              <label style={labelHalf}>
                City
                <input
                  style={input}
                  type="text"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  placeholder="e.g. Ahmedabad"
                  required
                />
              </label>
              <label style={labelHalf}>
                Postal Code
                <input
                  style={input}
                  type="text"
                  name="postalCode"
                  value={form.postalCode}
                  onChange={handleChange}
                  placeholder="e.g. 380001"
                  required
                />
              </label>
            </div>

            <label style={label}>
              Country
              <input
                style={input}
                type="text"
                name="country"
                value={form.country}
                onChange={handleChange}
                placeholder="e.g. India"
                required
              />
            </label>

            <h2 style={{ ...sectionTitle, marginTop: 18 }}>Payment Method</h2>

            <div style={paymentRow}>
              <label style={radioCard(form.payment === "card")}>
                <input
                  type="radio"
                  name="payment"
                  value="card"
                  checked={form.payment === "card"}
                  onChange={handleChange}
                  style={radio}
                />
                <div>
                  <div style={radioTitle}>UPI / Card</div>
                  <div style={radioText}>
                    Pay securely using UPI or major credit/debit cards.
                  </div>
                </div>
              </label>

              <label style={radioCard(form.payment === "cod")}>
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={form.payment === "cod"}
                  onChange={handleChange}
                  style={radio}
                />
                <div>
                  <div style={radioTitle}>Cash on Delivery</div>
                  <div style={radioText}>
                    Pay with cash or card at your doorstep.
                  </div>
                </div>
              </label>
            </div>

            <button type="submit" style={primaryBtn}>
              Place Order
            </button>
            <p style={secureText}>256-bit SSL encryption · Trusted payments</p>
          </form>

          {/* Right: mini summary placeholder */}
          <aside style={summaryCard}>
            <h2 style={summaryTitle}>Order Summary</h2>
            <p style={summaryLine}>Items total: <strong>₹XXXX</strong></p>
            <p style={summaryLine}>Shipping: <strong>Free</strong></p>
            <p style={summaryLine}>
              Estimated delivery: <strong>3–5 business days</strong>
            </p>
            <p style={summaryHint}>
              Exact amount and items will be shown from the cart in a real
              checkout flow.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Checkout;

/* ---------- Styles ---------- */

const page = {
  minHeight: "100vh",
  padding: "26px 16px 40px",
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
  pointerEvents: "none",
  animation: "float 9s ease-in-out infinite",
};
const blob1 = {
  left: -180,
  top: -200,
  background: "radial-gradient(circle at 30% 30%, #7c3aed, transparent 60%)",
};
const blob2 = {
  right: -200,
  bottom: -260,
  background: "radial-gradient(circle at 30% 30%, #06b6d4, transparent 60%)",
};

const container = { width: "min(1100px, 94vw)", margin: "0 auto" };

const headerCard = {
  borderRadius: 18,
  padding: "14px 16px",
  marginBottom: 18,
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.12)",
  boxShadow: "0 18px 50px rgba(0,0,0,0.35)",
  backdropFilter: "blur(14px)",
  WebkitBackdropFilter: "blur(14px)",
};

const title = { margin: 0, fontSize: 24, letterSpacing: 0.3 };
const subtitle = { margin: "4px 0 0", opacity: 0.8, fontSize: 13 };

const layout = {
  display: "grid",
  gridTemplateColumns: "minmax(0, 1.7fr) minmax(260px, 1fr)",
  gap: 18,
};

const formCard = {
  borderRadius: 18,
  padding: 18,
  background: "rgba(15,23,42,0.96)",
  border: "1px solid rgba(148,163,184,0.45)",
  boxShadow: "0 18px 50px rgba(0,0,0,0.55)",
  display: "flex",
  flexDirection: "column",
  gap: 12,
};

const sectionTitle = {
  margin: "0 0 6px",
  fontSize: 16,
  fontWeight: 700,
};

const label = {
  display: "flex",
  flexDirection: "column",
  gap: 4,
  fontSize: 13,
};
const labelHalf = { ...label, flex: 1 };

const input = {
  borderRadius: 10,
  border: "1px solid rgba(148,163,184,0.6)",
  padding: "8px 10px",
  background: "rgba(15,23,42,0.9)",
  color: "#e5e7eb",
  fontSize: 13,
  outline: "none",
};
const twoCol = {
  display: "flex",
  gap: 10,
  flexWrap: "wrap",
};

const paymentRow = {
  display: "flex",
  flexDirection: "column",
  gap: 8,
  marginTop: 4,
};

const radioCard = (active) => ({
  display: "flex",
  gap: 10,
  padding: "8px 10px",
  borderRadius: 12,
  border: active
    ? "1px solid rgba(59,130,246,0.9)"
    : "1px solid rgba(148,163,184,0.5)",
  background: active
    ? "rgba(37,99,235,0.18)"
    : "rgba(15,23,42,0.8)",
  cursor: "pointer",
  alignItems: "flex-start",
});

const radio = { marginTop: 4, marginRight: 4 };

const radioTitle = { fontSize: 13, fontWeight: 600 };
const radioText = { fontSize: 12, opacity: 0.8 };

const primaryBtn = {
  marginTop: 14,
  width: "100%",
  padding: "11px 14px",
  borderRadius: 999,
  border: "none",
  background:
    "linear-gradient(135deg, rgba(34,197,94,0.98), rgba(22,163,74,0.98))",
  color: "#ecfdf5",
  fontWeight: 700,
  fontSize: 14,
  cursor: "pointer",
  boxShadow: "0 14px 40px rgba(34,197,94,0.4)",
};

const secureText = {
  marginTop: 6,
  fontSize: 11,
  opacity: 0.7,
  textAlign: "center",
};

const summaryCard = {
  borderRadius: 18,
  padding: 16,
  background: "rgba(15,23,42,0.96)",
  border: "1px solid rgba(148,163,184,0.45)",
  boxShadow: "0 16px 40px rgba(0,0,0,0.55)",
};

const summaryTitle = { margin: "0 0 10px", fontSize: 16 };
const summaryLine = { margin: "2px 0", fontSize: 13 };
const summaryHint = { marginTop: 10, fontSize: 11, opacity: 0.75 };
