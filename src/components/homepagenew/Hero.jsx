'use client'

import { Layers, Mail } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import Particle from "./Particle";

/* ─── Hero ─── */
const ROLES = [
  "Full-Stack Developer",
  "Software Engineer",
  "DSA Enthusiast",
  "Cricket Captain",
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const particles = useRef(
    Array.from({ length: 14 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      dur: Math.random() * 4 + 4,
      delay: Math.random() * 4,
    })),
  );

  useEffect(() => {
    const role = ROLES[roleIdx];
    let i = 0;
    setTyping(true);
    setDisplayed("");
    const interval = setInterval(() => {
      if (i <= role.length) {
        setDisplayed(role.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
        setTyping(false);
        setTimeout(() => {
          setRoleIdx((p) => (p + 1) % ROLES.length);
        }, 2200);
      }
    }, 60);
    return () => clearInterval(interval);
  }, [roleIdx]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-overlay pt-20"
    >
      {/* Ambient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(0,245,212,0.08) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)",
            filter: "blur(30px)",
          }}
        />
        {particles.current.map((p, i) => (
          <Particle key={i} {...p} />
        ))}
      </div>

      {/* Corner decorations */}
      <div className="absolute top-16 left-8 opacity-20 hidden lg:block">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <path
            className="svg-draw"
            d="M0 60 L0 0 L60 0"
            stroke="url(#grad)"
            strokeWidth="1"
            fill="none"
          />
          <defs>
            <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="#00f5d4" />
              <stop offset="1" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className="absolute bottom-20 right-8 opacity-20 hidden lg:block"
        style={{ transform: "rotate(180deg)" }}
      >
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <path
            className="svg-draw"
            d="M0 60 L0 0 L60 0"
            stroke="url(#grad2)"
            strokeWidth="1"
            fill="none"
          />
          <defs>
            <linearGradient id="grad2" x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="#00f5d4" />
              <stop offset="1" stopColor="#6366f1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 badge badge-cyan mb-8">
          <span
            className="w-1.5 h-1.5 rounded-full bg-emerald-400"
            style={{
              boxShadow: "0 0 6px #34d399",
              animation: "blink 2s ease-in-out infinite",
            }}
          />
          Available for Opportunities
        </div>

        {/* Main headline */}
        <h1
          className="font-display text-3xl sm:text-7xl lg:text-8xl font-800 leading-none mb-6"
          style={{ letterSpacing: "-0.03em" }}
        >
          <span className="block text-white">Building</span>
          <span
            className="block"
            style={{
              background:
                "linear-gradient(135deg, #00f5d4 0%, #3b82f6 50%, #6366f1 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Digital Systems
          </span>
          <span className="block text-white/80">That Scale.</span>
        </h1>

        {/* Role typer */}
        <div
          className="font-mono text-lg sm:text-xl mb-4"
          style={{ color: "rgba(255,255,255,0.5)" }}
        >
          <span style={{ color: "rgba(0,245,212,0.6)" }}>&gt; </span>
          <span className={`neon-cyan ${!typing ? "typing-cursor" : ""}`}>
            {displayed}
          </span>
          {typing && <span className="neon-cyan">|</span>}
        </div>

        <p
          className="font-body text-base sm:text-lg max-w-xl mx-auto mb-10"
          style={{ color: "rgba(255,255,255,0.4)", lineHeight: 1.7 }}
        >
          Hi, I&apos;m <strong className="text-white">Rokon</strong> — a full-stack
          engineer crafting high-performance web applications with React,
          Next.js & Node.js from Bangladesh.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            className="btn-primary px-8 py-4 font-body font-semibold text-sm flex items-center gap-2"
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <span className="flex items-center gap-2">
              <Layers size={16} /> View My Work
            </span>
          </button>
          <button
            className="btn-outline px-8 py-4 font-body font-semibold text-sm flex items-center gap-2"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <Mail size={16} /> Let&apos;s Connect
          </button>
        </div>

        {/* Tech pills */}
        <div className="flex flex-wrap justify-center gap-2 mt-10">
          {[
            "React",
            "Next.js",
            "TypeScript",
            "Node.js",
            "MongoDB",
            "Firebase",
          ].map((t) => (
            <span
              key={t}
              className="badge badge-blue font-body"
              style={{ fontSize: "0.7rem", letterSpacing: "0.02em" }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 opacity-40">
        <span className="font-mono text-xs" style={{ color: "var(--cyan)" }}>
          SCROLL
        </span>
        <div
          className="w-px h-12"
          style={{
            background: "linear-gradient(to bottom, var(--cyan), transparent)",
            animation: "float 2s ease-in-out infinite",
          }}
        />
      </div>
    </section>
  );
}