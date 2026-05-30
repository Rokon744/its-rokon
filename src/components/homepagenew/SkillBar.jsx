'use client'
import { useEffect, useRef, useState } from "react";

export default function SkillBar({ label, pct, delay }) {
  const [animated, setAnimated] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setAnimated(true);
      },
      { threshold: 0.3 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="mb-3">
      <div className="flex justify-between mb-1.5">
        <span
          className="font-mono text-xs"
          style={{ color: "rgba(255,255,255,0.6)" }}
        >
          {label}
        </span>
        <span className="font-mono text-xs neon-cyan">{pct}%</span>
      </div>
      <div
        className="h-0.5 rounded-full"
        style={{ background: "rgba(255,255,255,0.08)" }}
      >
        <div
          className="skill-bar-fill"
          style={{
            width: animated ? `${pct}%` : "0%",
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  );
}