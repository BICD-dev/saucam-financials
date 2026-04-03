import React from "react";

/* ─── Data ─────────────────────────────────────────────────── */

const values = [
  {
    number: "01",
    title: "Integrity Above All",
    body: "We operate with complete transparency — in our pricing, our compliance, and our communication. There are no hidden fees, no misleading terms, and no shortcuts. Our clients trust us because we have earned it.",
    accent: "#DBEAFE",
    iconColor: "#1D4ED8",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path d="M13 2L4 6v8c0 5 3.6 9.8 9 11 5.4-1.2 9-6 9-11V6L13 2z" stroke="#1D4ED8" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M8.5 13l3 3 6-6" stroke="#1D4ED8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: "02",
    title: "Client-First Always",
    body: "Every product, process, and decision at Saucam is built around one question: does this serve our clients better? From 24×7 relationship managers to real-time tracking, we make your needs our priority.",
    accent: "#D1FAE5",
    iconColor: "#065F46",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <circle cx="13" cy="9" r="4.5" stroke="#065F46" strokeWidth="1.8"/>
        <path d="M4.5 22c0-4.7 3.8-8.5 8.5-8.5S21.5 17.3 21.5 22" stroke="#065F46" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    number: "03",
    title: "Innovation with Purpose",
    body: "Technology is a means, not an end. We innovate to make financial services faster, cheaper, and more accessible — not for its own sake. Every feature we build solves a real problem for a real person.",
    accent: "#EDE9FE",
    iconColor: "#5B21B6",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <circle cx="13" cy="13" r="4" stroke="#5B21B6" strokeWidth="1.8"/>
        <path d="M13 3v3M13 20v3M3 13H6M20 13h3M5.6 5.6l2.1 2.1M18.3 18.3l2.1 2.1M18.3 5.6l-2.1 2.1M5.6 20.4l2.1-2.1" stroke="#5B21B6" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    number: "04",
    title: "Global Reach, Local Heart",
    body: "We serve clients in 50+ countries but we never forget the local context. Our corridors are built with deep market knowledge, our support teams speak your language, and our products fit your region.",
    accent: "#FEF9C3",
    iconColor: "#92400E",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <circle cx="13" cy="13" r="9.5" stroke="#92400E" strokeWidth="1.8"/>
        <path d="M3.5 13h19M13 3.5c-3 3-4.5 6-4.5 9.5s1.5 6.5 4.5 9.5M13 3.5c3 3 4.5 6 4.5 9.5s-1.5 6.5-4.5 9.5" stroke="#92400E" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    number: "05",
    title: "Compliance & Security",
    body: "We hold ourselves to the standards of the world's strictest financial regulators. Our AML frameworks, KYC systems, and encryption protocols are not just requirements — they are promises we make to every client.",
    accent: "#FFE4E6",
    iconColor: "#9F1239",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <rect x="5" y="11" width="16" height="12" rx="2" stroke="#9F1239" strokeWidth="1.8"/>
        <path d="M9 11V8a4 4 0 018 0v3" stroke="#9F1239" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="13" cy="17" r="1.5" fill="#9F1239"/>
      </svg>
    ),
  },
  {
    number: "06",
    title: "Inclusive Finance",
    body: "We believe access to quality financial services is a right, not a privilege. Saucam's products are designed to be accessible to the first-time entrepreneur and the multinational corporation alike.",
    accent: "#DCFCE7",
    iconColor: "#14532D",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path d="M13 3l2.5 6H22l-5.3 3.9 2 6.1L13 15.5l-5.7 3.5 2-6.1L4 9h6.5z" stroke="#14532D" strokeWidth="1.8" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const pillars = [
  {
    label: "Our Mission",
    heading: "To make world-class financial services accessible to every business and individual — regardless of borders.",
    body: "Saucam Financials exists to dismantle the barriers that slow down money movement and restrict access to capital. We do this by combining deep regulatory expertise, cutting-edge technology, and a genuine commitment to serving our clients at every step of their financial journey.",
    bg: "#EFF6FF",
    border: "#BFDBFE",
    tag: "Mission",
    tagBg: "#DBEAFE",
    tagColor: "#1D4ED8",
  },
  {
    label: "Our Vision",
    heading: "A world where money moves as freely, safely, and affordably as information.",
    body: "We envision a future where geography is never a barrier to financial opportunity. A future where an entrepreneur in Abuja has the same access to global markets as one in London. Saucam is building that future — one corridor, one product, one client at a time.",
    bg: "#F0FDF4",
    border: "#BBF7D0",
    tag: "Vision",
    tagBg: "#D1FAE5",
    tagColor: "#065F46",
  },
];

const commitments = [
  { title: "Transparency", body: "No hidden charges, no ambiguity. Our rates, fees, and terms are always clear." },
  { title: "Speed", body: "We obsess over settlement times. Every hour saved matters to our clients' cash flow." },
  { title: "Reliability", body: "99.9% platform uptime and redundant infrastructure so you can transact with confidence." },
  { title: "Accountability", body: "We own our mistakes and fix them fast. Our support teams have authority to resolve issues, not just escalate them." },
  { title: "Partnership", body: "We don't just process your money — we understand your business and grow with you." },
  { title: "Sustainability", body: "We build for the long term — in our business model, our regulatory standing, and our relationships." },
];

/* ─── Page ─────────────────────────────────────────────────── */
export default function MissionPage() {
  return (
    <main style={{ background: "#fff", color: "#0A2D6E" }}>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section style={{
        background: "linear-gradient(160deg, #EFF6FF 0%, #DBEAFE 55%, #BFDBFE 100%)",
        position: "relative", overflow: "hidden",
        padding: "100px 24px 88px",
      }}>
        {/* Decorative rings */}
        <div aria-hidden style={{
          position: "absolute", width: 480, height: 480, borderRadius: "50%",
          border: "1px solid rgba(37,99,235,0.1)", top: -180, right: -60, pointerEvents: "none",
        }} />
        <div aria-hidden style={{
          position: "absolute", width: 260, height: 260, borderRadius: "50%",
          border: "1px solid rgba(37,99,235,0.08)", bottom: -80, left: 40, pointerEvents: "none",
        }} />

        <div style={{ maxWidth: 800, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(37,99,235,0.1)", border: "1px solid rgba(37,99,235,0.2)",
            borderRadius: 99, padding: "6px 16px", marginBottom: 28,
          }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: "#1D4ED8", textTransform: "uppercase", letterSpacing: "0.07em" }}>
              About Saucam Financials
            </span>
          </div>

          <h1 style={{
            fontSize: "clamp(2.6rem, 6vw, 4rem)", fontWeight: 800,
            color: "#0A2D6E", lineHeight: 1.1, marginBottom: 24,
          }}>
            Mission &amp; Values
          </h1>

          <p style={{
            fontSize: 19, color: "#1E40AF", lineHeight: 1.75,
            maxWidth: 600, marginBottom: 44,
          }}>
            At Saucam Financials, everything we do is guided by a clear mission
            and an uncompromising set of values. They are not words on a wall —
            they are the standards we hold ourselves to every single day.
          </p>

          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a href="#values" style={{
              background: "#1D4ED8", color: "#fff",
              padding: "12px 28px", borderRadius: 10, fontWeight: 700, fontSize: 14,
              textDecoration: "none",
            }}>
              See our values
            </a>
            <a href="/about/our-story" style={{
              background: "rgba(29,78,216,0.08)", color: "#1D4ED8",
              padding: "12px 28px", borderRadius: 10, fontWeight: 600, fontSize: 14,
              border: "1.5px solid rgba(29,78,216,0.2)", textDecoration: "none",
            }}>
              Our story →
            </a>
          </div>
        </div>
      </section>

      {/* ── Mission + Vision ─────────────────────────────────── */}
      <section style={{ padding: "88px 24px", background: "#fff" }}>
        <div style={{
          maxWidth: 1100, margin: "0 auto",
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24,
        }}
          className="mv-grid"
        >
          {pillars.map((p) => (
            <div key={p.label} style={{
              background: p.bg, border: `1.5px solid ${p.border}`,
              borderRadius: 20, padding: "40px 36px",
            }}>
              <span style={{
                display: "inline-block",
                background: p.tagBg, color: p.tagColor,
                fontSize: 11, fontWeight: 800, letterSpacing: "0.08em",
                textTransform: "uppercase", padding: "4px 14px", borderRadius: 99, marginBottom: 20,
              }}>
                {p.tag}
              </span>
              <h2 style={{
                fontSize: "clamp(1.1rem, 2.2vw, 1.5rem)", fontWeight: 800,
                color: "#0A2D6E", lineHeight: 1.35, marginBottom: 18,
              }}>
                &ldquo;{p.heading}&rdquo;
              </h2>
              <p style={{ fontSize: 15, color: "#334155", lineHeight: 1.8 }}>
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Values Grid ──────────────────────────────────────── */}
      <section id="values" style={{ background: "#F8FAFF", padding: "88px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <p style={{
              fontSize: 12, fontWeight: 700, textTransform: "uppercase",
              letterSpacing: "0.1em", color: "#2563EB", marginBottom: 10,
            }}>
              What we stand for
            </p>
            <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 800, color: "#0A2D6E", marginBottom: 12 }}>
              Our Core Values
            </h2>
            <p style={{ fontSize: 16, color: "#475569", maxWidth: 520, margin: "0 auto" }}>
              Six principles that guide every decision, every product, and every
              interaction at Saucam Financials.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 20,
          }}>
            {values.map((v) => (
              <div key={v.number} style={{
                background: "#fff", border: "1.5px solid #E2E8F0",
                borderRadius: 16, padding: "28px 24px",
                display: "flex", flexDirection: "column", gap: 14,
                boxShadow: "0 2px 16px rgba(10,45,110,0.04)",
              }}>
                {/* Icon + number */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{
                    width: 50, height: 50, borderRadius: 12,
                    background: v.accent, display: "flex",
                    alignItems: "center", justifyContent: "center",
                  }}>
                    {v.icon}
                  </div>
                  <span style={{
                    fontSize: 28, fontWeight: 900,
                    color: "#EFF6FF",
                  }}>
                    {v.number}
                  </span>
                </div>

                <h3 style={{ fontWeight: 800, fontSize: 17, color: "#0A2D6E" }}>
                  {v.title}
                </h3>
                <p style={{ fontSize: 14, color: "#475569", lineHeight: 1.75 }}>
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Commitments ──────────────────────────────────────── */}
      <section style={{ background: "#fff", padding: "88px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 64, alignItems: "start" }}
            className="commit-grid"
          >
            {/* Left sticky heading */}
            <div style={{ position: "sticky", top: 100 }}>
              <p style={{
                fontSize: 12, fontWeight: 700, textTransform: "uppercase",
                letterSpacing: "0.1em", color: "#2563EB", marginBottom: 12,
              }}>
                What we commit to
              </p>
              <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800, color: "#0A2D6E", lineHeight: 1.2, marginBottom: 20 }}>
                Our Promise to Every Client
              </h2>
              <p style={{ fontSize: 15, color: "#475569", lineHeight: 1.8 }}>
                These commitments are not aspirational — they are the operating standards
                by which every person at Saucam is measured.
              </p>
            </div>

            {/* Right: commitment rows */}
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {commitments.map((c, i) => (
                <div key={c.title} style={{
                  display: "flex", gap: 20, alignItems: "flex-start",
                  padding: "24px 0",
                  borderBottom: i < commitments.length - 1 ? "1px solid #E2E8F0" : "none",
                }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: 10,
                    background: "#EFF6FF", flexShrink: 0,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M3 9l4 4 8-8" stroke="#1D4ED8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 700, fontSize: 16, color: "#0A2D6E", marginBottom: 6 }}>{c.title}</h4>
                    <p style={{ fontSize: 14, color: "#64748B", lineHeight: 1.75 }}>{c.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section style={{
        background: "linear-gradient(135deg, #1D4ED8 0%, #1E40AF 100%)",
        padding: "72px 24px", textAlign: "center",
      }}>
        <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 800, color: "#fff", marginBottom: 14 }}>
          Values you can bank on.
        </h2>
        <p style={{ fontSize: 17, color: "#BFDBFE", maxWidth: 460, margin: "0 auto 36px" }}>
          Ready to experience financial services built around integrity, speed, and genuine partnership?
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="/personal#inquiry" style={{
            background: "#fff", color: "#1D4ED8",
            padding: "13px 32px", borderRadius: 10, fontWeight: 700, fontSize: 15,
            textDecoration: "none",
          }}>
            Make an Enquiry
          </a>
          <a href="/about/our-story" style={{
            background: "rgba(255,255,255,0.12)", color: "#fff",
            padding: "13px 32px", borderRadius: 10, fontWeight: 600, fontSize: 15,
            border: "1px solid rgba(255,255,255,0.25)", textDecoration: "none",
          }}>
            Read Our Story
          </a>
        </div>
      </section>

      {/* ── Responsive ───────────────────────────────────────── */}
      <style>{`
        @media (max-width: 768px) {
          .mv-grid { grid-template-columns: 1fr !important; }
          .commit-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .commit-grid > div:first-child { position: static !important; }
        }
      `}</style>
    </main>
  );
}