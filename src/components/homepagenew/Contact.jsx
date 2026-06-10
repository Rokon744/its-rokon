"use client";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import SectionHeader from "./SectionHeader";
import {
  Mail,
  Github,
  Linkedin,
  ChevronRight,
  Send,
  Lock,
  Star,
  Loader,
} from "lucide-react";

/* ─── Contact ─── */
export default function Contact() {
  const formRef = useRef();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // direct 4th parameter e string hisebe public key pass kora holo
    emailjs
      .sendForm(
        "service_ftci20m",
        "template_n9l9044",
        formRef.current,
        "b-f3jDXDlBa5qxgz0",
      )
      .then(() => {
        setSent(true);
        setLoading(false);
        formRef.current.reset();
        setTimeout(() => setSent(false), 7000);
      })
      .catch((err) => {
        // detail error dekhon
        console.error("EmailJS error status:", err);
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          label="GET IN TOUCH"
          title="Let's Build Together"
          sub="Open to freelance contracts, full-time roles, and exciting collaborations."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          {/* Info side — হুবহু same */}
          <div className="space-y-6">
            <div className="glass rounded-2xl p-4 sm:p-6">
              <h3 className="font-display font-bold text-white mb-4">
                Direct Connect
              </h3>
              <div className="space-y-3">
                {[
                  {
                    Icon: Mail,
                    label: "Gmail",
                    value: "roknujjamanripon@gmail.com",
                    accent: "#00f5d4",
                    href: "malito:roknujjamanripon@gmail.com",
                  },
                  {
                    Icon: Github,
                    label: "GitHub",
                    value: "github.com/Rokon744",
                    accent: "#a5b4fc",
                    href: "https://github.com/Rokon744",
                  },
                  {
                    Icon: Linkedin,
                    label: "LinkedIn",
                    value: "linkedin.com/in/dev-rokon",
                    accent: "#60a5fa",
                    href: "https://www.linkedin.com/in/dev-rokon/",
                  },
                ].map(({ Icon, label, value, accent, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    className="flex items-center gap-3 p-3 rounded-xl transition-all duration-200 group"
                    style={{
                      border: "1px solid rgba(255,255,255,0.06)",
                      background: "rgba(255,255,255,0.02)",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.borderColor = `${accent}40`)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.borderColor =
                        "rgba(255,255,255,0.06)")
                    }
                  >
                    <div
                      className="p-2 rounded-lg"
                      style={{ background: `${accent}15`, color: accent }}
                    >
                      <Icon size={16} />
                    </div>
                    <div>
                      <div
                        className="font-mono text-xs"
                        style={{
                          color: "rgba(255,255,255,0.35)",
                          fontSize: "0.6rem",
                        }}
                      >
                        {label}
                      </div>
                      <div className="font-body text-sm text-white/70">
                        {value}
                      </div>
                    </div>
                    <ChevronRight
                      size={14}
                      className="ml-auto text-white/20 group-hover:text-white/50 transition-colors"
                    />
                  </a>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-2">
                <div
                  className="w-2 h-2 rounded-full bg-emerald-400"
                  style={{ boxShadow: "0 0 6px #34d399" }}
                />
                <span className="font-mono text-xs neon-cyan">
                  AVAILABLE NOW
                </span>
              </div>
              <p
                className="font-body text-sm"
                style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}
              >
                Currently open to full-time opportunities and freelance
                projects. Response time:{" "}
                <strong className="text-white">under 24 hours.</strong>
              </p>
              <div
                className="mt-4 flex items-center gap-2 font-mono text-xs"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                <Lock size={12} /> Encrypted · Secure · Professional
              </div>
            </div>
          </div>

          {/* Form side — শুধু form এ emailjs যোগ */}
          <div className="glass rounded-2xl p-6">
            <h3 className="font-display font-bold text-white mb-5">
              Send a Message
            </h3>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  className="font-mono text-xs mb-1.5 block"
                  style={{
                    color: "rgba(255,255,255,0.4)",
                    fontSize: "0.65rem",
                  }}
                >
                  YOUR NAME
                </label>
                <input
                  name="name"
                  required
                  className="form-input"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label
                  className="font-mono text-xs mb-1.5 block"
                  style={{
                    color: "rgba(255,255,255,0.4)",
                    fontSize: "0.65rem",
                  }}
                >
                  EMAIL ADDRESS
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  className="form-input"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label
                  className="font-mono text-xs mb-1.5 block"
                  style={{
                    color: "rgba(255,255,255,0.4)",
                    fontSize: "0.65rem",
                  }}
                >
                  MESSAGE
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="form-input"
                  placeholder="Tell me about your project..."
                  style={{ resize: "none" }}
                />
              </div>
              <button
                type="submit"
                disabled={loading || sent}
                className={`w-full py-3 rounded-xl font-body font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 ${
                  sent
                    ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                    : "btn-primary text-black"
                }`}
              >
                {loading ? (
                  <>
                    <Loader size={15} className="animate-spin" /> Sending...
                  </>
                ) : sent ? (
                  <>
                    <Star size={15} /> Message Sent! Talk soon.
                  </>
                ) : (
                  <>
                    <Send size={15} /> <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
