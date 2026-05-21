"use client";

import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://formspree.io/f/xnnvbrzq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" style={{ padding: "0 1.5rem", scrollMarginTop: "72px" }}>
      <div style={{ maxWidth: 480, margin: "0 auto" }}>
        {/* Section label */}
        <p
          style={{
            fontSize: 13,
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            color: "#9e9a96",
            margin: "0 0 0.75rem",
          }}
        >
          Contact
        </p>

        <p
          style={{
            fontSize: 17,
            color: "#6b6762",
            margin: "0 0 2rem",
            lineHeight: 1.6,
          }}
        >
          Have a question or want to chat? Drop me a line.
        </p>

        {status === "success" ? (
          <div
            style={{
              border: "1px solid #e8e5df",
              borderRadius: 10,
              padding: "2rem 1.5rem",
              textAlign: "center",
              background: "#ffffff",
            }}
          >
            <svg
              width="40"
              height="40"
              fill="none"
              stroke="#22c55e"
              viewBox="0 0 24 24"
              style={{ margin: "0 auto 12px", display: "block" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p style={{ fontWeight: 600, marginBottom: 4, color: "#1a1a1a", fontSize: 16 }}>
              Message sent!
            </p>
            <p style={{ fontSize: 15, color: "#6b6762", margin: "0 0 14px" }}>
              I&apos;ll get back to you soon.
            </p>
            <button
              onClick={() => setStatus("idle")}
              style={{
                background: "none",
                border: "none",
                color: "#d4623a",
                textDecoration: "underline",
                fontSize: 14,
                cursor: "pointer",
              }}
            >
              Send another message
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: 12 }}
          >
            <div>
              <label style={labelStyle}>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                style={inputStyle}
              />
            </div>

            <div>
              <label style={labelStyle}>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your email"
                style={inputStyle}
              />
            </div>

            <div>
              <label style={labelStyle}>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Your message..."
                style={{ ...inputStyle, resize: "vertical" }}
              />
            </div>

            {status === "error" && (
              <div
                style={{
                  background: "#fff5f2",
                  border: "1px solid #f5c4b5",
                  color: "#c05530",
                  padding: "10px 14px",
                  borderRadius: 6,
                  fontSize: 14,
                }}
              >
                Something went wrong. Please try again or email me directly.
              </div>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              style={{
                width: "100%",
                background: "#d4623a",
                color: "#fff",
                fontWeight: 600,
                fontSize: 15,
                padding: "13px 16px",
                borderRadius: 8,
                border: "none",
                cursor: status === "loading" ? "not-allowed" : "pointer",
                opacity: status === "loading" ? 0.75 : 1,
                transition: "opacity 0.15s, background 0.15s",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
              }}
            >
              {status === "loading" && (
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  style={{ animation: "spin 1s linear infinite" }}
                >
                  <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                </svg>
              )}
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </section>
  );
}

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: 15,
  fontWeight: 500,
  color: "#1a1a1a",
  marginBottom: 5,
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 14px",
  borderRadius: 8,
  border: "1px solid #e8e5df",
  background: "#ffffff",
  color: "#1a1a1a",
  fontSize: 15,
  outline: "none",
  boxSizing: "border-box",
};
