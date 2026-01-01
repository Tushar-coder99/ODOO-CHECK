import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const canSubmit = useMemo(() => {
    return email.trim().length > 0 && password.trim().length >= 6;
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!canSubmit) return;

    setIsSubmitting(true);
    try {
      // Replace with API call
      console.log("Login logic here:", email, password);
      await new Promise((r) => setTimeout(r, 800));
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
            <div style={brandTag}>Sign in to continue</div>
          </div>
        </div>

        <h2 style={title}>Login</h2>

        <form onSubmit={handleSubmit} style={form}>
          <div style={field}>
            <label style={label}>Email</label>
            <div style={inputWrap}>
              <span style={icon} aria-hidden="true">✉</span>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={input}
                autoComplete="email"
              />
            </div>
          </div>

          <div style={field}>
            <label style={label}>Password</label>
            <div style={inputWrap}>
              <span style={icon} aria-hidden="true">🔒</span>
              <input
                type={showPass ? "text" : "password"}
                placeholder="Minimum 6 characters"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ ...input, paddingRight: 46 }}
                autoComplete="current-password"
              />
              <button
                type="button"
                onClick={() => setShowPass((s) => !s)}
                style={eyeBtn}
                aria-label={showPass ? "Hide password" : "Show password"}
                title={showPass ? "Hide password" : "Show password"}
              >
                {showPass ? "🙈" : "👁"}
              </button>
            </div>
          </div>

          <div style={rowBetween}>
            <label style={rememberMe}>
              <input type="checkbox" style={checkbox} />
              Remember me
            </label>
            <Link to="/forgot-password" style={linkSmall}>
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            style={{
              ...btn,
              ...(canSubmit ? null : btnDisabled),
            }}
            disabled={!canSubmit || isSubmitting}
          >
            <span style={btnGlow} />
            {isSubmitting ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <div style={divider}>
          <span style={dividerLine} />
          <span style={dividerText}>New here?</span>
          <span style={dividerLine} />
        </div>

        <p style={bottomText}>
          New Customer?{" "}
          <Link to="/register" style={link}>
            Create an account
          </Link>
        </p>

        <p style={footNote}>© 2026 MyShop E‑Commerce</p>
      </div>
    </div>
  );
};

/* ---------- Styles (inline) ---------- */

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
  width: "min(420px, 92vw)",
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

const title = {
  fontSize: 26,
  margin: "10px 0 18px",
  letterSpacing: 0.2,
};

const form = { display: "flex", flexDirection: "column", gap: 14 };

const field = { display: "flex", flexDirection: "column", gap: 8 };

const label = {
  fontSize: 12,
  opacity: 0.8,
};

const inputWrap = {
  position: "relative",
  display: "flex",
  alignItems: "center",
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

const eyeBtn = {
  position: "absolute",
  right: 8,
  top: "50%",
  transform: "translateY(-50%)",
  border: "none",
  background: "rgba(255,255,255,0.08)",
  color: "#eaf0ff",
  borderRadius: 10,
  width: 36,
  height: 34,
  cursor: "pointer",
};

const rowBetween = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: 12,
  marginTop: 2,
};

const rememberMe = { fontSize: 12, opacity: 0.85, display: "flex", gap: 8 };
const checkbox = { accentColor: "#5f5cff" };

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

const divider = {
  display: "flex",
  alignItems: "center",
  gap: 10,
  margin: "18px 0 10px",
  opacity: 0.85,
};

const dividerLine = {
  height: 1,
  flex: 1,
  background: "rgba(255,255,255,0.14)",
};

const dividerText = { fontSize: 12, opacity: 0.8 };

const link = {
  color: "#a5b4fc",
  textDecoration: "none",
  fontWeight: 700,
};

const linkSmall = {
  color: "#9ad9ff",
  textDecoration: "none",
  fontSize: 12,
};

const bottomText = { margin: 0, fontSize: 13, opacity: 0.95 };
const footNote = { margin: "14px 0 0", fontSize: 12, opacity: 0.6 };

export default Login;

/*
Optional (recommended): add this CSS once globally for smooth blob animation.

@keyframes float {
  0%, 100% { transform: translate(0px, 0px) scale(1); }
  50% { transform: translate(18px, -14px) scale(1.04); }
}
*/
