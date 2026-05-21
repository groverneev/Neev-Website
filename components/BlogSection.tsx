"use client";

import { SiSubstack } from "react-icons/si";

export default function BlogSection() {
  return (
    <section style={{ padding: "0 2rem" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        {/* Section label */}
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
          Writing
        </p>

        {/* Slim card */}
        <a
          href="https://techunpacked.substack.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit", display: "block" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1rem",
              border: "1px solid #e8e5df",
              borderRadius: 14,
              padding: "1.5rem 1.75rem",
              background: "#ffffff",
              cursor: "pointer",
              transition: "border-color 0.2s, box-shadow 0.2s, transform 0.2s",
              boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 4px 20px rgba(0,0,0,0.05)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#d4623a";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(212,98,58,0.12), 0 1px 3px rgba(0,0,0,0.04)";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#e8e5df";
              e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.04), 0 4px 20px rgba(0,0,0,0.05)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            {/* Left */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", minWidth: 0 }}>
              <SiSubstack size={17} color="#9e9a96" style={{ flexShrink: 0 }} />
              <div style={{ minWidth: 0 }}>
                <span
                  style={{
                    fontSize: 17,
                    fontWeight: 600,
                    color: "#1a1a1a",
                    display: "block",
                  }}
                >
                  Tech Unpacked
                </span>
                <span
                  style={{
                    fontSize: 15,
                    color: "#6b6762",
                    display: "block",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  Guides and deep dives on AI, robotics, and software.
                </span>
              </div>
            </div>

            {/* Right: badge + arrow */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexShrink: 0 }}>
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 500,
                  color: "#9e9a96",
                  border: "1px solid #e8e5df",
                  borderRadius: 5,
                  padding: "0.2rem 0.6rem",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                Newsletter
              </span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#9e9a96"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
