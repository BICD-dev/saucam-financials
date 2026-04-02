"use client";

import React, { useState } from "react";

/* ─── Types ─────────────────────────────────────────────────── */
type FAQItem = { q: string; a: string };
type FAQGroup = { category: string; items: FAQItem[] };

/* ─── Data ──────────────────────────────────────────────────── */
const serviceCards = [
  {
    name: "Corporate Remittance",
    description:
      "Empower your business with global reach. Our remittance infrastructure allows for high-volume cross-border transfers with real-time tracking and automated compliance. Designed for scale, we help you settle vendor invoices and payroll across 50+ countries instantly.",
    tag: "Business",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" stroke="#2563EB" strokeWidth="1.5"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    accent: "#DBEAFE",
  },
  {
    name: "Asset-Backed Microfinance",
    description:
      "Unlock liquidity without liquidating your assets. We provide specialized credit facilities secured against your business assets. Our microfinance model focuses on sustainable growth, offering flexible repayment terms that align with your cash flow cycles.",
    tag: "Finance",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="7" width="20" height="14" rx="2" stroke="#2563EB" strokeWidth="1.5"/>
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" stroke="#2563EB" strokeWidth="1.5"/>
        <path d="M12 12v4M10 14h4" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    accent: "#EDE9FE",
  },
  {
    name: "Saucam Exchange App",
    description:
      "The future of currency management in your pocket. Swap between major world currencies at mid-market rates. The Saucam app provides multi-currency wallets, instant P2P transfers, and detailed spending analytics for the modern entrepreneur.",
    tag: "Mobile",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="5" y="2" width="14" height="20" rx="2" stroke="#2563EB" strokeWidth="1.5"/>
        <path d="M9 18h6" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M8 8l2 2 4-4" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    accent: "#D1FAE5",
  },
  {
    name: "Foreign Exchange",
    description:
      "Access deep liquidity pools and competitive FX rates. Our platform mitigates currency risk through forward contracts and spot trades, ensuring your profit margins remain protected despite market volatility.",
    tag: "FX",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M7 16V4m0 0L4 7m3-3l3 3" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17 8v12m0 0l3-3m-3 3l-3-3" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    accent: "#FEF9C3",
  },
  {
    name: "Currency Brokerage",
    description:
      "Personalized brokerage services for high-net-worth transactions. Our expert brokers provide market insights and execution strategies to ensure you get the best possible value on large-scale currency acquisitions.",
    tag: "Brokerage",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.3L12 17l-6.2 4.2 2.4-7.3L2 9.4h7.6z" stroke="#2563EB" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    accent: "#FFE4E6",
  },
  {
    name: "Cross-Border Payments",
    description:
      "With the Saucam Exchange App, web platform and physical branch network, customers can initiate transfers, track transactions in real-time and access support where needed — bridging digital convenience and human assistance.",
    tag: "Payments",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M5 12h14M15 8l4 4-4 4" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 6a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6z" stroke="#2563EB" strokeWidth="1.5"/>
      </svg>
    ),
    accent: "#DBEAFE",
  },
  {
    name: "Credit Card Payments",
    description:
      "Saucam offers secure and reliable credit card payment solutions for global transactions. All payments are processed using bank-grade encryption, giving your customers and your business total peace of mind.",
    tag: "Cards",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="5" width="20" height="14" rx="2" stroke="#2563EB" strokeWidth="1.5"/>
        <path d="M2 10h20" stroke="#2563EB" strokeWidth="1.5"/>
        <path d="M6 15h4" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    accent: "#FCE7F3",
  },
  {
    name: "TravelCard Investment & Savings",
    description:
      "The service combines Target Savings Plans and Fixed Yield Investment Plans, allowing users to save with purpose while earning stable and predictable returns — perfect for frequent travellers and global entrepreneurs.",
    tag: "Savings",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M3 10a9 9 0 1018 0H3z" stroke="#2563EB" strokeWidth="1.5"/>
        <path d="M12 10V3M8 6l4-3 4 3" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    accent: "#D1FAE5",
  },
];

const services = serviceCards.map((s) => s.name);

const guarantees = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path
          d="M14 3L5 7v8c0 5.5 3.9 10.7 9 12 5.1-1.3 9-6.5 9-12V7L14 3z"
          stroke="#1E3A6E"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M9.5 14l3 3 6-6"
          stroke="#1E3A6E"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Compliance",
    body: "We cooperate and work closely with the Central Bank of the UAE and other international organizations to prevent money laundering and suspicious transactions. We have various practices and technology in place to observe the country's anti-money laundering laws.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="10" r="4.5" stroke="#1E3A6E" strokeWidth="2" />
        <path
          d="M5 24c0-5 4-9 9-9s9 4 9 9"
          stroke="#1E3A6E"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="21" cy="10" r="3" stroke="#1E3A6E" strokeWidth="1.5" />
        <path
          d="M24 21c0-3-1.8-5.5-4.3-6.5"
          stroke="#1E3A6E"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Reliable Relationship Managers",
    body: "Once you partner with us, a relationship manager will work with you to focus on your needs and constantly monitor the market to help you achieve significant cost savings. Our team is available 24×7 to provide you with the support you require. We will also work closely with you to develop a customized strategy that meets your needs.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="#1E3A6E" strokeWidth="2" />
        <path
          d="M14 8v2m0 8v2M10 14h8"
          stroke="#1E3A6E"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M11.5 10.5c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5c0 2.5-2.5 3.5-2.5 3.5s-2.5-1-2.5-3.5z"
          fill="#1E3A6E"
          opacity="0.2"
        />
      </svg>
    ),
    title: "Competitive Pricing",
    body: "Our corporate services in Dubai and throughout the UAE come with the best market rates for international money transfers and foreign exchange services. Our commitment to providing you with competitive rates means you can trust us to help you save money and achieve your business goals.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path
          d="M5 14h3l3-8 4 16 3-8h5"
          stroke="#1E3A6E"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Quick & Secure Financial Solutions",
    body: "We make it a priority to offer fast and secure services to our corporate customers. Whether you need to open an account, make day-to-day branch transactions or request rate updates, you can count on us to provide you with the information and assistance you require.",
  },
];

const faqGroups: FAQGroup[] = [
  {
    category: "General",
    items: [
      {
        q: "What is Saucam Financial?",
        a: "Saucam Financial is a financial services provider offering solutions such as corporate remittance, foreign exchange, cross-border payments, asset-backed microfinance, and investment products.",
      },
      {
        q: "Who can use Saucam Financial services?",
        a: "Both individuals and businesses can access Saucam Financial's services, depending on their financial needs.",
      },
    ],
  },
  {
    category: "Corporate Remittance",
    items: [
      {
        q: "What is Corporate Remittance?",
        a: "Corporate Remittance allows businesses to send funds immediately while settling the payment later through flexible repayment options.",
      },
      {
        q: "Who is eligible for Corporate Remittance?",
        a: "This service is designed primarily for businesses that need to make urgent payments without immediate liquidity.",
      },
    ],
  },
  {
    category: "Asset-Backed Microfinance",
    items: [
      {
        q: "What is Asset-Backed Microfinance?",
        a: "It is a loan service where financing is secured using assets, combined with modern digital tracking for transparency and security.",
      },
      {
        q: "What types of assets can be used as collateral?",
        a: "Assets may include equipment, inventory, or other valuable holdings, subject to approval.",
      },
    ],
  },
  {
    category: "Saucam Exchange Transfer App",
    items: [
      {
        q: "What is the Saucam Exchange App?",
        a: "It is a mobile application that allows users to send and receive money instantly and securely across borders.",
      },
      {
        q: "Is the app secure?",
        a: "Yes, the app is built with strong security protocols to ensure safe and reliable transactions.",
      },
    ],
  },
  {
    category: "Foreign Exchange & Currency Brokerage",
    items: [
      {
        q: "What foreign exchange services does Saucam offer?",
        a: "Saucam provides fast and secure currency conversion and international money transfers.",
      },
      {
        q: "What is a currency broker?",
        a: "A currency broker facilitates foreign currency transactions, helping clients get competitive exchange rates and smooth transfers.",
      },
    ],
  },
  {
    category: "Cross-Border Payments",
    items: [
      {
        q: "How do cross-border payments work with Saucam?",
        a: "Saucam enables fast and secure international payments for both individuals and businesses globally.",
      },
      {
        q: "How long do cross-border transfers take?",
        a: "Transfer times may vary but are designed to be as fast and efficient as possible.",
      },
    ],
  },
  {
    category: "Credit Card Payments",
    items: [
      {
        q: "Does Saucam support credit card payments?",
        a: "Yes, Saucam offers secure and reliable credit card payment solutions for global transactions.",
      },
      {
        q: "Are credit card transactions safe?",
        a: "All transactions are processed using secure systems to protect user data and funds.",
      },
    ],
  },
  {
    category: "TravelCard Investment & Savings",
    items: [
      {
        q: "What is the TravelCard Investment & Savings Scheme?",
        a: "It is a savings and investment program designed to help users grow their funds while planning for future financial goals.",
      },
      {
        q: "What are the benefits of this scheme?",
        a: "It offers potentially high returns and a secure way to save and invest for the future.",
      },
    ],
  },
  {
    category: "Security & Reliability",
    items: [
      {
        q: "How does Saucam ensure transaction security?",
        a: "Saucam uses modern digital systems, encryption, and monitoring tools to ensure all transactions are secure and transparent.",
      },
      {
        q: "Can I track my transactions?",
        a: "Yes, digital tracking systems allow users to monitor their transactions in real time.",
      },
    ],
  },
];

/* ─── Form state type ───────────────────────────────────────── */
type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  service: string;
  message: string;
};

/* ─── Page Component ─────────────────────────────────────────── */
export default function PersonalPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("General");
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const activeFaqs =
    faqGroups.find((g) => g.category === activeCategory)?.items ?? [];

  return (
    <main style={{ background: "#E2E8F0" }} className="text-slate-900">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        style={{
          background: "linear-gradient(135deg, #60A5FA 0%, #3B82F6 40%, #2563EB 100%)",
          position: "relative",
          overflow: "hidden",
        }}
        className="px-6 py-28 text-white text-center"
      >
        {/* Decorative circles */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            width: 500,
            height: 500,
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.08)",
            top: -200,
            right: -100,
          }}
        />
        <div
          aria-hidden
          style={{
            position: "absolute",
            width: 300,
            height: 300,
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.06)",
            bottom: -120,
            left: -80,
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 text-sm font-semibold"
            style={{
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#60EFC0",
                display: "inline-block",
              }}
            />
            Personal Financial Services
          </div>

          <h1
            className="font-bold mb-5"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.6rem)", lineHeight: 1.15 }}
          >
            Financial Solutions
            <br />
            <span style={{ color: "#90CAF9" }}>Tailored for You</span>
          </h1>

          <p
            className="text-blue-100 mb-10 mx-auto"
            style={{ fontSize: 18, lineHeight: 1.75, maxWidth: 560 }}
          >
            Whether you&apos;re sending money abroad, growing your savings, or
            accessing foreign exchange — Saucam puts world-class financial tools
            in your hands.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#inquiry"
              style={{
                background: "#fff",
                color: "#0D47A1",
                padding: "13px 32px",
                borderRadius: 10,
                fontWeight: 700,
                fontSize: 15,
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Make an Enquiry
            </a>
            <a
              href="#guarantee"
              style={{
                background: "rgba(255,255,255,0.12)",
                color: "#fff",
                padding: "13px 32px",
                borderRadius: 10,
                fontWeight: 600,
                fontSize: 15,
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.25)",
                display: "inline-block",
              }}
            >
              Our Promise
            </a>
          </div>

          {/* Trust badges */}
          <div
            className="flex gap-6 justify-center flex-wrap mt-14"
            style={{ opacity: 0.75 }}
          >
            {["Central Bank Compliant", "256-bit Encrypted", "50+ Countries", "24×7 Support"].map(
              (b) => (
                <div
                  key={b}
                  className="flex items-center gap-2 text-sm"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M2 7l3.5 3.5L12 3"
                      stroke="#60EFC0"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {b}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* ── Services Grid ────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: "#fff" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p
              className="text-sm font-bold uppercase tracking-widest mb-3"
              style={{ color: "#2563EB" }}
            >
              What we offer
            </p>
            <h2
              className="text-4xl font-bold mb-3"
              style={{ color: "#0A2D6E" }}
            >
              Our Services
            </h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">
              A full suite of financial tools built for individuals and businesses
              operating across borders.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: 20,
            }}
          >
            {serviceCards.map((svc) => (
              <div
                key={svc.name}
                style={{
                  background: "#fff",
                  border: "1.5px solid #E2E8F0",
                  borderRadius: 16,
                  padding: "28px 24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                  transition: "box-shadow 0.2s, border-color 0.2s, transform 0.2s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 8px 32px rgba(37,99,235,0.12)";
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    "#BFDBFE";
                  (e.currentTarget as HTMLDivElement).style.transform =
                    "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    "#E2E8F0";
                  (e.currentTarget as HTMLDivElement).style.transform =
                    "translateY(0)";
                }}
              >
                {/* Icon + tag row */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      background: svc.accent,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {svc.icon}
                  </div>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase" as const,
                      padding: "3px 10px",
                      borderRadius: 99,
                      background: svc.accent,
                      color: "#1D4ED8",
                    }}
                  >
                    {svc.tag}
                  </span>
                </div>

                {/* Text */}
                <div>
                  <h3
                    style={{
                      fontSize: 17,
                      fontWeight: 700,
                      color: "#0A2D6E",
                      marginBottom: 8,
                    }}
                  >
                    {svc.name}
                  </h3>
                  <p
                    style={{
                      fontSize: 14,
                      color: "#64748B",
                      lineHeight: 1.7,
                    }}
                  >
                    {svc.description}
                  </p>
                </div>

                {/* Learn more link */}
                <div style={{ marginTop: "auto", paddingTop: 8 }}>
                  <a
                    href="#inquiry"
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      color: "#2563EB",
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 5,
                    }}
                  >
                    Enquire now
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M3 7h8M8 4l3 3-3 3"
                        stroke="#2563EB"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Enquiry Form ─────────────────────────────────────── */}
      <section
        id="inquiry"
        className="py-24 px-6"
        style={{ background: "#E2E8F0" }}
      >
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <div className="mb-12">
            <p
              className="text-sm font-bold uppercase tracking-widest mb-3"
              style={{ color: "#1565C0" }}
            >
              Get in touch
            </p>
            <h2
              className="text-4xl font-bold mb-3"
              style={{ color: "#0A2D6E" }}
            >
              Inquire About Our Services
            </h2>
            <p className="text-slate-600 text-lg max-w-xl">
              Tell us what you need and a dedicated relationship manager will
              reach out within one business day.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            {/* Form card */}
            <div
              className="lg:col-span-3 rounded-2xl p-8 lg:p-10"
              style={{
                background: "#fff",
                boxShadow: "0 4px 32px rgba(10,45,110,0.08)",
                border: "1px solid rgba(10,45,110,0.07)",
              }}
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 gap-5 text-center">
                  <div
                    style={{
                      width: 64,
                      height: 64,
                      borderRadius: "50%",
                      background: "#EBF5FF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <path
                        d="M6 16l7 7L26 9"
                        stroke="#1565C0"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3
                    className="text-2xl font-bold"
                    style={{ color: "#0A2D6E" }}
                  >
                    Enquiry Submitted!
                  </h3>
                  <p className="text-slate-500 max-w-sm">
                    Thank you, {form.firstName}. A relationship manager will
                    contact you at{" "}
                    <span className="font-semibold text-slate-700">
                      {form.email}
                    </span>{" "}
                    within one business day.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        firstName: "",
                        lastName: "",
                        email: "",
                        phone: "",
                        country: "",
                        service: "",
                        message: "",
                      });
                    }}
                    style={{
                      background: "#0D47A1",
                      color: "#fff",
                      padding: "11px 28px",
                      borderRadius: 9,
                      fontWeight: 600,
                      fontSize: 14,
                      border: "none",
                      cursor: "pointer",
                      marginTop: 8,
                    }}
                  >
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  {/* Row: First + Last name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField label="First Name" required>
                      <input
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        placeholder="Ada"
                        required
                        style={inputStyle}
                      />
                    </FormField>
                    <FormField label="Last Name" required>
                      <input
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                        placeholder="Okonkwo"
                        required
                        style={inputStyle}
                      />
                    </FormField>
                  </div>

                  {/* Row: Email + Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField label="Email Address" required>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="ada@company.com"
                        required
                        style={inputStyle}
                      />
                    </FormField>
                    <FormField label="Phone Number">
                      <input
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+234 800 000 0000"
                        style={inputStyle}
                      />
                    </FormField>
                  </div>

                  {/* Row: Country + Service */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField label="Country of Residence" required>
                      <input
                        name="country"
                        value={form.country}
                        onChange={handleChange}
                        placeholder="Nigeria"
                        required
                        style={inputStyle}
                      />
                    </FormField>
                    <FormField label="Service of Interest" required>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        required
                        style={{ ...inputStyle, color: form.service ? "#0f172a" : "#94a3b8" }}
                      >
                        <option value="" disabled>
                          Select a service
                        </option>
                        {services.map((s) => (
                          <option key={s} value={s} style={{ color: "#0f172a" }}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </FormField>
                  </div>

                  {/* Message */}
                  <FormField label="Your Message" required>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your needs, transaction volume, or any questions you have..."
                      required
                      rows={5}
                      style={{ ...inputStyle, resize: "vertical" }}
                    />
                  </FormField>

                  <button
                    type="submit"
                    style={{
                      background: "#0D47A1",
                      color: "#fff",
                      padding: "14px",
                      borderRadius: 10,
                      fontWeight: 700,
                      fontSize: 15,
                      border: "none",
                      cursor: "pointer",
                      letterSpacing: 0.3,
                      marginTop: 4,
                    }}
                  >
                    Submit Enquiry →
                  </button>
                </form>
              )}
            </div>

            {/* Side info */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              {[
                {
                  icon: "📞",
                  label: "Call Us",
                  value: "+971 4 000 0000",
                  sub: "Mon – Fri, 8am – 6pm GST",
                },
                {
                  icon: "✉️",
                  label: "Email Us",
                  value: "support@saucam.com",
                  sub: "We reply within 24 hours",
                },
                {
                  icon: "📍",
                  label: "Head Office",
                  value: "Dubai, UAE",
                  sub: "Business Bay, Floor 12",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl p-5 flex gap-4 items-start"
                  style={{
                    background: "#fff",
                    border: "1px solid rgba(10,45,110,0.08)",
                    boxShadow: "0 2px 12px rgba(10,45,110,0.05)",
                  }}
                >
                  <span style={{ fontSize: 22 }}>{item.icon}</span>
                  <div>
                    <p
                      className="text-xs font-bold uppercase tracking-widest mb-1"
                      style={{ color: "#1565C0" }}
                    >
                      {item.label}
                    </p>
                    <p className="font-semibold text-slate-800 text-sm">
                      {item.value}
                    </p>
                    <p className="text-slate-500 text-xs mt-0.5">{item.sub}</p>
                  </div>
                </div>
              ))}

              {/* Services list */}
              <div
                className="rounded-xl p-5 mt-2"
                style={{
                  background: "#0D47A1",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <p
                  className="text-xs font-bold uppercase tracking-widest mb-4"
                  style={{ color: "#90CAF9" }}
                >
                  Services Available
                </p>
                <ul className="flex flex-col gap-3">
                  {services.map((s) => (
                    <li
                      key={s}
                      className="flex items-center gap-2 text-sm text-blue-100"
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path
                          d="M2 7l3.5 3.5L12 3"
                          stroke="#60EFC0"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Guarantee ────────────────────────────────────── */}
      <section
        id="guarantee"
        className="py-24 px-6"
        style={{ background: "#fff" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p
              className="text-sm font-bold uppercase tracking-widest mb-3"
              style={{ color: "#1565C0" }}
            >
              Why choose us
            </p>
            <h2
              className="text-4xl font-bold"
              style={{ color: "#0A2D6E" }}
            >
              Our Guarantee
            </h2>
            <p className="text-slate-500 mt-3 text-lg max-w-xl mx-auto">
              Every commitment we make is backed by rigorous standards, expert
              people, and proven technology.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {guarantees.map((g, i) => (
              <div
                key={g.title}
                className="rounded-2xl p-8 flex flex-col gap-5"
                style={{
                  background: i % 2 === 0 ? "#F0F5FF" : "#fff",
                  border: "1px solid rgba(10,45,110,0.09)",
                  boxShadow: "0 2px 20px rgba(10,45,110,0.05)",
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 12,
                    background: "#E8EEF9",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {g.icon}
                </div>
                <div>
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ color: "#0A2D6E" }}
                  >
                    {g.title}
                  </h3>
                  <p
                    className="text-slate-600 leading-relaxed"
                    style={{ fontSize: 15 }}
                  >
                    {g.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: "#E2E8F0" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p
              className="text-sm font-bold uppercase tracking-widest mb-3"
              style={{ color: "#1565C0" }}
            >
              Got questions?
            </p>
            <h2
              className="text-4xl font-bold"
              style={{ color: "#0A2D6E" }}
            >
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500 mt-3 text-lg">
              Everything you need to know about our services.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Category tabs */}
            <div className="lg:col-span-1 flex flex-col gap-1">
              {faqGroups.map((g) => (
                <button
                  key={g.category}
                  onClick={() => {
                    setActiveCategory(g.category);
                    setOpenFaq(null);
                  }}
                  className="text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all"
                  style={{
                    background:
                      activeCategory === g.category ? "#0D47A1" : "#fff",
                    color:
                      activeCategory === g.category
                        ? "#fff"
                        : "#475569",
                    border:
                      activeCategory === g.category
                        ? "1px solid #0D47A1"
                        : "1px solid rgba(10,45,110,0.08)",
                    boxShadow:
                      activeCategory === g.category
                        ? "0 4px 14px rgba(13,71,161,0.25)"
                        : "none",
                    cursor: "pointer",
                  }}
                >
                  {g.category}
                </button>
              ))}
            </div>

            {/* Accordion */}
            <div className="lg:col-span-3 flex flex-col gap-3">
              {activeFaqs.map((item, idx) => {
                const key = `${activeCategory}-${idx}`;
                const isOpen = openFaq === key;
                return (
                  <div
                    key={key}
                    className="rounded-xl overflow-hidden"
                    style={{
                      background: "#fff",
                      border: isOpen
                        ? "1px solid rgba(13,71,161,0.3)"
                        : "1px solid rgba(10,45,110,0.08)",
                      boxShadow: isOpen
                        ? "0 4px 20px rgba(10,45,110,0.09)"
                        : "0 1px 6px rgba(10,45,110,0.04)",
                      transition: "box-shadow 0.2s, border 0.2s",
                    }}
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : key)}
                      className="w-full flex items-center justify-between px-6 py-5 text-left"
                      style={{ cursor: "pointer", background: "none", border: "none" }}
                    >
                      <span
                        className="font-semibold text-base pr-4"
                        style={{ color: isOpen ? "#0D47A1" : "#1E293B" }}
                      >
                        {item.q}
                      </span>
                      <span
                        style={{
                          flexShrink: 0,
                          width: 28,
                          height: 28,
                          borderRadius: "50%",
                          background: isOpen ? "#0D47A1" : "#EFF2F9",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          transition: "background 0.2s, transform 0.3s",
                          transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                        }}
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                        >
                          <path
                            d="M6 1v10M1 6h10"
                            stroke={isOpen ? "#fff" : "#0D47A1"}
                            strokeWidth="1.8"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                    </button>

                    {isOpen && (
                      <div
                        className="px-6 pb-5"
                        style={{ borderTop: "1px solid rgba(10,45,110,0.08)" }}
                      >
                        <p
                          className="text-slate-600 leading-relaxed pt-4"
                          style={{ fontSize: 15 }}
                        >
                          {item.a}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Still have questions CTA */}
          <div
            className="mt-14 rounded-2xl p-10 text-center"
            style={{
              background: "linear-gradient(135deg, #0D47A1 0%, #0A2D6E 100%)",
            }}
          >
            <h3 className="text-2xl font-bold text-white mb-3">
              Still have questions?
            </h3>
            <p className="text-blue-200 mb-7 max-w-md mx-auto">
              Our team is available around the clock. Reach out and we&apos;ll
              connect you with the right expert.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="#inquiry"
                style={{
                  background: "#fff",
                  color: "#0D47A1",
                  padding: "12px 28px",
                  borderRadius: 9,
                  fontWeight: 700,
                  fontSize: 14,
                  textDecoration: "none",
                }}
              >
                Make an Enquiry
              </a>
              <a
                href="mailto:support@saucam.com"
                style={{
                  background: "rgba(255,255,255,0.12)",
                  color: "#fff",
                  padding: "12px 28px",
                  borderRadius: 9,
                  fontWeight: 600,
                  fontSize: 14,
                  border: "1px solid rgba(255,255,255,0.25)",
                  textDecoration: "none",
                }}
              >
                Email Support
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ─── Helper components ─────────────────────────────────────── */
function FormField({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        className="text-sm font-semibold"
        style={{ color: "#1E293B" }}
      >
        {label}
        {required && <span style={{ color: "#1565C0", marginLeft: 2 }}>*</span>}
      </label>
      {children}
    </div>
  );
}

/* ─── Shared input style ────────────────────────────────────── */
const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "11px 14px",
  borderRadius: 9,
  border: "1.5px solid #CBD5E1",
  background: "#F8FAFC",
  fontSize: 14,
  color: "#0f172a",
  outline: "none",
  fontFamily: "inherit",
  transition: "border-color 0.2s",
};