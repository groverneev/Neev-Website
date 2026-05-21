"use client";

export default function NotFound() {
  return (
    <main
      style={{
        background: "radial-gradient(ellipse at 50% 0%, rgba(212,98,58,0.08) 0%, transparent 60%), #faf9f7",
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <p
          style={{
            fontSize: 13,
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            color: "#9e9a96",
            margin: "0 0 1.25rem",
          }}
        >
          404
        </p>
        <h1
          style={{
            fontSize: 52,
            fontWeight: 800,
            letterSpacing: "-0.04em",
            color: "#1a1a1a",
            margin: "0 0 12px",
            lineHeight: 1.1,
          }}
        >
          Page not found
        </h1>
        <p
          style={{
            fontSize: 17,
            color: "#6b6762",
            margin: "0 0 2.5rem",
            lineHeight: 1.7,
          }}
        >
          This page doesn&apos;t exist or has been moved.
        </p>
        <a
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            background: "#d4623a",
            color: "#fff",
            fontWeight: 600,
            fontSize: 15,
            padding: "12px 24px",
            borderRadius: 10,
            textDecoration: "none",
            transition: "opacity 0.15s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          ← Back home
        </a>
      </div>
    </main>
  );
}
