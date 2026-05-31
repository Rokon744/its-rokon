import { Code2, Globe, Server, Zap } from "lucide-react";
import SectionHeader from "./SectionHeader";

/* ─── Timeline ─── */
const TIMELINE_ICONS = { Code2, Server, Globe, Zap };

const TIMELINE = [
  {
    year: "2022",
    title: "Foundation",
    desc: "Began mastering web fundamentals — HTML, CSS, JavaScript. Dove deep into React and fell in love with component-driven architecture.",
    icon: "Code2",
    accent: "#00f5d4",
  },
  {
    year: "2023",
    title: "Full-Stack Expansion",
    desc: "Integrated Node.js & MongoDB for backend services. Built REST APIs, implemented Firebase Auth, and deployed first production app.",
    icon: "Server",
    accent: "#3b82f6",
  },
  {
    year: "2024",
    title: "Institutional Impact",
    desc: "Developed RPI Campus Platform, solving real academic problems. Led tech blogging, deepened DSA mastery, and captained Cyber Strikers.",
    icon: "Globe",
    accent: "#6366f1",
  },
  {
    year: "2025",
    title: "Payment Systems & Scale",
    desc: "Integrated SSLCommerz payment gateway in EduPayFee. Moved to Next.js App Router, TypeScript-first development, and scalable architectures.",
    icon: "Zap",
    accent: "#00f5d4",
  },
];

export default function Journey() {
  return (
    <section id="journey" className="pt-20 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          label="TIMELINE"
          title="Engineering Journey"
          sub="A chronicle of growth — from first commits to production-grade systems."
        />

        <div className="relative mt-16">
          {/* Vertical line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px"
            style={{
              background:
                "linear-gradient(to bottom, transparent, rgba(0,245,212,0.3) 10%, rgba(0,245,212,0.3) 90%, transparent)",
            }}
          />

          <div className="space-y-6 sm:space-y-10">
            {TIMELINE.map((item, i) => (
              <div key={i} className="relative flex gap-0 sm:gap-6 group">
                {/* Dot */}
                <div className="relative flex-shrink-0 w-12 flex justify-center">
                  <div
                    className="timeline-dot mt-1.5"
                    style={{
                      background: item.accent,
                      boxShadow: `0 0 12px ${item.accent}`,
                    }}
                  />
                  <div className="absolute inset-0 flex justify-center">
                    <div
                      className="w-3 h-3 rounded-full mt-1.5 transition-transform duration-300 group-hover:scale-150"
                      style={{ background: item.accent, opacity: 0.2 }}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="glass card-glow rounded-2xl p-5 flex-1 mb-2">
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className="badge"
                      style={{
                        background: `${item.accent}15`,
                        border: `1px solid ${item.accent}30`,
                        color: item.accent,
                        fontSize: "0.65rem",
                      }}
                    >
                      {item.year}
                    </span>
                    <h3 className="font-display font-bold text-white text-base">
                      {item.title}
                    </h3>
                  </div>
                  <p
                    className="font-body text-sm"
                    style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}
                  >
                    {item.desc}
                  </p>
                  <div
                    className="absolute top-4 right-4 opacity-20"
                    style={{ color: item.accent }}
                  >
                    {(() => {
                      const I = TIMELINE_ICONS[item.icon];
                      return I ? <I size={14} /> : null;
                    })()}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Future node */}
          <div className="relative flex gap-6 mt-10">
            <div className="flex-shrink-0 w-12 flex justify-center">
              <div
                className="w-3 h-3 rounded-full border-2 mt-1.5"
                style={{
                  borderColor: "rgba(255,255,255,0.2)",
                  background: "transparent",
                  animation: "pulse-ring 2s ease-out infinite",
                }}
              />
            </div>
            <div className="flex items-center gap-3">
              <span
                className="font-mono text-xs"
                style={{ color: "rgba(255,255,255,0.25)" }}
              >
                2026+
              </span>
              <span
                className="font-body text-sm"
                style={{ color: "rgba(255,255,255,0.25)" }}
              >
                The story continues...
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}