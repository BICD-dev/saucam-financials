"use client";

import { useEffect, useRef, useState } from "react";
import { X, ChevronDown, ArrowRight } from "lucide-react";
import { phoneCountries } from "./flags";
import QrPattern from "./QrPattern";

export default function GetAppModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
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

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center px-4"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative z-10 w-full max-w-md bg-white text-slate-900 rounded-3xl p-8 sm:p-10 shadow-2xl">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors"
        >
          <X size={18} />
        </button>

        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Get the Saucam app
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Scan the QR code to download the app
          </p>

          <div className="w-[160px] h-[160px] mx-auto my-6 p-2.5 border border-slate-200 rounded-2xl">
            <QrPattern />
          </div>

          <p className="font-semibold text-sm sm:text-base mb-3">
            or get a download link via SMS
          </p>

          <div className="flex gap-2">
            <div ref={countryMenuRef} className="relative">
              <button
                type="button"
                onClick={() => setCountryMenuOpen((o) => !o)}
                className="h-12 flex items-center gap-2 bg-slate-100 border border-slate-200 rounded-xl px-3 text-sm font-semibold hover:bg-slate-200 transition-colors"
              >
                <country.Flag />
                <span>{country.code}</span>
                <ChevronDown
                  size={14}
                  className={`opacity-60 transition-transform ${countryMenuOpen ? "rotate-180" : ""}`}
                />
              </button>

              {countryMenuOpen && (
                <div className="absolute top-full left-0 mt-2 min-w-[190px] bg-white border border-slate-200 rounded-xl p-1.5 shadow-2xl z-20 text-left">
                  {phoneCountries.map((c) => (
                    <button
                      key={c.code}
                      type="button"
                      onClick={() => {
                        setCountry(c);
                        setCountryMenuOpen(false);
                      }}
                      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm hover:bg-slate-100 transition-colors text-left"
                    >
                      <c.Flag />
                      <span className="flex-1">{c.label}</span>
                      <span className="text-slate-500">{c.code}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <input
              type="tel"
              placeholder="Mobile number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="flex-1 h-12 bg-slate-100 border border-slate-200 rounded-xl px-4 text-sm placeholder:text-slate-500 focus:outline-none focus:border-slate-400"
            />

            <button
              type="button"
              disabled={!phone}
              aria-label="Send download link"
              className="w-12 h-12 shrink-0 rounded-full flex items-center justify-center transition-colors bg-slate-200 text-slate-400 disabled:cursor-not-allowed enabled:bg-blue-600 enabled:text-white enabled:hover:bg-blue-700"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
