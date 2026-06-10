import { Mail, Linkedin, Github, Phone, Facebook } from "lucide-react";

/* ─── Footer ─── */
export default function Footer() {
  return (
    <footer
      className="py-10 px-6 border-t"
      style={{ borderColor: "rgba(255,255,255,0.06)" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="relative">
            <div className="pulse-ring" />
            <div
              className="w-2 h-2 rounded-full"
              style={{
                background: "var(--cyan)",
                boxShadow: "0 0 8px var(--cyan)",
              }}
            />
          </div>
          <span className="font-mono text-xs neon-cyan">ROKON</span>
          <span
            className="font-mono text-xs"
            style={{ color: "rgba(255,255,255,0.2)" }}
          >
            · Full-Stack Developer
          </span>
        </div>
        <div className="flex items-center gap-4">
          {[
            { Icon: Github, href: "https://github.com/Rokon744" },
            // { Icon: Linkedin, href: "https://www.linkedin.com/in/dev-rokon/" },
            { Icon: Phone, href: "https://wa.me/8801890011744" },
            { Icon: Facebook, href: "https://facebook.com/devrokon" },
            { Icon: Mail, href: "malito:roknujjamanripon@gmail.com" },
          ].map(({ Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              className="p-2 rounded-lg transition-all duration-200 text-white/30 hover:text-white/70 hover:bg-white/5"
            >
              <Icon size={15} />
            </a>
          ))}
        </div>
        <div
          className="font-mono text-xs"
          style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.65rem" }}
        >
          © 2025 Rokon · Built with Next.js + Tailwind
        </div>
      </div>
    </footer>
  );
}
