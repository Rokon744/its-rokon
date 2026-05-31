"use client";
import { useState } from "react";
import Image from "next/image";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import nicky from "../../assets/nicky.jpg";
import lakhlaifi from "../../assets/lakhlaifi.png";
import omen from "../../assets/omen.png";

const REVIEWS = [
  {
    id: 1,
    name: "Nicky",
    location: "Bulgaria",
    role: "Business Owner",
    review:
      "One again — amazing work. I will surely continue working with the developer. The attention to detail and speed of delivery was outstanding. Exactly what I envisioned.",
    image: nicky,
    rating: 5,
    project: "Web Application",
    accent: "#00f5d4",
  },
  {
    id: 2,
    name: "Lakhlaifi",
    location: "United Kingdom",
    role: "Startup Founder",
    review:
      "Great job, very happy with the work. Was creative and did everything perfectly. Communication was smooth throughout and the final product exceeded my expectations.",
    image: lakhlaifi,
    rating: 5,
    project: "Full-Stack Platform",
    accent: "#3b82f6",
  },
  {
    id: 3,
    name: "Omen",
    location: "United Kingdom",
    role: "Product Manager",
    review:
      "Very good work, positive results. Will be working with again, exceeded all expectations. Delivered on time, clean code, and a polished UI. Highly recommended.",
    image: omen,
    rating: 5,
    project: "Dashboard & API",
    accent: "#6366f1",
  },
];

export default function ReviewSlider() {
  const [active, setActive] = useState(0);

  const prev = () =>
    setActive((p) => (p - 1 + REVIEWS.length) % REVIEWS.length);
  const next = () => setActive((p) => (p + 1) % REVIEWS.length);

  const review = REVIEWS[active];

  return (
    <section className="pt-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 mb-4"
            style={{
              padding: "4px 14px",
              borderRadius: "9999px",
              background: "rgba(0,245,212,0.08)",
              border: "1px solid rgba(0,245,212,0.25)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{
                background: "var(--cyan)",
                boxShadow: "0 0 6px var(--cyan)",
              }}
            />
            <span className="font-mono text-xs tracking-widest uppercase neon-cyan">
              Testimonials
            </span>
          </div>
          <h2
            className="font-display font-bold text-white mb-3"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Client Reviews
          </h2>
          <p
            className="font-body text-sm max-w-md mx-auto"
            style={{ color: "rgba(255,255,255,0.4)", lineHeight: 1.7 }}
          >
            Real feedback from real clients — delivering quality that speaks for
            itself.
          </p>
        </div>

        {/* Main layout */}
        <div className="grid lg:grid-cols-[1fr_2fr] gap-6 items-start">
          {/* ── Left: Client list ── */}
          <div className="flex flex-col gap-3">
            {REVIEWS.map((r, i) => (
              <button
                key={r.id}
                onClick={() => setActive(i)}
                className="flex items-center gap-4 p-4 rounded-2xl text-left transition-all duration-300"
                style={{
                  background:
                    active === i ? `${r.accent}10` : "rgba(255,255,255,0.02)",
                  border:
                    active === i
                      ? `1px solid ${r.accent}40`
                      : "1px solid rgba(255,255,255,0.06)",
                  transform: active === i ? "translateX(4px)" : "translateX(0)",
                  backdropFilter: "blur(16px)",
                }}
              >
                {/* Avatar */}
                <div
                  className="relative flex-shrink-0"
                  style={{
                    borderRadius: "12px",
                    padding: "2px",
                    background:
                      active === i
                        ? `linear-gradient(135deg, ${r.accent}, transparent)`
                        : "rgba(255,255,255,0.08)",
                  }}
                >
                  <Image
                    src={r.image}
                    alt={r.name}
                    width={48}
                    height={48}
                    className="object-cover rounded-xl"
                    style={{ width: 48, height: 48 }}
                  />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="font-display font-bold text-sm text-white truncate">
                    {r.name}
                  </div>
                  <div
                    className="font-mono text-xs truncate"
                    style={{
                      color: "rgba(255,255,255,0.4)",
                      fontSize: "0.65rem",
                    }}
                  >
                    {r.role} · {r.location}
                  </div>
                </div>

                {/* Active indicator */}
                {active === i && (
                  <div
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{
                      background: r.accent,
                      boxShadow: `0 0 8px ${r.accent}`,
                    }}
                  />
                )}
              </button>
            ))}

            {/* Nav arrows */}
            <div className="flex gap-2 mt-2">
              <button
                onClick={prev}
                className="flex-1 flex items-center justify-center py-2.5 rounded-xl transition-all duration-200 font-mono text-xs gap-2"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "rgba(255,255,255,0.4)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(0,245,212,0.3)";
                  e.currentTarget.style.color = "var(--cyan)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.color = "rgba(255,255,255,0.4)";
                }}
              >
                <ChevronLeft size={15} /> Prev
              </button>
              <button
                onClick={next}
                className="flex-1 flex items-center justify-center py-2.5 rounded-xl transition-all duration-200 font-mono text-xs gap-2"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "rgba(255,255,255,0.4)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(0,245,212,0.3)";
                  e.currentTarget.style.color = "var(--cyan)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.color = "rgba(255,255,255,0.4)";
                }}
              >
                Next <ChevronRight size={15} />
              </button>
            </div>
          </div>

          {/* ── Right: Active review card ── */}
          <div
            key={active}
            className="glass card-glow rounded-2xl p-4 sm:p-8 relative overflow-hidden"
            style={{
              border: `1px solid ${review.accent}25`,
              animation: "fadeSlideIn 0.4s ease",
            }}
          >
            {/* Ambient glow */}
            <div
              className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
              style={{
                background: `radial-gradient(circle, ${review.accent}12 0%, transparent 70%)`,
                filter: "blur(30px)",
                transform: "translate(30%, -30%)",
              }}
            />

            {/* Quote icon */}
            <div
              className="absolute top-6 right-6 opacity-10"
              style={{ color: review.accent }}
            >
              <Quote size={64} />
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-6 relative z-10">
              {Array.from({ length: review.rating }).map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  fill="#ffb33e"
                  style={{ color: "#ffb33e" }}
                />
              ))}
              <span
                className="font-mono text-xs ml-2"
                style={{ color: "rgba(255,255,255,0.3)", alignSelf: "center" }}
              >
                5.0 / 5.0
              </span>
            </div>

            {/* Review text */}
            <blockquote
              className="font-body text-sm md:text-xl leading-relaxed mb-8 relative z-10"
              style={{
                color: "rgba(255,255,255,0.8)",
                fontStyle: "italic",
                lineHeight: 1.8,
              }}
            >
              &ldquo;{review.review}&rdquo;
            </blockquote>

            {/* Divider */}
            <div
              className="mb-6"
              style={{
                height: "1px",
                background: `linear-gradient(90deg, ${review.accent}40, transparent)`,
              }}
            />

            {/* Client info row */}
            <div className="flex items-center justify-between relative z-10 flex-wrap gap-4">
              <div className="flex items-center gap-4">
                {/* Avatar large */}
                <div
                  style={{
                    borderRadius: "16px",
                    padding: "2px",
                    background: `linear-gradient(135deg, ${review.accent}, transparent)`,
                  }}
                >
                  <Image
                    src={review.image}
                    alt={review.name}
                    width={56}
                    height={56}
                    className="object-cover"
                    style={{ borderRadius: "14px", width: 56, height: 56 }}
                  />
                </div>
                <div>
                  <div className="font-display font-bold text-white text-base">
                    {review.name}
                  </div>
                  <div
                    className="font-mono text-xs"
                    style={{
                      color: "rgba(255,255,255,0.4)",
                      fontSize: "0.65rem",
                    }}
                  >
                    {review.role}
                  </div>
                  <div
                    className="font-mono text-xs"
                    style={{ color: review.accent, fontSize: "0.62rem" }}
                  >
                    📍 {review.location}
                  </div>
                </div>
              </div>

              {/* Project badge */}
              <div
                className="font-mono text-xs px-4 py-2 rounded-xl"
                style={{
                  background: `${review.accent}12`,
                  border: `1px solid ${review.accent}30`,
                  color: review.accent,
                  fontSize: "0.65rem",
                }}
              >
                🚀 {review.project}
              </div>
            </div>

            {/* Pagination dots */}
            <div className="flex justify-center gap-2 mt-8 relative z-10">
              {REVIEWS.map((r, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: active === i ? "24px" : "6px",
                    height: "6px",
                    background:
                      active === i ? review.accent : "rgba(255,255,255,0.2)",
                    boxShadow:
                      active === i ? `0 0 8px ${review.accent}` : "none",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
