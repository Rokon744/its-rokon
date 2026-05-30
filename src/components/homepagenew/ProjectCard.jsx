'use client'
import { BookOpen, LayoutDashboard, ExternalLink, Activity } from "lucide-react";
import { useRef } from "react";


/* ─── Projects ─── */
const PROJECT_ICONS = {
  LayoutDashboard,
  BookOpen,
  Activity,
};

export default function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const IconComp = PROJECT_ICONS[project.icon];
  const onMouseMove = (e) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    ref.current.style.setProperty(
      "--mx",
      `${((e.clientX - r.left) / r.width) * 100}%`,
    );
    ref.current.style.setProperty(
      "--my",
      `${((e.clientY - r.top) / r.height) * 100}%`,
    );
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      className="glass card-glow rounded-2xl p-6 flex flex-col"
      style={{ "--glow-color": project.accent }}
    >
      {/* Top row */}
      <div className="flex items-start justify-between mb-4 relative z-10">
        <div className="flex items-center gap-3">
          <div
            className="p-2.5 rounded-xl"
            style={{ background: `${project.accent}18` }}
          >
            <span style={{ color: project.accent }}>
              {IconComp ? <IconComp size={20} /> : null}
            </span>
          </div>
          <div>
            <span
              className="font-mono text-xs"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="font-display font-bold text-white text-lg leading-none">
              {project.title}
            </h3>
          </div>
        </div>
        <button
          className="p-2 rounded-lg hover:bg-white/5 transition-colors"
          style={{ color: "rgba(255,255,255,0.3)" }}
        >
          <ExternalLink size={15} />
        </button>
      </div>

      <p
        className="font-body text-xs mb-1 relative z-10"
        style={{ color: project.accent, fontWeight: 600 }}
      >
        {project.tagline}
      </p>
      <p
        className="font-body text-sm mb-5 relative z-10"
        style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}
      >
        {project.desc}
      </p>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-2 mb-5 relative z-10">
        {project.stats.map(({ label, value }) => (
          <div
            key={label}
            className="rounded-xl p-2.5 text-center"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div
              className="font-mono text-xs font-semibold"
              style={{ color: project.accent, fontSize: "0.65rem" }}
            >
              {value}
            </div>
            <div
              className="font-mono text-xs mt-0.5"
              style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.58rem" }}
            >
              {label}
            </div>
          </div>
        ))}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 relative z-10 mt-auto">
        {project.tags.map((t) => (
          <span
            key={t}
            className="font-mono px-2 py-0.5 rounded text-xs"
            style={{
              background: `${project.accent}12`,
              color: project.accent,
              border: `1px solid ${project.accent}30`,
              fontSize: "0.65rem",
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
