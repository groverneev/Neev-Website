"use client";
import { useState } from "react";

const navLinks = [
  { href: "https://techunpacked.substack.com", label: "Blog", external: true },
  { href: "/#projects", label: "Projects", external: false },
  { href: "/#contact", label: "Contact", external: false },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav
      style={{
        background: "rgba(250, 249, 247, 0.90)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(0,0,0,0.07)",
        position: "sticky",
        top: 0,
        zIndex: 50,
        width: "100%",
      }}
    >
      <div
        style={{
          maxWidth: 680,
          margin: "0 auto",
          padding: "0 1.5rem",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 56,
          }}
        >
          {/* Logo */}
          <a
            href="/"
            style={{
              fontWeight: 600,
              fontSize: 15,
              color: "#1a1a1a",
              textDecoration: "none",
              letterSpacing: "-0.01em",
            }}
          >
            Neev Grover
          </a>

          {/* Desktop nav links */}
          <ul
            className="navbar-desktop"
            style={{
              listStyle: "none",
              display: "flex",
              gap: 24,
              margin: 0,
              padding: 0,
              alignItems: "center",
            }}
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  {...(link.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  style={{
                    color: "#6b6762",
                    textDecoration: "none",
                    fontWeight: 500,
                    fontSize: 14,
                    transition: "color 0.15s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#1a1a1a")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#6b6762")
                  }
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            className="navbar-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            style={{
              display: "none",
              padding: 6,
              borderRadius: 6,
              background: "none",
              border: "none",
              color: "#6b6762",
              cursor: "pointer",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {mobileMenuOpen ? (
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div
            className="navbar-mobile-menu"
            style={{
              borderTop: "1px solid rgba(0,0,0,0.07)",
              paddingTop: 12,
              paddingBottom: 12,
              display: "none",
            }}
          >
            <nav style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  {...(link.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    color: "#6b6762",
                    textDecoration: "none",
                    fontWeight: 500,
                    fontSize: 15,
                    padding: "8px 6px",
                    borderRadius: 6,
                    transition: "color 0.15s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#1a1a1a")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#6b6762")
                  }
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 640px) {
          .navbar-desktop { display: none !important; }
          .navbar-mobile-toggle { display: flex !important; }
          .navbar-mobile-menu { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
