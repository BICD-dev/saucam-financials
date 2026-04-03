import React from "react";

/* ─── Timeline milestones ────────────────────────────────── */
const milestones = [
  {
    year: "2023",
    title: "The Founding Vision",
    body: "Saucam Financials was born in Dubai out of a simple but powerful observation: businesses and individuals moving money across borders were being let down by slow, opaque, and expensive systems. Our founders set out to change that.",
  },
  {
    year: "2024",
    title: "First Regulatory Licence",
    body: "After two years of laying the groundwork, Saucam received its first licence from the Central Bank of the UAE — a milestone that signalled our commitment to operating at the highest standards of compliance and trust.",
  },
  {
    year: "2025",
    title: "Expanding Across Africa",
    body: "Recognising the enormous demand for reliable cross-border payments on the African continent, we launched dedicated corridors into Nigeria, Ghana, Kenya and South Africa, serving thousands of businesses for the first time.",
  },
  {
    year: "2026",
    title: "The Saucam Exchange App",
    body: "We put the power of multi-currency wallets and instant P2P transfers into every pocket. The Saucam Exchange App launched to overwhelming demand, onboarding over 50,000 users in its first six months.",
  },
  {
    year: "2026",
    title: "Asset-Backed Microfinance",
    body: "We introduced our asset-backed microfinance product — a first for our market — enabling SMEs to unlock working capital against existing assets without liquidating them. Over $20M in facilities were deployed in the first year.",
  },
];

const stats = [
  { value: "2+", label: "Countries served" },
  { value: "10+", label: "Business clients" },
  { value: "$1M+", label: "Total processed" },
];

const team = [
  {
    initials: "AK",
    name: "Amara Kone",
    role: "Co-Founder & CEO",
    bio: "Former investment banker with 15 years of experience across JPMorgan and Standard Chartered. Amara's vision for accessible cross-border finance is the heartbeat of Saucam.",
    color: "#DBEAFE",
    textColor: "#1D4ED8",
  },
  {
    initials: "RS",
    name: "Daniel Joseph",
    role: "Co-Founder & CTO",
    bio: "A fintech engineer who previously built payment infrastructure at Datafy Technologies and Strategic Outsourcing Limited. Daniel architected Saucam's core compliance and real-time settlement engine from the ground up.",
    color: "#D1FAE5",
    textColor: "#065F46",
  },
  {
    initials: "NN",
    name: "Bright Iheagwam",
    role: "Chief Operating Officer",
    bio: "A veteran of African financial markets, Bright led expansion operations at a pan-African bank for a decade before joining Saucam to build our corridor network.",
    color: "#EDE9FE",
    textColor: "#5B21B6",
  },
  {
    initials: "FH",
    name: "Folarin Ibrahim",
    role: "Chief Compliance Officer",
    bio: "With a background in regulatory affairs across the GCC and EU, Folarin ensures Saucam maintains the highest standards of AML, KYC and international compliance at scale.",
    color: "#FEF9C3",
    textColor: "#92400E",
  },
];

/* ─── Page ─────────────────────────────────────────────────── */
export default function OurStoryPage() {
  return (
    <main style={{ background: "#fff", color: "#0A2D6E" }}>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        style={{
          background: "linear-gradient(160deg, #EFF6FF 0%, #DBEAFE 55%, #BFDBFE 100%)",
          position: "relative",
          overflow: "hidden",
          padding: "100px 24px 80px",
        }}
      >
        {/* Decorative blobs */}
        <div aria-hidden style={{
          position: "absolute", width: 420, height: 420, borderRadius: "50%",
          background: "rgba(59,130,246,0.08)", top: -160, right: -80, pointerEvents: "none",
        }} />
        <div aria-hidden style={{
          position: "absolute", width: 260, height: 260, borderRadius: "50%",
          background: "rgba(37,99,235,0.06)", bottom: -80, left: 40, pointerEvents: "none",
        }} />

        <div style={{ maxWidth: 800, margin: "0 auto", position: "relative", zIndex: 1 }}>
          {/* Breadcrumb pill */}
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
            Our Story
          </h1>
          <p style={{
            fontSize: 19, color: "#1E40AF", lineHeight: 1.75,
            maxWidth: 620, marginBottom: 48,
          }}>
            From a small office in Dubai to a pan-African and global financial
            platform — this is the story of how Saucam Financials was built on
            the belief that money should move as freely as people.
          </p>

          {/* Stat row */}
          <div style={{ display: "flex", gap: 40, flexWrap: "wrap" }}>
            {stats.map((s) => (
              <div key={s.label}>
                <div style={{ fontSize: 30, fontWeight: 800, color: "#1D4ED8" }}>{s.value}</div>
                <div style={{ fontSize: 13, color: "#3B82F6", marginTop: 2 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who We Are ───────────────────────────────────────── */}
      <section style={{ background: "#fff", padding: "88px 24px" }}>
        <div style={{
          maxWidth: 1100, margin: "0 auto",
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64,
          alignItems: "center",
        }}
          className="story-two-col"
        >
          {/* Left: text */}
          <div>
            <p style={{
              fontSize: 12, fontWeight: 700, textTransform: "uppercase",
              letterSpacing: "0.1em", color: "#2563EB", marginBottom: 12,
            }}>
              Who we are
            </p>
            <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 800, color: "#0A2D6E", marginBottom: 20, lineHeight: 1.2 }}>
              A financial institution built on trust, reach, and technology.
            </h2>
            <p style={{ fontSize: 16, color: "#334155", lineHeight: 1.8, marginBottom: 16 }}>
              Saucam Financials is a UAE-based international financial services provider
              regulated by the Central Bank of the UAE. We offer a full spectrum of services —
              from corporate remittance and foreign exchange to asset-backed microfinance and
              investment products.
            </p>
            <p style={{ fontSize: 16, color: "#334155", lineHeight: 1.8 }}>
              We believe that access to world-class financial tools should not be limited by
              geography. Whether you are an entrepreneur in Lagos, a business owner in Dubai,
              or a family sending money home from London — Saucam is built for you.
            </p>
          </div>

          {/* Right: accent card grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {[
              { label: "Central Bank of UAE", sub: "Fully licensed & regulated", color: "#EFF6FF", border: "#BFDBFE" },
              { label: "2+ Countries", sub: "Global payment corridors", color: "#F0FDF4", border: "#BBF7D0" },
              { label: "AML Compliant", sub: "Full regulatory adherence", color: "#FFF7ED", border: "#FED7AA" },
              { label: "24 × 7 Support", sub: "Dedicated relationship managers", color: "#F5F3FF", border: "#DDD6FE" },
            ].map((c) => (
              <div key={c.label} style={{
                background: c.color, border: `1.5px solid ${c.border}`,
                borderRadius: 14, padding: "20px 18px",
              }}>
                <div style={{ fontWeight: 700, fontSize: 15, color: "#0A2D6E", marginBottom: 4 }}>{c.label}</div>
                <div style={{ fontSize: 13, color: "#475569" }}>{c.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ─────────────────────────────────────────── */}
      <section style={{ background: "#F8FAFF", padding: "88px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <p style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#2563EB", marginBottom: 10 }}>
              Our journey
            </p>
            <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 800, color: "#0A2D6E" }}>
              A decade of milestones
            </h2>
          </div>

          {/* Timeline items */}
          <div style={{ position: "relative" }}>
            {/* Vertical line */}
            <div style={{
              position: "absolute", left: 64, top: 0, bottom: 0,
              width: 2, background: "#DBEAFE",
            }} />

            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {milestones.map((m, i) => (
                <div key={m.year} style={{
                  display: "flex", gap: 32, alignItems: "flex-start",
                  paddingBottom: i < milestones.length - 1 ? 48 : 0,
                }}>
                  {/* Year badge */}
                  <div style={{
                    flexShrink: 0, width: 64,
                    display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 4,
                  }}>
                    <div style={{
                      width: 14, height: 14, borderRadius: "50%",
                      background: "#2563EB", border: "3px solid #EFF6FF",
                      boxShadow: "0 0 0 3px #BFDBFE",
                      zIndex: 1, flexShrink: 0,
                    }} />
                  </div>

                  {/* Content card */}
                  <div style={{
                    background: "#fff", border: "1.5px solid #E2E8F0",
                    borderRadius: 14, padding: "22px 24px", flex: 1,
                    boxShadow: "0 2px 12px rgba(10,45,110,0.05)",
                  }}>
                    <span style={{
                      display: "inline-block",
                      background: "#DBEAFE", color: "#1D4ED8",
                      fontSize: 12, fontWeight: 800, padding: "3px 12px",
                      borderRadius: 99, marginBottom: 10,
                    }}>
                      {m.year}
                    </span>
                    <h3 style={{ fontWeight: 700, fontSize: 17, color: "#0A2D6E", marginBottom: 8 }}>
                      {m.title}
                    </h3>
                    <p style={{ fontSize: 15, color: "#475569", lineHeight: 1.75 }}>
                      {m.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Leadership ───────────────────────────────────────── */}
      <section style={{ background: "#fff", padding: "88px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <p style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#2563EB", marginBottom: 10 }}>
              The people behind Saucam
            </p>
            <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 800, color: "#0A2D6E" }}>
              Our Leadership Team
            </h2>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: 20,
          }}>
            {team.map((p) => (
              <div key={p.name} style={{
                border: "1.5px solid #E2E8F0", borderRadius: 16,
                padding: "28px 22px", background: "#fff",
                boxShadow: "0 2px 16px rgba(10,45,110,0.05)",
              }}>
                <div style={{
                  width: 56, height: 56, borderRadius: "50%",
                  background: p.color, display: "flex", alignItems: "center",
                  justifyContent: "center", fontWeight: 800, fontSize: 17,
                  color: p.textColor, marginBottom: 16,
                }}>
                  {p.initials}
                </div>
                <div style={{ fontWeight: 800, fontSize: 16, color: "#0A2D6E" }}>{p.name}</div>
                <div style={{ fontSize: 13, color: "#2563EB", fontWeight: 600, marginBottom: 12 }}>{p.role}</div>
                <p style={{ fontSize: 14, color: "#475569", lineHeight: 1.7 }}>{p.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA banner ───────────────────────────────────────── */}
      <section style={{
        background: "linear-gradient(135deg, #1D4ED8 0%, #1E40AF 100%)",
        padding: "72px 24px", textAlign: "center",
      }}>
        <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 800, color: "#fff", marginBottom: 16 }}>
          Ready to start your financial journey?
        </h2>
        <p style={{ fontSize: 17, color: "#BFDBFE", marginBottom: 36, maxWidth: 480, margin: "0 auto 36px" }}>
          Join thousands of businesses and individuals who trust Saucam Financials every day.
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="/personal#inquiry" style={{
            background: "#fff", color: "#1D4ED8",
            padding: "13px 32px", borderRadius: 10, fontWeight: 700, fontSize: 15,
            textDecoration: "none",
          }}>
            Make an Enquiry
          </a>
          <a href="/about/mission" style={{
            background: "rgba(255,255,255,0.12)", color: "#fff",
            padding: "13px 32px", borderRadius: 10, fontWeight: 600, fontSize: 15,
            border: "1px solid rgba(255,255,255,0.25)", textDecoration: "none",
          }}>
            Our Mission & Values →
          </a>
        </div>
      </section>

      {/* ── Responsive helpers ───────────────────────────────── */}
      <style>{`
        @media (max-width: 768px) {
          .story-two-col {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </main>
  );
}