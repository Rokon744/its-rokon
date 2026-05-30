'use client'
import { useRef } from "react";


/* ─── Bento Skills ─── */
const SKILLS = [
  { key: "ts", label: "TypeScript", pct: 92 },
  { key: "react", label: "React / Next.js", pct: 95 },
  { key: "node", label: "Node.js", pct: 85 },
  { key: "mongo", label: "MongoDB", pct: 82 },
  { key: "dsa", label: "DSA / Algorithms", pct: 78 },
  { key: "firebase", label: "Firebase", pct: 80 },
];

export default function BentoCard({
  children,
  className = "",
  col2 = false,
  row2 = false,
  accent = "cyan",
}) {
  const ref = useRef(null);
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
      className={`glass card-glow rounded-2xl p-5 ${col2 ? "bento-span-2" : ""} ${row2 ? "bento-row-2" : ""} ${className}`}
      style={{ position: "relative" }}
    >
      {children}
    </div>
  );
}
