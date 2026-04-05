"use client";
import { useState, useCallback, useEffect } from "react";
const testimonials = [
  {
    text: "Saucam transformed how we handle cross-border payments. What used to take 3–5 business days now settles in hours. The compliance tools alone have saved us weeks of manual work.",
    name: "Adaeze Okonkwo",
    role: "CEO, TradeBridge Nigeria",
    initials: "AO",
    color: "from-blue-500 to-blue-700",
  },
  {
    text: "The FX rates are unbeatable. We've saved over $40,000 in conversion fees since switching to Saucam. Our treasury team has never been more confident in our currency positions.",
    name: "Mohammed Al-Rashid",
    role: "CFO, Gulf Import Co.",
    initials: "MA",
    color: "from-violet-500 to-violet-700",
  },
  {
    text: "The asset-backed microfinance product gave us the capital injection we needed to fulfill a major contract. Approval was fast, terms were fair, and the team was genuinely helpful.",
    name: "Sarah Chen",
    role: "Founder, AsiaTrade Hub",
    initials: "SC",
    color: "from-emerald-500 to-emerald-700",
  },
  {
    text: "Saucam's compliance tools are world-class. Our transactions clear without delays across all 50+ countries. It's the most reliable payment infrastructure we've ever worked with.",
    name: "Emeka Obi",
    role: "Director, Pan-African Logistics",
    initials: "EO",
    color: "from-orange-500 to-orange-600",
  },
];
const Testimonial = () => {
      const [testimonialIndex, setTestimonialIndex] = useState(0);
        const [isAnimating, setIsAnimating] = useState(false);
      
        /* ── Testimonial auto-advance ─── */
  const goToTestimonial = useCallback(
    (next: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setTimeout(() => {
        setTestimonialIndex(next);
        setIsAnimating(false);
      }, 350);
    },
    [isAnimating]
  );
 
  useEffect(() => {
    const timer = setInterval(() => {
      goToTestimonial((testimonialIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonialIndex, goToTestimonial]);
 
 
  const t = testimonials[testimonialIndex];
 
    
  return (
    <div className="min-h-screen bg-slate-950 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 px-3 sm:px-6 lg:px-10 py-16 md:py-24 items-center">
      {/* Left — CTA copy */}
      <div className="flex flex-col gap-6">
        <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">
          Trusted by thousands
        </span>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Don&apos;t wait.
          <br />
          <span className="text-blue-500">Start your journey</span>
          <br />
          today.
        </h1>
        <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-md">
          Join over 12,000 businesses across Africa and the globe who rely on
          Saucam every day to move money, grow faster, and do more.
        </p>
        <div className="flex gap-4 flex-wrap">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-md transition-colors">
            Open an account &rarr;
          </button>
          <button className="border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-semibold py-3 px-8 rounded-md transition-colors">
            Talk to sales
          </button>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-4 md:gap-6 mt-4 pt-8 border-t border-slate-800">
          {[
            { value: "12K+", label: "Businesses" },
            { value: "50+", label: "Countries" },
            { value: "$2B+", label: "Processed" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-slate-500 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right — Testimonial slider */}
      <div className="flex flex-col gap-6">
        {/* Card */}
        <div
          className="relative bg-slate-900 border border-slate-700/60 rounded-2xl p-8 overflow-hidden"
          style={{ minHeight: 280 }}
        >
          {/* Decorative quote mark */}
          <div
            className="absolute top-4 right-6 text-slate-700 select-none"
            style={{
              fontSize: 96,
              lineHeight: 1,
              fontFamily: "Georgia, serif",
            }}
            aria-hidden
          >
            &ldquo;
          </div>

          {/* Animated content */}
          <div
            key={testimonialIndex}
            style={{
              animation: `testimonialIn 0.4s ease both`,
            }}
          >
            <p className="text-slate-200 text-lg leading-relaxed mb-8 relative z-10">
              &ldquo;{t.text}&rdquo;
            </p>

            <div className="flex items-center gap-4">
              <div
                className={`w-12 h-12 rounded-full bg-linear-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm shrink-0`}
              >
                {t.initials}
              </div>
              <div>
                <p className="font-semibold text-white">{t.name}</p>
                <p className="text-slate-400 text-sm">{t.role}</p>
              </div>

              {/* Stars */}
              <div className="ml-auto flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="#FBBF24"
                  >
                    <path d="M7 1l1.5 3.2 3.5.5-2.5 2.4.6 3.4L7 9l-3.1 1.5.6-3.4L2 4.7l3.5-.5z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between">
          {/* Dot indicators */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goToTestimonial(i)}
                className="h-2 rounded-full transition-all duration-300"
                style={{
                  width: i === testimonialIndex ? 24 : 8,
                  background:
                    i === testimonialIndex
                      ? "#3B82F6"
                      : "rgba(255,255,255,0.2)",
                }}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          {/* Prev / Next arrows */}
          <div className="flex gap-2">
            {(
              [
                {
                  dir: "prev" as const,
                  label: "Previous",
                  path: "M9 6L5 10l4 4",
                },
                {
                  dir: "next" as const,
                  label: "Next",
                  path: "M5 6l4 4-4 4",
                },
              ] as const
            ).map(({ dir, label, path }) => (
              <button
                key={dir}
                onClick={() =>
                  goToTestimonial(
                    dir === "next"
                      ? (testimonialIndex + 1) % testimonials.length
                      : (testimonialIndex - 1 + testimonials.length) %
                          testimonials.length,
                  )
                }
                className="w-10 h-10 rounded-full border border-slate-600 hover:border-blue-500 flex items-center justify-center transition-colors"
                aria-label={label}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                >
                  <path d={path} />
                </svg>
              </button>
            ))}
          </div>
        </div>

        {/* Mini testimonial previews */}
        <div className="grid grid-cols-2 gap-3 mt-2">
          {testimonials
            .filter((_, i) => i !== testimonialIndex)
            .slice(0, 2)
            .map((tm) => (
              <div
                key={tm.name}
                className="bg-slate-900/50 border border-slate-800 rounded-xl p-4 flex items-center gap-3 cursor-pointer hover:border-slate-600 transition-colors"
                onClick={() => goToTestimonial(testimonials.indexOf(tm))}
              >
                <div
                  className={`w-8 h-8 rounded-full bg-linear-to-br ${tm.color} flex items-center justify-center text-white font-bold text-xs shrink-0`}
                >
                  {tm.initials}
                </div>
                <div className="overflow-hidden">
                  <p className="text-white text-xs font-semibold truncate">
                    {tm.name}
                  </p>
                  <p className="text-slate-500 text-xs truncate">{tm.role}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
