import { useState, useEffect } from "react";
import Nav from "@/components/homepagenew/Nav";
import Hero from "@/components/homepagenew/Hero";
import Skills from "@/components/homepagenew/Skills";
import Projects from "@/components/homepagenew/Projects";
import Journey from "@/components/homepagenew/Journey";
import Contact from "@/components/homepagenew/Contact";
import Footer from "@/components/homepagenew/Footer";
import { About } from "@/components/homepagenew/About";
import ReviewSlider from "@/components/homepagenew/ReviewSlider";

/* ─── CSS injected once ─── */
const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@300;400;600&family=Syne:wght@700;800&display=swap');

  :root {
    --bg: #060608;
    --bg2: #0c0c12;
    --bg3: #111118;
    --cyan: #00f5d4;
    --blue: #3b82f6;
    --indigo: #6366f1;
    --glow-cyan: 0 0 20px rgba(0,245,212,0.35);
    --glow-blue: 0 0 20px rgba(59,130,246,0.35);
    --border: rgba(255,255,255,0.07);
    --glass: rgba(255,255,255,0.03);
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }

  html { scroll-behavior: smooth; }

  body { background: var(--bg); }

  .font-display { font-family: 'Syne', sans-serif; }
  .font-body { font-family: 'Space Grotesk', sans-serif; }
  .font-mono { font-family: 'JetBrains Mono', monospace; }

  /* Grid overlay */
  .grid-overlay {
    background-image:
      linear-gradient(rgba(0,245,212,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0,245,212,0.04) 1px, transparent 1px);
    background-size: 48px 48px;
  }

  /* Glassmorphism card */
  .glass {
    background: var(--glass);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid var(--border);
  }

  /* Cursor glow card */
  .card-glow {
    position: relative;
    overflow: hidden;
    transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  }
  .card-glow:hover {
    transform: translateY(-4px);
    border-color: rgba(0,245,212,0.3);
    box-shadow: var(--glow-cyan);
  }
  .card-glow::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(600px circle at var(--mx,50%) var(--my,50%), rgba(0,245,212,0.06), transparent 60%);
    opacity: 0;
    transition: opacity 0.4s;
    pointer-events: none;
    z-index: 0;
  }
  .card-glow:hover::before { opacity: 1; }

  /* Nav capsule */
  .nav-capsule {
    background: rgba(12,12,18,0.85);
    backdrop-filter: blur(24px);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 9999px;
    box-shadow: 0 8px 32px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,245,212,0.05);
  }

  /* CTA buttons */
  .btn-primary {
    background: linear-gradient(135deg, #00f5d4 0%, #3b82f6 100%);
    color: #060608;
    font-weight: 700;
    border-radius: 9999px;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }
  .btn-primary::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, #00f5d4 0%, #6366f1 100%);
    opacity: 0;
    transition: opacity 0.3s;
  }
  .btn-primary:hover::after { opacity: 1; }
  .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,245,212,0.4); }
  .btn-primary span { position: relative; z-index: 1; }

  .btn-outline {
    border: 1px solid rgba(0,245,212,0.4);
    color: var(--cyan);
    border-radius: 9999px;
    transition: all 0.3s ease;
    background: transparent;
  }
  .btn-outline:hover {
    background: rgba(0,245,212,0.08);
    border-color: var(--cyan);
    box-shadow: var(--glow-cyan);
    transform: translateY(-2px);
  }

  /* Bento highlight */
  .bento-span-2 { grid-column: span 2; }
  .bento-row-2 { grid-row: span 2; }

  /* Typing cursor */
  .typing-cursor::after {
    content: '|';
    animation: blink 1s step-end infinite;
    color: var(--cyan);
  }
  @keyframes blink { 50% { opacity: 0; } }

  /* Floating particles */
  @keyframes float {
    0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.6; }
    50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
  }
  .particle { animation: float var(--dur, 6s) ease-in-out infinite; animation-delay: var(--delay, 0s); }

  /* Timeline */
  .timeline-dot {
    width: 12px; height: 12px;
    border-radius: 9999px;
    background: var(--cyan);
    box-shadow: 0 0 12px var(--cyan);
    flex-shrink: 0;
  }

  /* Skill bar */
  .skill-bar-fill {
    height: 3px;
    background: linear-gradient(90deg, var(--cyan), var(--blue));
    border-radius: 9999px;
    transition: width 1.5s cubic-bezier(0.16,1,0.3,1);
    box-shadow: 0 0 8px rgba(0,245,212,0.5);
  }

  /* Scanline effect */
  .scanline::after {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(0,0,0,0.05) 2px,
      rgba(0,0,0,0.05) 4px
    );
    pointer-events: none;
    z-index: 10;
  }

  /* Neon text */
  .neon-cyan { color: var(--cyan); text-shadow: 0 0 20px rgba(0,245,212,0.6); }
  .neon-blue { color: #60a5fa; text-shadow: 0 0 20px rgba(96,165,250,0.5); }

  /* Badge */
  .badge {
    display: inline-flex; align-items: center; gap: 4px;
    padding: 3px 10px;
    border-radius: 9999px;
    font-size: 0.65rem;
    font-family: 'JetBrains Mono', monospace;
    font-weight: 600;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }
  .badge-cyan { background: rgba(0,245,212,0.12); border: 1px solid rgba(0,245,212,0.3); color: var(--cyan); }
  .badge-blue { background: rgba(59,130,246,0.12); border: 1px solid rgba(59,130,246,0.3); color: #60a5fa; }
  .badge-indigo { background: rgba(99,102,241,0.12); border: 1px solid rgba(99,102,241,0.3); color: #a5b4fc; }

  /* Section fade in */
  .fade-in { opacity: 0; transform: translateY(24px); transition: opacity 0.7s ease, transform 0.7s ease; }
  .fade-in.visible { opacity: 1; transform: translateY(0); }

  /* Contact form */
  .form-input {
    width: 100%;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 12px;
    padding: 12px 16px;
    color: white;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 0.9rem;
    transition: border-color 0.3s, box-shadow 0.3s;
    outline: none;
  }
  .form-input:focus {
    border-color: rgba(0,245,212,0.5);
    box-shadow: 0 0 0 3px rgba(0,245,212,0.08);
  }
  .form-input::placeholder { color: rgba(255,255,255,0.25); }

  @keyframes pulse-ring {
    0% { transform: scale(1); opacity: 0.6; }
    100% { transform: scale(1.6); opacity: 0; }
  }
  .pulse-ring {
    position: absolute;
    inset: -4px;
    border-radius: 9999px;
    border: 1px solid var(--cyan);
    animation: pulse-ring 2s ease-out infinite;
  }

  @keyframes dash {
    to { stroke-dashoffset: 0; }
  }
  .svg-draw {
    stroke-dasharray: 300;
    stroke-dashoffset: 300;
    animation: dash 2s ease forwards;
  }

  /* Active nav */
  .nav-link-active { color: var(--cyan); }
  .nav-link-active::after {
    content: '';
    position: absolute;
    bottom: -2px; left: 50%; transform: translateX(-50%);
    width: 4px; height: 4px;
    border-radius: 9999px;
    background: var(--cyan);
    box-shadow: 0 0 6px var(--cyan);
  }

  @media (max-width: 768px) {
    .bento-span-2 { grid-column: span 1; }
    .bento-row-2 { grid-row: span 1; }
  }
`;


/* ─── Main App ─── */
export default function HomepageNew() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const styleTag = document.createElement("style");
    styleTag.textContent = STYLES;
    document.head.appendChild(styleTag);
    return () => document.head.removeChild(styleTag);
  }, []);

  useEffect(() => {
    const sections = ["hero", "skills", "projects", "journey", "contact"];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.4 },
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <div
      className="font-body"
      style={{ background: "var(--bg)", color: "white", minHeight: "100vh" }}
    >
      <Nav active={active} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Journey />
      <ReviewSlider />
      <Contact />
      <Footer />
    </div>
  );
}
