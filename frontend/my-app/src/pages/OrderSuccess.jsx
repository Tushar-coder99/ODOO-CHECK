import React from "react";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <section style={page}>
      <div style={container}>
        <div style={card}>
          <div style={iconCircle}>
            <span style={check}>✓</span>
          </div>
          <h1 style={title}>Order placed successfully!</h1>
          <p style={text}>
            Thank you for shopping with MyShop. A confirmation email with your
            order details will be sent shortly.
          </p>
          <div style={metaRow}>
            <span style={pill}>Order ID: #MYSHOP‑123456</span>
            <span style={pillSoft}>Estimated delivery: 3–5 business days</span>
          </div>
          <div style={actions}>
            <Link to="/products" style={primaryBtn}>
              Continue shopping
            </Link>
            <Link to="/orders" style={secondaryBtn}>
              View my orders
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderSuccess;

/* ---------- Styles ---------- */

const page = {
  minHeight: "100vh",
  padding: "40px 16px",
  background:
    "radial-gradient(1200px 700px at 15% 10%, rgba(95, 92, 255, 0.28), transparent 55%)," +
    "radial-gradient(1000px 600px at 85% 20%, rgba(0, 212, 255, 0.24), transparent 55%)," +
    "linear-gradient(135deg, #0b1020, #0b1227 45%, #08101f)",
  color: "#eaf0ff",
};

const container = {
  width: "min(640px, 94vw)",
  margin: "0 auto",
};

const card = {
  borderRadius: 22,
  padding: "28px 20px 26px",
  textAlign: "center",
  background: "rgba(15,23,42,0.96)",
  border: "1px solid rgba(148,163,184,0.6)",
  boxShadow: "0 24px 70px rgba(0,0,0,0.7)",
  backdropFilter: "blur(18px)",
  WebkitBackdropFilter: "blur(18px)",
};

const iconCircle = {
  width: 66,
  height: 66,
  borderRadius: "50%",
  margin: "0 auto 14px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background:
    "radial-gradient(circle at 30% 30%, #bbf7d0, #22c55e)",
  boxShadow: "0 0 30px rgba(34,197,94,0.7)",
};

const check = {
  fontSize: 32,
  color: "#052e16",
  fontWeight: 800,
};

const title = {
  margin: "4px 0 8px",
  fontSize: 24,
  letterSpacing: 0.2,
};

const text = {
  margin: "0 0 12px",
  fontSize: 14,
  opacity: 0.85,
};

const metaRow = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: 8,
  marginBottom: 18,
};

const pill = {
  padding: "6px 10px",
  borderRadius: 999,
  background: "rgba(15,23,42,0.8)",
  border: "1px solid rgba(148,163,184,0.8)",
  fontSize: 12,
};

const pillSoft = {
  padding: "6px 10px",
  borderRadius: 999,
  background: "rgba(148,163,184,0.2)",
  border: "1px solid rgba(148,163,184,0.4)",
  fontSize: 12,
};

const actions = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: 10,
  marginTop: 4,
};

const primaryBtn = {
  padding: "9px 18px",
  borderRadius: 999,
  border: "none",
  background:
    "linear-gradient(135deg, rgba(59,130,246,0.98), rgba(37,99,235,0.98))",
  color: "#f9fafb",
  fontSize: 13,
  fontWeight: 600,
  textDecoration: "none",
  cursor: "pointer",
};

const secondaryBtn = {
  padding: "9px 16px",
  borderRadius: 999,
  border: "1px solid rgba(148,163,184,0.85)",
  background: "rgba(15,23,42,0.8)",
  color: "#e5e7eb",
  fontSize: 13,
  fontWeight: 500,
  textDecoration: "none",
  cursor: "pointer",
};
