/* ─── Floating Particle ─── */
export default function Particle({ x, y, size, dur, delay }) {
  return (
    <div
      className="particle absolute rounded-full"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size,
        background:
          Math.random() > 0.5 ? "rgba(0,245,212,0.4)" : "rgba(59,130,246,0.4)",
        "--dur": `${dur}s`,
        "--delay": `${delay}s`,
        boxShadow: `0 0 ${size * 2}px currentColor`,
        filter: "blur(1px)",
      }}
    />
  );
}