"use client";

import {
  Cpu,
  Database,
  Globe,
  Lock,
  MonitorSmartphone,
  Server,
  Shield,
  Trophy,
  Zap,
  Palette,
  Video,
  Wrench
} from "lucide-react";
import SectionHeader from "./SectionHeader";
import SkillBar from "./SkillBar";
import BentoCard from "./BentoCard";

const SKILLS = [
  { key: "ts", label: "TypeScript", pct: 92 },
  { key: "react", label: "React / Next.js", pct: 95 },
  { key: "node", label: "Node.js", pct: 85 },
  { key: "mongo", label: "MongoDB", pct: 82 },
  { key: "dsa", label: "DSA / Algorithms", pct: 78 },
  { key: "firebase", label: "Firebase", pct: 80 },
];

export default function Skills() {
  return (
    <section id="skills" className="pt-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="CAPABILITIES"
          title="Tools & Technologies"
          sub="A comprehensive view of my technical arsenal, curated for production-grade engineering."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {/* Frontend block */}
          <BentoCard col2 className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5 relative z-10">
              <div
                className="p-2 rounded-xl"
                style={{ background: "rgba(0,245,212,0.1)" }}
              >
                <MonitorSmartphone size={18} className="neon-cyan" />
              </div>
              <div>
                <h3 className="font-display text-white font-bold text-sm">
                  Advanced Frontend
                </h3>
                <p
                  className="font-mono text-xs"
                  style={{ color: "rgba(255,255,255,0.35)" }}
                >
                  React · Next.js · TypeScript · Tailwind
                </p>
              </div>
            </div>
            <div className="relative z-10">
              {SKILLS.slice(0, 3).map((s, i) => (
                <SkillBar key={s.key} {...s} delay={i * 120} />
              ))}
            </div>
            <div className="flex flex-wrap gap-2 mt-4 relative z-10">
              {["JSX", "Hooks", "SSR", "ISR", "App Router", "Framer"].map(
                (t) => (
                  <span
                    key={t}
                    className="badge badge-cyan"
                    style={{ fontSize: "0.6rem" }}
                  >
                    {t}
                  </span>
                ),
              )}
            </div>
          </BentoCard>

          {/* Backend block */}
          <BentoCard>
            <div className="flex items-center gap-3 mb-4 relative z-10">
              <div
                className="p-2 rounded-xl"
                style={{ background: "rgba(59,130,246,0.1)" }}
              >
                <Server size={18} className="neon-blue" />
              </div>
              <div>
                <h3 className="font-display text-white font-bold text-sm">
                  Backend & DB
                </h3>
                <p
                  className="font-mono text-xs"
                  style={{ color: "rgba(255,255,255,0.35)" }}
                >
                  Node · Mongo · Firebase
                </p>
              </div>
            </div>
            <div className="relative z-10">
              {SKILLS.slice(3, 5).map((s, i) => (
                <SkillBar key={s.key} {...s} delay={i * 120} />
              ))}
            </div>
            <div className="grid grid-cols-2 gap-2 mt-4 relative z-10">
              {[
                { Icon: Database, label: "MongoDB Atlas" },
                { Icon: Zap, label: "Firebase RT" },
                { Icon: Globe, label: "REST APIs" },
                { Icon: Lock, label: "SSLCommerz" },
              ].map(({ Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-1.5 badge badge-blue"
                  style={{ fontSize: "0.65rem" }}
                >
                  <Icon size={12} /> {label}
                </div>
              ))}
            </div>
          </BentoCard>

          {/* DSA block */}
          <BentoCard>
            <div className="flex items-center gap-3 mb-4 relative z-10">
              <div
                className="p-2 rounded-xl"
                style={{ background: "rgba(99,102,241,0.1)" }}
              >
                <Cpu size={18} style={{ color: "#a5b4fc" }} />
              </div>
              <div>
                <h3 className="font-display text-white font-bold text-sm">
                  Core CS
                </h3>
                <p
                  className="font-mono text-xs"
                  style={{ color: "rgba(255,255,255,0.35)" }}
                >
                  DSA · Algorithms
                </p>
              </div>
            </div>
            <SkillBar label="DSA / Problem Solving" pct={78} delay={0} />
            <div className="relative z-10 grid grid-cols-2 gap-2 mt-3">
              {["Arrays", "Trees", "DP", "Graphs", "Sorting", "Hashing"].map(
                (t) => (
                  <span
                    key={t}
                    className="badge badge-indigo text-center justify-center"
                    style={{ fontSize: "0.62rem" }}
                  >
                    {t}
                  </span>
                ),
              )}
            </div>
          </BentoCard>

          {/* Payment block */}
          <BentoCard>
            <div className="flex items-center gap-3 mb-4 relative z-10">
              <div
                className="p-2 rounded-xl"
                style={{ background: "rgba(0,245,212,0.1)" }}
              >
                <Shield size={18} className="neon-cyan" />
              </div>
              <h3 className="font-display text-white font-bold text-sm">
                Payments & Security
              </h3>
            </div>
            <div className="relative z-10 space-y-2">
              {[
                { label: "SSLCommerz Gateway", status: "Integrated" },
                { label: "Firebase Auth", status: "Production" },
                { label: "REST API Design", status: "Advanced" },
              ].map(({ label, status }) => (
                <div
                  key={label}
                  className="flex items-center justify-between py-1.5 border-b"
                  style={{ borderColor: "rgba(255,255,255,0.06)" }}
                >
                  <span
                    className="font-body text-xs"
                    style={{ color: "rgba(255,255,255,0.55)" }}
                  >
                    {label}
                  </span>
                  <span
                    className="badge badge-cyan"
                    style={{ fontSize: "0.58rem" }}
                  >
                    {status}
                  </span>
                </div>
              ))}
            </div>
          </BentoCard>

          {/* Cricket / Lifestyle block */}
          <BentoCard col2 className="lg:col-span-2" accent="blue">
            <div className="relative z-10 flex flex-col sm:flex-row gap-6 items-start">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="p-2 rounded-xl"
                    style={{ background: "rgba(59,130,246,0.1)" }}
                  >
                    <Trophy size={18} className="neon-blue" />
                  </div>
                  <div>
                    <h3 className="font-display text-white font-bold text-sm">
                      Cyber Strikers
                    </h3>
                    <p
                      className="font-mono text-xs"
                      style={{ color: "rgba(255,255,255,0.35)" }}
                    >
                      Team Captain & Manager
                    </p>
                  </div>
                </div>
                <p
                  className="font-body text-xs mb-3"
                  style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}
                >
                  Leading a competitive cricket squad while building a
                  live-score web app that powers our matches in real-time using
                  the Google Sheets API.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span
                    className="badge badge-blue"
                    style={{ fontSize: "0.62rem" }}
                  >
                    🏏 Cricket
                  </span>
                  <span
                    className="badge badge-blue"
                    style={{ fontSize: "0.62rem" }}
                  >
                    ⚡ Team Lead
                  </span>
                  <span
                    className="badge badge-cyan"
                    style={{ fontSize: "0.62rem" }}
                  >
                    📝 Tech Blogger
                  </span>
                </div>
              </div>
              {/* Mini stats */}
              <div className="grid grid-cols-2 gap-3 flex-shrink-0">
                {[
                  { n: "3+", l: "Projects" },
                  { n: "∞", l: "Commits" },
                  { n: "1st", l: "Captain" },
                  { n: "100%", l: "Passion" },
                ].map(({ n, l }) => (
                  <div
                    key={l}
                    className="glass rounded-xl p-3 text-center"
                    style={{ minWidth: "70px" }}
                  >
                    <div className="font-display font-bold text-lg neon-cyan">
                      {n}
                    </div>
                    <div
                      className="font-mono text-xs"
                      style={{
                        color: "rgba(255,255,255,0.4)",
                        fontSize: "0.6rem",
                      }}
                    >
                      {l}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </BentoCard>

          {/* Graphic Design block */}
          <BentoCard>
            <div className="flex items-center gap-3 mb-4 relative z-10">
              <div
                className="p-2 rounded-xl"
                style={{ background: "rgba(236,72,153,0.1)" }}
              >
                <Palette size={18} style={{ color: "#f472b6" }} />
              </div>
              <div>
                <h3 className="font-display text-white font-bold text-sm">
                  Graphic Design
                </h3>
                <p
                  className="font-mono text-xs"
                  style={{ color: "rgba(255,255,255,0.35)" }}
                >
                  PS · Illustrator · Canva
                </p>
              </div>
            </div>
            <div className="relative z-10 space-y-3 mb-4">
              {[
                { label: "Adobe Photoshop", pct: 72 },
                { label: "Adobe Illustrator", pct: 65 },
                { label: "Canva", pct: 90 },
              ].map((s, i) => (
                <SkillBar
                  key={s.label}
                  {...s}
                  pctKey={s.label}
                  delay={i * 120}
                />
              ))}
            </div>
            <div className="flex flex-wrap gap-2 relative z-10">
              {["UI Assets", "Thumbnails", "Branding", "Posters"].map((t) => (
                <span
                  key={t}
                  className="font-mono px-2 py-0.5 rounded text-xs"
                  style={{
                    background: "rgba(236,72,153,0.1)",
                    border: "1px solid rgba(236,72,153,0.25)",
                    color: "#f472b6",
                    fontSize: "0.62rem",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </BentoCard>

          {/* Video Editing block */}
          <BentoCard>
            <div className="flex items-center gap-3 mb-4 relative z-10">
              <div
                className="p-2 rounded-xl"
                style={{ background: "rgba(251,146,60,0.1)" }}
              >
                <Video size={18} style={{ color: "#fb923c" }} />
              </div>
              <div>
                <h3 className="font-display text-white font-bold text-sm">
                  Video Editing
                </h3>
                <p
                  className="font-mono text-xs"
                  style={{ color: "rgba(255,255,255,0.35)" }}
                >
                  CapCut · YouTube Content
                </p>
              </div>
            </div>
            <div className="relative z-10 space-y-2 mb-4">
              {[
                { label: "CapCut Editing", status: "Intermediate" },
                { label: "Thumbnail Design", status: "Proficient" },
                { label: "YouTube Workflow", status: "Active" },
              ].map(({ label, status }) => (
                <div
                  key={label}
                  className="flex items-center justify-between py-1.5 border-b"
                  style={{ borderColor: "rgba(255,255,255,0.06)" }}
                >
                  <span
                    className="font-body text-xs"
                    style={{ color: "rgba(255,255,255,0.55)" }}
                  >
                    {label}
                  </span>
                  <span
                    className="font-mono px-2 py-0.5 rounded text-xs"
                    style={{
                      background: "rgba(251,146,60,0.1)",
                      border: "1px solid rgba(251,146,60,0.25)",
                      color: "#fb923c",
                      fontSize: "0.58rem",
                    }}
                  >
                    {status}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 relative z-10">
              {[
                "🎬 CapCut",
                "▶️ YouTube",
                "✂️ Cuts & Edits",
                "🎵 Audio Sync",
              ].map((t) => (
                <span
                  key={t}
                  className="font-mono px-2 py-0.5 rounded text-xs"
                  style={{
                    background: "rgba(251,146,60,0.08)",
                    border: "1px solid rgba(251,146,60,0.2)",
                    color: "#fb923c",
                    fontSize: "0.62rem",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </BentoCard>

          {/* Tools & Workflow block */}
          <BentoCard col2 className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5 relative z-10">
              <div
                className="p-2 rounded-xl"
                style={{ background: "rgba(251,191,36,0.1)" }}
              >
                <Wrench size={18} style={{ color: "#fbbf24" }} />
              </div>
              <div>
                <h3 className="font-display text-white font-bold text-sm">
                  Tools & Workflow
                </h3>
                <p
                  className="font-mono text-xs"
                  style={{ color: "rgba(255,255,255,0.35)" }}
                >
                  Daily dev environment & productivity stack
                </p>
              </div>
            </div>

            <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                {
                  name: "VS Code",
                  icon: "🖥️",
                  label: "Primary IDE",
                  accent: "#3b82f6",
                },
                {
                  name: "Git",
                  icon: "🌿",
                  label: "Version Control",
                  accent: "#f97316",
                },
                {
                  name: "GitHub",
                  icon: "🐙",
                  label: "Remote Repos",
                  accent: "#a5b4fc",
                },
                {
                  name: "Postman",
                  icon: "📮",
                  label: "API Testing",
                  accent: "#f59e0b",
                },
                {
                  name: "Figma",
                  icon: "🎨",
                  label: "UI Design",
                  accent: "#ec4899",
                },
                {
                  name: "Vercel",
                  icon: "▲",
                  label: "Deployment",
                  accent: "#ffffff",
                },
                {
                  name: "MongoDB Compass",
                  icon: "🍃",
                  label: "DB GUI",
                  accent: "#4ade80",
                },
                {
                  name: "ChatGPT",
                  icon: "🤖",
                  label: "AI Assistant",
                  accent: "#00f5d4",
                },
              ].map(({ name, icon, label, accent }) => (
                <div
                  key={name}
                  className="flex flex-col items-center gap-2 p-3 rounded-xl transition-all duration-200 group cursor-default"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = `${accent}0d`;
                    e.currentTarget.style.borderColor = `${accent}35`;
                    e.currentTarget.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                    e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.06)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <span className="text-2xl">{icon}</span>
                  <div className="text-center">
                    <div className="font-display font-bold text-white text-xs leading-tight">
                      {name}
                    </div>
                    <div
                      className="font-mono mt-0.5"
                      style={{ color: accent, fontSize: "0.55rem" }}
                    >
                      {label}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Workflow pipeline */}
            <div
              className="relative z-10 mt-5 pt-4"
              style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
            >
              <p
                className="font-mono text-xs mb-3"
                style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.6rem" }}
              >
                TYPICAL WORKFLOW
              </p>
              <div className="flex items-center gap-1 flex-wrap">
                {[
                  { step: "Plan", color: "#6366f1" },
                  { step: "Design", color: "#ec4899" },
                  { step: "Code", color: "#00f5d4" },
                  { step: "Test", color: "#f59e0b" },
                  { step: "Deploy", color: "#4ade80" },
                  { step: "Monitor", color: "#3b82f6" },
                ].map(({ step, color }, i, arr) => (
                  <div key={step} className="flex items-center gap-1">
                    <span
                      className="font-mono text-xs px-3 py-1 rounded-full"
                      style={{
                        background: `${color}15`,
                        border: `1px solid ${color}35`,
                        color: color,
                        fontSize: "0.65rem",
                      }}
                    >
                      {step}
                    </span>
                    {i < arr.length - 1 && (
                      <span
                        style={{
                          color: "rgba(255,255,255,0.15)",
                          fontSize: "0.7rem",
                        }}
                      >
                        →
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
}
