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
          padding: "100px 1.5rem 88px",
          background: "radial-gradient(ellipse at 50% 0%, rgba(212,98,58,0.07) 0%, transparent 65%), #faf9f7",
        }}
      >
        <Image
          src="/profile.png"
          alt="Neev Grover"
          width={88}
          height={88}
          style={{
            borderRadius: "50%",
            boxShadow: "0 0 0 3px #e8e5df, 0 4px 16px rgba(0,0,0,0.10)",
            display: "block",
          }}
        />

        <h1
          style={{
            fontSize: 60,
            fontWeight: 800,
            letterSpacing: "-0.035em",
            color: "#1a1a1a",
            margin: "20px 0 8px",
            lineHeight: 1.1,
          }}
        >
          Neev Grover
        </h1>

        <p
          style={{
            fontSize: 17,
            color: "#6b6762",
            margin: "0 0 12px",
            fontWeight: 400,
          }}
        >
          Sophomore at Harker School · building things I care about
        </p>

        <p
          style={{
            fontSize: 17,
            color: "#6b6762",
            maxWidth: 460,
            margin: "0 auto 32px",
            lineHeight: 1.7,
          }}
        >
          I&apos;m passionate about computer science, chess, and the environment.
          I build projects that sit at the intersection of all three.
        </p>

        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
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
          gap: "5rem",
          paddingBottom: "8rem",
        }}
      >
        <BlogSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </main>
  );
}
