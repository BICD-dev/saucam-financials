"use client";

import React, { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import {faqGroups} from "@/constants/faq";
import { serviceCards } from "@/constants/serviceCards";
import { guarantees } from "@/constants/guarantee";
import {services} from "@/constants/serviceCards";
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
        className="px-3 sm:px-6 py-20 sm:py-28 text-white text-center"
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
            style={{ fontSize: "clamp(2rem, 5vw, 3.6rem)", lineHeight: 1.15 }}
          >
            Financial Solutions
            <br />
            <span style={{ color: "#90CAF9" }}>Tailored for You</span>
          </h1>

          <p
            className="text-blue-100 mb-8 sm:mb-10 mx-auto text-sm sm:text-[18px] leading-7 sm:leading-[1.75]"
            style={{ maxWidth: 560 }}
          >
            Whether you&apos;re sending money abroad, growing your savings, or
            accessing foreign exchange — Saucam puts world-class financial tools
            in your hands.
          </p>

          <div className="flex gap-3 sm:gap-4 justify-center flex-wrap">
            <a
              href="#inquiry"
              style={{
                background: "#fff",
                color: "#0D47A1",
                padding: "12px 24px",
                borderRadius: 10,
                fontWeight: 700,
                fontSize: 14,
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
                padding: "12px 24px",
                borderRadius: 10,
                fontWeight: 600,
                fontSize: 14,
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
            {["Central Bank Compliant", "256-bit Encrypted", "24×7 Support"].map(
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
      <section className="py-16 sm:py-24 px-3 sm:px-6" style={{ background: "#fff" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <p
              className="text-sm font-bold uppercase tracking-widest mb-3"
              style={{ color: "#2563EB" }}
            >
              What we offer
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-3"
              style={{ color: "#0A2D6E" }}
            >
              Our Services
            </h2>
            <p className="text-slate-500 text-base sm:text-lg max-w-xl mx-auto">
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
                  padding: "24px 20px",
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
                      width: 44,
                      height: 44,
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
                      fontSize: 16,
                      fontWeight: 700,
                      color: "#0A2D6E",
                      marginBottom: 8,
                    }}
                  >
                    {svc.name}
                  </h3>
                  <p
                    style={{
                      fontSize: 13,
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
        className="py-16 sm:py-24 px-3 sm:px-6"
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
              className="text-3xl sm:text-4xl font-bold mb-3"
              style={{ color: "#0A2D6E" }}
            >
              Inquire About Our Services
            </h2>
            <p className="text-slate-600 text-base sm:text-lg max-w-xl">
              Tell us what you need and a dedicated relationship manager will
              reach out within one business day.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 items-start">
            {/* Form card */}
            <div
              className="lg:col-span-3 rounded-2xl p-6 sm:p-8 lg:p-10"
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
                      width: 56,
                      height: 56,
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
                  icon: <Phone size={20} strokeWidth={2} />,
                  label: "Call Us",
                  value: "+971 4 000 0000",
                  sub: "Mon – Fri, 8am – 6pm GST",
                },
                {
                  icon: <Mail size={20} strokeWidth={2} />,
                  label: "Email Us",
                  value: "support@saucam.com",
                  sub: "We reply within 24 hours",
                },
                {
                  icon: <MapPin size={20} strokeWidth={2} />,
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
                    <span className="text-[#1565C0]" aria-hidden>
                      {item.icon}
                    </span>
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
        className="py-16 sm:py-24 px-3 sm:px-6"
        style={{ background: "#fff" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <p
              className="text-sm font-bold uppercase tracking-widest mb-3"
              style={{ color: "#1565C0" }}
            >
              Why choose us
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold"
              style={{ color: "#0A2D6E" }}
            >
              Our Guarantee
            </h2>
            <p className="text-slate-500 mt-3 text-base sm:text-lg max-w-xl mx-auto">
              Every commitment we make is backed by rigorous standards, expert
              people, and proven technology.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {guarantees.map((g, i) => (
              <div
                key={g.title}
                className="rounded-2xl p-6 sm:p-8 flex flex-col gap-5"
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
      <section className="py-16 sm:py-24 px-3 sm:px-6" style={{ background: "#E2E8F0" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <p
              className="text-sm font-bold uppercase tracking-widest mb-3"
              style={{ color: "#1565C0" }}
            >
              Got questions?
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold"
              style={{ color: "#0A2D6E" }}
            >
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500 mt-3 text-base sm:text-lg">
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