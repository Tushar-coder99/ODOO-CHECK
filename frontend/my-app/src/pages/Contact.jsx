import React, { useMemo, useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const canSubmit = useMemo(() => {
    return (
      formData.name.trim().length >= 2 &&
      formData.email.trim().length > 0 &&
      formData.message.trim().length >= 5
    );
  }, [formData]);

  const handleChange = (e) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!canSubmit) return;

    setIsSubmitting(true);
    try {
      alert("Message sent! We will get back to you soon.");
      await new Promise((r) => setTimeout(r, 500));
      setFormData({ name: "", email: "", message: "" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={page}>
      {/* Animated blobs */}
      <div style={{ ...blob, ...blob1 }} />
      <div style={{ ...blob, ...blob2 }} />
      <div style={{ ...blob, ...blob3 }} />

      <div style={card}>
        <div style={brandRow}>
          <div style={logoDot} />
          <div style={brandText}>
            <div style={brandName}>MyShop</div>
            <div style={brandTag}>Support & inquiries</div>
          </div>
        </div>

        <h2 style={title}>Contact Us</h2>
        <p style={subTitle}>We’d love to hear from you. Send us a message!</p>

        <form onSubmit={handleSubmit} style={form}>
          <div style={field}>
            <label style={label}>Name</label>
            <div style={inputWrap}>
              <span style={icon} aria-hidden="true">👤</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={input}
                placeholder="Your name"
                autoComplete="name"
              />
            </div>
          </div>

          <div style={field}>
            <label style={label}>Email</label>
            <div style={inputWrap}>
              <span style={icon} aria-hidden="true">✉</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={input}
                placeholder="you@example.com"
                autoComplete="email"
              />
            </div>
          </div>

          <div style={field}>
            <label style={label}>Message</label>
            <div style={{ ...inputWrap, alignItems: "stretch" }}>
              <span style={{ ...icon, paddingTop: 12 }}>💬</span>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                style={textarea}
                placeholder="How can we help you?"
              />
            </div>
          </div>

          <button
            type="submit"
            style={{ ...btn, ...(canSubmit ? null : btnDisabled) }}
            disabled={!canSubmit || isSubmitting}
          >
            <span style={btnGlow} />
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>

        <p style={footNote}>© 2026 MyShop E‑Commerce</p>
      </div>
    </div>
  );
};

/* ---------- Styles (same theme as Login/Register) ---------- */

const page = {
  minHeight: "100vh",
  display: "grid",
  placeItems: "center",
  position: "relative",
  overflow: "hidden",
  padding: 20,
  background:
    "radial-gradient(1200px 700px at 15% 10%, rgba(95, 92, 255, 0.28), transparent 55%)," +
    "radial-gradient(1000px 600px at 85% 20%, rgba(0, 212, 255, 0.24), transparent 55%)," +
    "linear-gradient(135deg, #0b1020, #0b1227 45%, #08101f)",
};

const blob = {
  position: "absolute",
  width: 420,
  height: 420,
  borderRadius: "50%",
  filter: "blur(18px)",
  opacity: 0.55,
  animation: "float 9s ease-in-out infinite",
};

const blob1 = {
  left: -120,
  top: -140,
  background: "radial-gradient(circle at 30% 30%, #7c3aed, transparent 60%)",
};

const blob2 = {
  right: -160,
  top: -80,
  background: "radial-gradient(circle at 30% 30%, #06b6d4, transparent 60%)",
  animationDelay: "1.8s",
};

const blob3 = {
  left: "20%",
  bottom: -220,
  background: "radial-gradient(circle at 30% 30%, #22c55e, transparent 60%)",
  animationDelay: "3s",
};

const card = {
  width: "min(460px, 92vw)",
  padding: "26px 22px",
  borderRadius: 18,
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.12)",
  boxShadow:
    "0 20px 60px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.08)",
  backdropFilter: "blur(14px)",
  WebkitBackdropFilter: "blur(14px)",
  color: "#eaf0ff",
};

const brandRow = {
  display: "flex",
  alignItems: "center",
  gap: 12,
  marginBottom: 12,
};

const logoDot = {
  width: 14,
  height: 14,
  borderRadius: 999,
  background: "linear-gradient(135deg, #5f5cff, #00d4ff)",
  boxShadow: "0 0 18px rgba(0, 212, 255, 0.35)",
};

const brandText = { lineHeight: 1.1 };
const brandName = { fontWeight: 800, letterSpacing: 0.3 };
const brandTag = { fontSize: 12, opacity: 0.75, marginTop: 3 };

const title = { fontSize: 26, margin: "10px 0 6px", letterSpacing: 0.2 };

const subTitle = { margin: "0 0 18px", opacity: 0.8, fontSize: 13 };

const form = { display: "flex", flexDirection: "column", gap: 14 };

const field = { display: "flex", flexDirection: "column", gap: 8 };

const label = { fontSize: 12, opacity: 0.8 };

const inputWrap = {
  position: "relative",
  display: "flex",
  borderRadius: 12,
  border: "1px solid rgba(255,255,255,0.14)",
  background: "rgba(10, 16, 34, 0.6)",
  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
};

const icon = {
  width: 42,
  display: "grid",
  placeItems: "center",
  opacity: 0.75,
  fontSize: 14,
};

const input = {
  width: "100%",
  border: "none",
  outline: "none",
  background: "transparent",
  padding: "12px 12px 12px 0",
  color: "#eaf0ff",
  fontSize: 14,
};

const textarea = {
  width: "100%",
  border: "none",
  outline: "none",
  background: "transparent",
  padding: "12px 12px 12px 0",
  color: "#eaf0ff",
  fontSize: 14,
  resize: "vertical",
  minHeight: 110,
};

const btn = {
  marginTop: 8,
  position: "relative",
  overflow: "hidden",
  padding: "12px 14px",
  borderRadius: 12,
  border: "1px solid rgba(255,255,255,0.18)",
  background: "linear-gradient(135deg, #5f5cff, #00d4ff)",
  color: "#071024",
  fontWeight: 800,
  letterSpacing: 0.2,
  cursor: "pointer",
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

const btnDisabled = {
  opacity: 0.5,
  cursor: "not-allowed",
  filter: "grayscale(20%)",
};

const footNote = { margin: "14px 0 0", fontSize: 12, opacity: 0.6 };

export default Contact;

/*
Add once globally in index.css / App.css:

@keyframes float {
  0%, 100% { transform: translate(0px, 0px) scale(1); }
  50% { transform: translate(18px, -14px) scale(1.04); }
}
*/
