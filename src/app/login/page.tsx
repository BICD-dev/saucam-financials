"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Mail, ChevronDown } from "lucide-react";
import { phoneCountries } from "@/components/flags";
import QrPattern from "@/components/QrPattern";

const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 48 48">
    <path
      fill="#FFC107"
      d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.6-6 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.1 8 3l5.7-5.7C34.6 6 29.6 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.2-.1-2.4-.4-3.5z"
    />
    <path
      fill="#FF3D00"
      d="M6.3 14.7l6.6 4.8C14.6 16 18.9 13 24 13c3.1 0 5.8 1.1 8 3l5.7-5.7C34.6 6.4 29.6 4 24 4 16.3 4 9.6 8.3 6.3 14.7z"
    />
    <path
      fill="#4CAF50"
      d="M24 44c5.5 0 10.5-2.1 14.2-5.6l-6.5-5.5C29.6 34.8 27 36 24 36c-5.3 0-9.7-3.4-11.3-8l-6.6 5C9.5 39.6 16.2 44 24 44z"
    />
    <path
      fill="#1976D2"
      d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.2 4.2-4.1 5.5l6.5 5.5C41.4 36 44 30.6 44 24c0-1.2-.1-2.4-.4-3.5z"
    />
  </svg>
);

const AppleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 384 512" fill="#fff">
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.3-41.7-84.7-44.6-35.2-2.8-73.7 20.5-87.8 20.5-14.9 0-49-19.6-75.6-19.6C63.4 141.2 4 184.8 4 273.5c0 26.2 4.8 53.3 14.4 81.2 12.8 37.6 59 129.3 107.2 127.8 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-84.1 102.6-121.8-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-23.6 1.4-51 16.4-66.6 34.8-17.2 19.8-27.3 44.3-25.1 71.9 25.9-2 49.4-15.2 67.7-34.2z" />
  </svg>
);

export default function LoginPage() {
  const [country, setCountry] = useState(phoneCountries[0]);
  const [phone, setPhone] = useState("");
  const [countryMenuOpen, setCountryMenuOpen] = useState(false);
  const countryMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (!countryMenuRef.current?.contains(e.target as Node)) {
        setCountryMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <main className="relative min-h-screen bg-[#080810] text-white overflow-hidden flex items-center justify-center px-4 py-32">
      {/* Soft glow */}
      <div
        className="absolute top-0 left-0 w-[700px] h-[700px] -translate-x-1/3 -translate-y-1/3 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(37,99,235,0.35) 0%, rgba(29,78,216,0.15) 35%, rgba(8,8,16,0) 70%)",
          filter: "blur(10px)",
        }}
      />

      <div className="relative z-10 w-full max-w-5xl flex flex-col lg:flex-row items-center lg:items-start justify-center gap-16">
        {/* Form */}
        <div className="w-full max-w-sm">
          <h1 className="text-3xl font-bold mb-3">Welcome back</h1>
          <p className="text-slate-400 text-sm mb-6 leading-relaxed">
            Enter the phone number associated with your Saucam account
          </p>

          <div className="flex gap-2 mb-3">
            <div ref={countryMenuRef} className="relative">
              <button
                type="button"
                onClick={() => setCountryMenuOpen((open) => !open)}
                className="h-14 flex items-center gap-2.5 bg-white/8 border border-white/10 rounded-2xl px-4 text-base font-semibold hover:bg-white/12 transition-colors"
              >
                <country.Flag />
                <span>{country.code}</span>
                <ChevronDown
                  size={16}
                  className={`opacity-60 transition-transform ${countryMenuOpen ? "rotate-180" : ""}`}
                />
              </button>

              {countryMenuOpen && (
                <div className="absolute top-full left-0 mt-2 min-w-[200px] bg-[#11131c] border border-white/10 rounded-xl p-1.5 shadow-2xl z-20">
                  {phoneCountries.map((c) => (
                    <button
                      key={c.code}
                      type="button"
                      onClick={() => {
                        setCountry(c);
                        setCountryMenuOpen(false);
                      }}
                      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm hover:bg-white/8 transition-colors text-left"
                    >
                      <c.Flag />
                      <span className="flex-1">{c.label}</span>
                      <span className="text-slate-400">{c.code}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            <input
              type="tel"
              placeholder="Phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="flex-1 h-14 bg-white/8 border border-white/10 rounded-2xl px-4 text-base placeholder:text-slate-400 focus:outline-none focus:border-white/30"
            />
          </div>

          <Link
            href="/login/recover"
            className="text-blue-400 text-sm font-medium hover:underline underline-offset-4 no-underline"
          >
            Lost access to my phone number
          </Link>

          <button
            disabled={!phone}
            className="w-full h-14 mt-6 rounded-full font-semibold text-base transition-colors bg-white/10 text-white/40 disabled:cursor-not-allowed enabled:bg-white enabled:text-slate-900 enabled:hover:bg-slate-100"
          >
            Continue
          </button>

          <div className="flex items-center gap-3 my-6">
            <span className="flex-1 h-px bg-white/10" />
            <span className="text-xs text-slate-500 whitespace-nowrap">
              or continue with
            </span>
            <span className="flex-1 h-px bg-white/10" />
          </div>

          <div className="flex justify-center gap-8 mb-6">
            <button className="flex flex-col items-center gap-2 text-sm font-medium">
              <span className="w-12 h-12 rounded-full bg-white/8 border border-white/10 flex items-center justify-center">
                <Mail size={18} />
              </span>
              Email
            </button>
            <button className="flex flex-col items-center gap-2 text-sm font-medium">
              <span className="w-12 h-12 rounded-full bg-white/8 border border-white/10 flex items-center justify-center">
                <GoogleIcon />
              </span>
              Google
            </button>
            <button className="flex flex-col items-center gap-2 text-sm font-medium">
              <span className="w-12 h-12 rounded-full bg-white/8 border border-white/10 flex items-center justify-center">
                <AppleIcon />
              </span>
              Apple
            </button>
          </div>

          <p className="text-center text-slate-400 text-sm mb-3">
            Don&apos;t have an account?
          </p>
          <Link
            href="/signup"
            className="block text-center w-full py-3.5 rounded-full font-semibold text-sm bg-white/8 border border-white/10 hover:bg-white/14 transition-colors no-underline text-white"
          >
            Create account
          </Link>
        </div>

        {/* QR code panel */}
        <div className="hidden md:flex flex-col items-center gap-4 pt-2">
          <div className="w-[180px] h-[180px] bg-white rounded-2xl p-3 flex items-center justify-center">
            <QrPattern />
          </div>
          <p className="font-semibold text-sm">Log in with QR code</p>
          <p className="text-slate-400 text-sm text-center max-w-[220px] leading-relaxed">
            Scan this code with your phone camera to log in instantly
          </p>
        </div>
      </div>
    </main>
  );
}
