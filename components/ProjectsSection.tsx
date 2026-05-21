"use client";

import { FaBroom, FaLeaf, FaChartBar, FaHandshake } from "react-icons/fa6";

const projects = [
  {
    href: "https://earthdayartcontest.vercel.app",
    tag: "Art + Environment",
    icon: <FaLeaf size={15} color="#9e9a96" />,
    title: "Earth Day Art Contest",
    description:
      "An art competition for ages 5–17 celebrating Earth Day 2026, with prizes across two age groups.",
  },
  {
    href: "https://collegestatistics.org",
    tag: "Data Analytics",
    icon: <FaChartBar size={15} color="#9e9a96" />,
    title: "College Statistics",
    description:
      "A data visualization dashboard comparing universities using Common Data Set metrics over time.",
  },
  {
    href: "https://dunebroom.com",
    tag: "Robotics + AI",
    icon: <FaBroom size={15} color="#9e9a96" />,
    title: "DuneBroom",
    description:
      "An autonomous beach-cleaning robot using edge AI and computer vision to remove litter.",
  },
  {
    href: "https://buddybridge.us",
    tag: "Community",
    icon: <FaHandshake size={15} color="#9e9a96" />,
    title: "BuddyBridge",
    description:
      "A platform connecting elderly adults with teen volunteers for free, everyday task assistance.",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" style={{ padding: "0 2rem", scrollMarginTop: "80px" }}>
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
          Projects
        </p>

        {/* Grid */}
        <div
          className="projects-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1rem",
          }}
        >
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit", display: "block" }}
            >
              <div
                style={{
                  background: "#ffffff",
                  borderRadius: 14,
                  padding: "1.75rem",
                  border: "1px solid #e8e5df",
                  cursor: "pointer",
                  transition: "border-color 0.2s, box-shadow 0.2s, transform 0.2s",
                  height: "100%",
                  boxSizing: "border-box",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 4px 20px rgba(0,0,0,0.05)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#d4623a";
                  e.currentTarget.style.boxShadow = "0 4px 24px rgba(212,98,58,0.12), 0 1px 3px rgba(0,0,0,0.04)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#e8e5df";
                  e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.04), 0 4px 20px rgba(0,0,0,0.05)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {/* Tag + icon */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "0.75rem",
                  }}
                >
                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 500,
                      color: "#9e9a96",
                      border: "1px solid #e8e5df",
                      borderRadius: 5,
                      padding: "0.2rem 0.55rem",
                      letterSpacing: "0.03em",
                    }}
                  >
                    {project.tag}
                  </span>
                  {project.icon}
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: 18,
                    fontWeight: 600,
                    margin: "0 0 0.5rem",
                    letterSpacing: "-0.01em",
                    color: "#1a1a1a",
                  }}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: 15,
                    lineHeight: 1.65,
                    margin: "0 0 1rem",
                    color: "#6b6762",
                  }}
                >
                  {project.description}
                </p>

                {/* CTA */}
                <span
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: "#d4623a",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.3rem",
                    transition: "color 0.15s",
                  }}
                >
                  Visit
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 540px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
