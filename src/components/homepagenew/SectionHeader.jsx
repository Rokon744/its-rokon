import { CircuitBoard } from "lucide-react";

/* ─── Section Header ─── */
export default function SectionHeader({ label, title, sub }) {
  return (
    <div className="text-center">
      <div className="inline-flex items-center gap-2 badge badge-cyan mb-4">
        <CircuitBoard size={10} /> {label}
      </div>
      <h2
        className="font-display font-bold text-white mb-3 max-sm:leading-8"
        style={{
          fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
          letterSpacing: "-0.02em",
        }}
      >
        {title}
      </h2>
      <p
        className="font-body text-sm max-w-md mx-auto"
        style={{ color: "rgba(255,255,255,0.4)", lineHeight: 1.7 }}
      >
        {sub}
      </p>
    </div>
  );
}