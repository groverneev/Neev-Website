"use client";

import Image from "next/image";
import ContactSection from "@/components/ContactSection";
import ProjectsSection from "@/components/ProjectsSection";
import BlogSection from "@/components/BlogSection";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiSubstack } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

const iconStyle: React.CSSProperties = {
  color: "#9e9a96",
  transition: "color 0.15s",
  display: "flex",
};

export default function Home() {
  return (
    <main style={{ background: "#faf9f7" }}>
      {/* ───────── HERO ───────── */}
      <section
        id="hero"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: "120px 1.5rem 100px",
          background: "radial-gradient(ellipse at 50% -10%, rgba(212,98,58,0.11) 0%, transparent 65%), #faf9f7",
        }}
      >
        <Image
          src="/profile.png"
          alt="Neev Grover"
          width={96}
          height={96}
          style={{
            borderRadius: "50%",
            boxShadow: "0 0 0 4px #e8e5df, 0 8px 24px rgba(0,0,0,0.10)",
            display: "block",
          }}
        />

        <h1
          style={{
            fontSize: 76,
            fontWeight: 800,
            letterSpacing: "-0.04em",
            color: "#1a1a1a",
            margin: "24px 0 10px",
            lineHeight: 1.0,
          }}
        >
          Neev Grover
        </h1>

        <p
          style={{
            fontSize: 18,
            color: "#6b6762",
            margin: "0 0 14px",
            fontWeight: 400,
            letterSpacing: "-0.01em",
          }}
        >
          Sophomore at Harker School · building things I care about
        </p>

        <p
          style={{
            fontSize: 17,
            color: "#6b6762",
            maxWidth: 500,
            margin: "0 auto 36px",
            lineHeight: 1.75,
          }}
        >
          I&apos;m passionate about computer science, chess, and the environment.
          I build projects that sit at the intersection of all three.
        </p>

        <div style={{ display: "flex", gap: 18, alignItems: "center" }}>
          <a
            href="https://x.com/groverneev01"
            target="_blank"
            rel="noopener noreferrer"
            style={iconStyle}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#1a1a1a")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#9e9a96")}
          >
            <FaXTwitter size={19} />
          </a>
          <a
            href="https://github.com/groverneev"
            target="_blank"
            rel="noopener noreferrer"
            style={iconStyle}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#1a1a1a")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#9e9a96")}
          >
            <FaGithub size={19} />
          </a>
          <a
            href="https://techunpacked.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            style={iconStyle}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#1a1a1a")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#9e9a96")}
          >
            <SiSubstack size={19} />
          </a>
          <a
            href="https://www.linkedin.com/in/neevgrover/"
            target="_blank"
            rel="noopener noreferrer"
            style={iconStyle}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#1a1a1a")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#9e9a96")}
          >
            <FaLinkedin size={19} />
          </a>
        </div>
      </section>

      {/* ───────── SECTIONS ───────── */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "6rem",
          paddingBottom: "9rem",
        }}
      >
        <BlogSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </main>
  );
}
