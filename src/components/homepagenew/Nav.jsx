'use client'
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = ["Hero", "Skills", "Projects", "Journey", "Contact"];

export default function Nav({ active }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const h = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      {/* ── Desktop Nav (unchanged) ── */}
      <nav
        className="fixed top-4 left-1/2 z-50 font-body hidden md:block"
        style={{ transform: "translateX(-50%)" }}
      >
        <div className="nav-capsule flex items-center gap-1 px-2 py-2">
          <div className="flex items-center gap-1 px-3 mr-2">
            <div className="relative">
              <div className="pulse-ring" style={{ inset: "-3px" }} />
              <div className="w-2 h-2 rounded-full"
                style={{ background: "var(--cyan)", boxShadow: "0 0 8px var(--cyan)" }} />
            </div>
            <span className="font-mono text-xs neon-cyan ml-1">ROK</span>
          </div>
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className={`relative px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 font-mono ${
                active === item.toLowerCase()
                  ? "nav-link-active bg-white/5"
                  : "text-white/50 hover:text-white/80 hover:bg-white/5"
              }`}
            >
              {item}
            </button>
          ))}
          <button onClick={() => scrollTo("Contact")} className="btn-primary ml-2 px-4 py-1.5 text-xs">
            <span>Hire Me</span>
          </button>
        </div>
      </nav>

      {/* ── Mobile: Top bar ── */}
      <div className="fixed top-0 left-0 right-0 z-50 md:hidden"
        style={{
          background: "rgba(6,6,8,0.92)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="flex items-center justify-between px-5 py-3">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <div className="pulse-ring" style={{ inset: "-3px" }} />
              <div className="w-2 h-2 rounded-full"
                style={{ background: "var(--cyan)", boxShadow: "0 0 8px var(--cyan)" }} />
            </div>
            <span className="font-mono text-sm neon-cyan font-bold">ROKON</span>
            <span className="font-mono text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>· Dev</span>
          </div>

          {/* Hamburger — right side */}
          <button
            onClick={() => setMenuOpen((p) => !p)}
            aria-label="Toggle menu"
            className="p-2 rounded-xl transition-all duration-200"
            style={{
              background: menuOpen ? "rgba(0,245,212,0.1)" : "rgba(255,255,255,0.05)",
              border: menuOpen ? "1px solid rgba(0,245,212,0.3)" : "1px solid rgba(255,255,255,0.08)",
              color: menuOpen ? "var(--cyan)" : "rgba(255,255,255,0.7)",
            }}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* ── Dark backdrop ── */}
      <div
        className="fixed inset-0 z-40 md:hidden transition-all duration-300"
        style={{
          background: "rgba(0,0,0,0.6)",
          backdropFilter: "blur(3px)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
        }}
        onClick={() => setMenuOpen(false)}
      />

      {/* ── Sidebar (slides from right) ── */}
      <div
        className="fixed top-0 right-0 h-full z-50 md:hidden flex flex-col"
        style={{
          width: "280px",
          background: "rgba(9,9,14,0.98)",
          backdropFilter: "blur(32px)",
          borderLeft: "1px solid rgba(0,245,212,0.12)",
          boxShadow: menuOpen ? "-8px 0 40px rgba(0,0,0,0.6)" : "none",
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        {/* Sidebar header */}
        <div className="flex items-center justify-between px-6 py-5"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div>
            <div className="font-mono text-xs neon-cyan font-bold tracking-widest">ROKON</div>
            <div className="font-mono text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.6rem" }}>
              Full-Stack Developer
            </div>
          </div>
          <button
            onClick={() => setMenuOpen(false)}
            className="p-1.5 rounded-lg"
            style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.5)" }}
          >
            <X size={16} />
          </button>
        </div>

        {/* Nav links */}
        <div className="flex flex-col gap-1 px-4 py-6 flex-1">
          {NAV_ITEMS.map((item, i) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="flex items-center gap-4 px-4 py-3.5 rounded-xl text-left transition-all duration-200 group"
              style={{
                background: active === item.toLowerCase() ? "rgba(0,245,212,0.08)" : "transparent",
                border: active === item.toLowerCase()
                  ? "1px solid rgba(0,245,212,0.2)"
                  : "1px solid transparent",
                transform: menuOpen ? "translateX(0)" : "translateX(30px)",
                opacity: menuOpen ? 1 : 0,
                transition: `transform 0.4s cubic-bezier(0.16,1,0.3,1) ${i * 60 + 100}ms, opacity 0.3s ease ${i * 60 + 100}ms, background 0.2s, border 0.2s`,
              }}
            >
              <span className="font-mono text-xs w-5"
                style={{ color: active === item.toLowerCase() ? "var(--cyan)" : "rgba(255,255,255,0.2)" }}>
                0{i + 1}
              </span>
              <span className="font-mono text-sm"
                style={{ color: active === item.toLowerCase() ? "var(--cyan)" : "rgba(255,255,255,0.65)" }}>
                {item}
              </span>
              {active === item.toLowerCase() && (
                <span className="ml-auto w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: "var(--cyan)", boxShadow: "0 0 8px var(--cyan)" }} />
              )}
            </button>
          ))}
        </div>

        {/* Sidebar footer CTA */}
        <div className="px-4 pb-8"
          style={{
            transform: menuOpen ? "translateX(0)" : "translateX(30px)",
            opacity: menuOpen ? 1 : 0,
            transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1) 400ms, opacity 0.3s ease 400ms",
          }}
        >
          <button
            onClick={() => scrollTo("Contact")}
            className="btn-primary w-full py-3.5 text-sm font-semibold"
            style={{ borderRadius: "14px" }}
          >
            <span>✉ Hire Me</span>
          </button>
          <p className="font-mono text-center mt-3"
            style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.6rem" }}>
            Available for opportunities
          </p>
        </div>
      </div>
    </>
  );
}