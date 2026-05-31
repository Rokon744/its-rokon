'use client'
import { useRef } from "react";
import { Download, ArrowRight, MapPin, GraduationCap, Code2, Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import rokon from "../../assets/rokon.png";

const INFO_ROWS = [
  { Icon: Code2,         label: "Role",       value: "Full-Stack Developer" },
  { Icon: MapPin,        label: "Location",   value: "Rajshahi, BD" },
  { Icon: Calendar,      label: "Experience", value: "3+ Years" },
  { Icon: GraduationCap, label: "Education",  value: "RPI, Rajshahi" },
];

export function About() {
  const cardRef = useRef(null);

  /* cursor-reactive glow on profile card */
  const onMouseMove = (e) => {
    const r = cardRef.current?.getBoundingClientRect();
    if (!r) return;
    cardRef.current.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
    cardRef.current.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
  };

  return (
    <section className="relative flex items-center pt-10 sm:pb-20 overflow-hidden">

      {/* ── ambient blobs ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(0,245,212,0.07) 0%, transparent 70%)", filter: "blur(50px)" }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)", filter: "blur(40px)" }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-[1fr_360px] gap-8 sm:gap-16 items-center">

          {/* ── LEFT: Text content ── */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6"
              style={{
                padding: "4px 14px",
                borderRadius: "9999px",
                background: "rgba(0,245,212,0.08)",
                border: "1px solid rgba(0,245,212,0.25)",
              }}>
              <span className="w-1.5 h-1.5 rounded-full"
                style={{ background: "var(--cyan)", boxShadow: "0 0 6px var(--cyan)" }} />
              <span className="font-mono text-xs tracking-widest uppercase neon-cyan">
                About Me
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-white leading-[0.95] mb-6"
              style={{ letterSpacing: "-0.03em" }}>
              I build systems,{" "}
              <br />
              <span style={{
                background: "linear-gradient(135deg, #00f5d4 0%, #3b82f6 50%, #6366f1 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontStyle: "italic",
              }}>
                not just screens.
              </span>
            </h1>

            {/* Paragraphs */}
            <p className="font-body text-base md:text-lg leading-relaxed max-w-xl mb-4"
              style={{ color: "rgba(255,255,255,0.5)" }}>
              I grew up taking things apart to see how they worked — software
              turned out to be the most interesting thing I could take apart and
              put back together better.
            </p>
            <p className="font-body text-base md:text-lg leading-relaxed max-w-xl mb-10"
              style={{ color: "rgba(255,255,255,0.5)" }}>
              {"Today I'm a Full-Stack Developer who cares as much about the pixel precision of a button hover as the architecture of a component library. I've shipped products with high code quality and absolute performance."}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">

              <a
                href={"/resume.pdf"}
                target="_blank"
                className="inline-flex items-center gap-2 font-body font-semibold text-sm"
                style={{
                  padding: "12px 24px",
                  borderRadius: "9999px",
                  border: "1px solid rgba(0,245,212,0.3)",
                  color: "var(--cyan)",
                  background: "transparent",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={e => {
                  (e.currentTarget).style.background = "rgba(0,245,212,0.08)";
                  (e.currentTarget).style.transform = "translateY(-2px)";
                  (e.currentTarget).style.boxShadow = "0 0 20px rgba(0,245,212,0.2)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget).style.background = "transparent";
                  (e.currentTarget).style.transform = "translateY(0)";
                  (e.currentTarget).style.boxShadow = "none";
                }}
              >
                <Download size={16} />
                Download CV
              </a>
            </div>

            {/* Quick stat pills */}
            <div className="flex flex-wrap gap-3 mt-8">
              {[
                { n: "3+", l: "Years Exp." },
                { n: "70+", l: "Projects" },
                { n: "100%", l: "Passion" },
              ].map(({ n, l }) => (
                <div key={l}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <span className="font-display font-bold text-base neon-cyan">{n}</span>
                  <span className="font-mono text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{l}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Profile card ── */}
          <div
            ref={cardRef}
            onMouseMove={onMouseMove}
            className="glass card-glow rounded-2xl p-4 sm:p-8 relative"
            style={{ position: "relative" }}
          >
            {/* Glow spot */}
            <div className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                background: "radial-gradient(600px circle at var(--mx,50%) var(--my,50%), rgba(0,245,212,0.05), transparent 60%)",
              }} />

            {/* Avatar */}
            <div className="relative mx-auto mb-6 w-fit">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-2xl"
                style={{
                  background: "linear-gradient(135deg, rgba(0,245,212,0.4), rgba(99,102,241,0.4))",
                  filter: "blur(12px)",
                  transform: "scale(1.1)",
                  zIndex: 0,
                }} />
              <div className="relative z-10 w-32 h-32 rounded-2xl overflow-hidden"
                style={{ border: "2px solid rgba(0,245,212,0.3)" }}>
                <Image
                  src={rokon}
                  alt="Rokon"
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              {/* Online dot */}
              <div className="absolute -bottom-1 -right-1 z-20 w-4 h-4 rounded-full flex items-center justify-center"
                style={{ background: "#060608", border: "2px solid #060608" }}>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"
                  style={{ boxShadow: "0 0 8px #34d399" }} />
              </div>
            </div>

            {/* Name + title */}
            <div className="text-center mb-6 relative z-10">
              <h3 className="font-display font-bold text-white text-xl">Rokon</h3>
              <p className="font-mono text-xs mt-1 neon-cyan">Full-Stack Developer</p>
            </div>

            {/* Divider */}
            <div className="mb-5" style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(0,245,212,0.2), transparent)" }} />

            {/* Info rows */}
            <div className="space-y-3 relative z-10">
              {INFO_ROWS.map(({ Icon, label, value }) => (
                <div key={label}
                  className="flex items-center justify-between py-2 rounded-xl px-3 transition-all duration-200"
                  style={{ border: "1px solid rgba(255,255,255,0.04)" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "rgba(0,245,212,0.04)")}
                  onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                >
                  <div className="flex items-center gap-2">
                    <Icon size={13} style={{ color: "var(--cyan)" }} />
                    <span className="font-mono text-xs uppercase tracking-wider"
                      style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.62rem" }}>
                      {label}
                    </span>
                  </div>
                  <span className="font-body text-xs font-medium text-white/80">{value}</span>
                </div>
              ))}
            </div>

            {/* Languages */}
            <div className="mt-5 relative z-10">
              <p className="font-mono text-xs mb-2" style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.6rem" }}>
                LANGUAGES
              </p>
              <div className="flex flex-wrap gap-2">
                {["JavaScript", "TypeScript", "PHP", "Java"].map(lang => (
                  <span key={lang}
                    className="font-mono px-2 py-1 rounded-lg text-xs"
                    style={{
                      background: "rgba(99,102,241,0.1)",
                      border: "1px solid rgba(99,102,241,0.25)",
                      color: "#a5b4fc",
                      fontSize: "0.65rem",
                    }}>
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}