"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { ArrowLeftRight, PiggyBank, CreditCard } from "lucide-react";

const sections = [
  {
    id: "corporate",
    title: "Corporate Remittance",
    content:
      "Empower your business with global reach. Our remittance infrastructure allows for high-volume cross-border transfers with real-time tracking and automated compliance. Designed for scale, we help you settle vendor invoices and payroll across 50+ countries instantly.",
  },
  {
    id: "asset-backed",
    title: "Asset Backed Microfinance",
    content:
      "Unlock liquidity without liquidating your assets. We provide specialized credit facilities secured against your business assets. Our microfinance model focuses on sustainable growth, offering flexible repayment terms that align with your cash flow cycles.",
  },
  {
    id: "saucam-exchange",
    title: "Saucam Exchange App",
    content:
      "The future of currency management in your pocket. Swap between major world currencies at mid-market rates. The Saucam app provides multi-currency wallets, instant P2P transfers, and detailed spending analytics for the modern entrepreneur.",
  },
  {
    id: "foreign-exchange",
    title: "Foreign Exchange",
    content:
      "Access deep liquidity pools and competitive FX rates. Our platform mitigates currency risk through forward contracts and spot trades, ensuring your profit margins remain protected despite market volatility.",
  },
  {
    id: "currency-broker",
    title: "Currency Broker",
    content:
      "Personalized brokerage services for high-net-worth transactions. Our expert brokers provide market insights and execution strategies to ensure you get the best possible value on large-scale currency acquisitions.",
  },
];
const steps = [
  {
    number: "01",
    title: "Create Your Account",
    description:
      "Sign up in under 3 minutes. Provide your business name, email, and choose your account type — personal or corporate. No hidden fees, no long queues, and no paperwork to start.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="11" r="5" stroke="#3B82F6" strokeWidth="2" />
        <path
          d="M6 27c0-5.5 4.5-10 10-10s10 4.5 10 10"
          stroke="#3B82F6"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    highlight: "3-minute signup",
  },
  {
    number: "02",
    title: "Verify Your Identity",
    description:
      "Complete our streamlined KYC process with a government-issued ID and your business registration documents. Most accounts are verified and fully activated within 24 hours.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path
          d="M16 4L6 8v9c0 6 4.5 11 10 13 5.5-2 10-7 10-13V8L16 4z"
          stroke="#3B82F6"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M11 16l3.5 3.5L21 12"
          stroke="#3B82F6"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    highlight: "Verified in 24hrs",
  },
  {
    number: "03",
    title: "Fund Your Wallet",
    description:
      "Deposit funds via bank transfer, debit card, or any of our 30+ supported payment methods. Your multi-currency wallet is instantly activated and ready for international transactions.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect
          x="4"
          y="8"
          width="24"
          height="17"
          rx="3"
          stroke="#3B82F6"
          strokeWidth="2"
        />
        <path
          d="M4 13h24"
          stroke="#3B82F6"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <rect x="8" y="18" width="6" height="3" rx="1" fill="#3B82F6" />
      </svg>
    ),
    highlight: "30+ payment methods",
  },
  {
    number: "04",
    title: "Start Transacting",
    description:
      "Send international payments, lock in FX rates, apply for microfinance, and track every transaction in real-time from your dashboard. Your global business starts here.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path
          d="M8 16h16M18 10l6 6-6 6"
          stroke="#3B82F6"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    highlight: "Real-time tracking",
  },
];
const slides = [
  {
    src: "",          // replace with your image path
    alt: "Saucam business team in Lagos office",
    caption: "Our Lagos, Nigeria headquarters - where every global payment journey begins.",
    tag: "Our People",
  },
  {
    src: "",          // replace with your image path
    alt: "Cross-border payment dashboard on screen",
    caption: "Real-time transaction tracking across 50+ countries from a single dashboard.",
    tag: "Our Platform",
  },
  {
    src: "",          // replace with your image path
    alt: "Saucam client success story",
    caption: "Empowering entrepreneurs across Africa with fast, reliable financial tools.",
    tag: "Our Impact",
  },
  {
    src: "",          // replace with your image path
    alt: "Saucam Exchange mobile app",
    caption: "The Saucam Exchange App — multi-currency wallets in your pocket, 24 × 7.",
    tag: "Our Product",
  },
];
const Business = () => {
  const [activeSection, setActiveSection] = useState("");
  const [activeStep, setActiveStep] = useState(0);
  const [stepsProgress, setStepsProgress] = useState(0);

    const [slideIndex, setSlideIndex] = useState(0);
  const [slideAnimating, setSlideAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState<"next" | "prev">("next");
 
 
  const stepsRef = useRef<HTMLDivElement>(null);
  
  const handleSectionNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string,
  ) => {
    event.preventDefault();
    const target = document.getElementById(sectionId);
    if (!target) return;

    const stickyOffset = window.innerWidth < 768 ? 132 : 160;
    const targetTop =
      target.getBoundingClientRect().top + window.scrollY - stickyOffset;

    window.scrollTo({ top: targetTop, behavior: "smooth" });
  };

  // Intersection Observer to handle active link highlighting
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.7 }, // Section is "active" when 70% visible
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);
 /* ── Steps scroll-jack ─── */
  useEffect(() => {
    const handleScroll = () => {
      if (!stepsRef.current) return;
      const rect = stepsRef.current.getBoundingClientRect();
      const totalHeight = stepsRef.current.offsetHeight;
      const scrolled = -rect.top;
 
      if (scrolled <= 0) {
        setStepsProgress(0);
        setActiveStep(0);
        return;
      }
 
      const scrollable = totalHeight - window.innerHeight;
      const progress = Math.min(Math.max(scrolled / scrollable, 0), 1);
      const raw = progress * (steps.length - 1);
      const next = Math.min(Math.round(raw), steps.length - 1);

      setStepsProgress(progress);
 
      setActiveStep(next);
    };
 
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

   const goToSlide = useCallback(
    (next: number, dir: "next" | "prev" = "next") => {
      if (slideAnimating) return;
      setSlideDirection(dir);
      setSlideAnimating(true);
      setTimeout(() => {
        setSlideIndex(next);
        setSlideAnimating(false);
      }, 380);
    },
    [slideAnimating],
  );
 
  /* Auto-advance every 5 s */
  useEffect(() => {
    const timer = setInterval(() => {
      goToSlide((slideIndex + 1) % slides.length, "next");
    }, 5000);
    return () => clearInterval(timer);
  }, [slideIndex, goToSlide]);
 
  const progressPercent = stepsProgress * 100;
  const currentSlide = slides[slideIndex];
 
  return (
    <main className="bg-slate-950 text-white">
      {/* Section 1: Hero */}
      <div className="min-h-screen px-3 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <section className="flex flex-col gap-6 items-left justify-center ">
          <p className="text-sm font-semibold text-white bg-slate-800 border border-slate-700 rounded-full w-fit px-4 py-1">
            Africa&apos;s fastest growing financial Institution 2023-2025
          </p>
          <h1 className="font-bold text-5xl md:text-7xl leading-tight">
            International Payment Solutions
          </h1>
          <h2 className="font-medium text-xl md:text-2xl text-slate-400">
            Collect payments, access loans and manage operations with a business
            banking solution that meets all your needs.
          </h2>
          <button className="cursor-pointer text-white bg-blue-600 hover:bg-blue-700 transition-all rounded-md py-3 px-8 w-fit font-semibold">
            Open an account &rarr;
          </button>
        </section>
        <section className="grid grid-cols-2 gap-4 h-96 md:h-100 mb-4">
          {/* Placeholder for your visuals */}
          <div className="bg-slate-900 rounded-2xl border border-slate-800"></div>
          <div className="bg-blue-600/20 rounded-2xl border border-blue-500/30"></div>
          <div className="bg-slate-900 rounded-2xl border border-slate-800 col-span-2"></div>
        </section>
      </div>

      {/* Section 2: Features with Sticky Nav */}
      <div className="relative h-fit bg-blue-100 pb-20 px-2 sm:px-4 md:px-6">
        <div className="py-14 md:py-20 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-950">
            All the tools you need to run your
          </h1>
          <h1 className="text-3xl md:text-5xl font-bold text-blue-600">
            business with ease.
          </h1>
        </div>

        {/* THE STICKY NAVBAR */}
        <nav className="sticky top-20.5 md:top-22.5 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200 py-3 mb-8 rounded-lg">
          <ul className="flex gap-3 md:gap-8 md:justify-center overflow-x-auto whitespace-nowrap px-2 md:px-4">
            {sections.map((sec) => (
              <li key={sec.id}>
                <a
                  href={`#${sec.id}`}
                  onClick={(event) => handleSectionNavClick(event, sec.id)}
                  className={`inline-block text-xs md:text-sm font-bold uppercase tracking-wide md:tracking-wider transition-all ${
                    activeSection === sec.id
                      ? "text-blue-600 border-b-2 pb-1"
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  {sec.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Content Sections */}
        <section className="max-w-6xl mx-auto px-2 sm:px-4 md:px-6">
          {sections.map((sec) => (
            <div
              id={sec.id}
              key={sec.id}
              className="min-h-[70vh] flex flex-col justify-center border-b border-slate-200 last:border-0"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                <div>
                  {/* <h3 className="text-blue-600 font-bold mb-4">Features // 0{sections.indexOf(sec) + 1}</h3> */}
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 md:mb-6">
                    {sec.title}
                  </h2>
                  <p className="text-base md:text-xl text-slate-600 leading-relaxed">
                    {sec.content}
                  </p>
                  <button className="mt-6 md:mt-8 text-sm md:text-base text-blue-600 font-bold hover:underline underline-offset-4">
                    Learn more about {sec.title} &rarr;
                  </button>
                </div>
                <div className="bg-slate-200 aspect-video rounded-xl shadow-inner flex items-center justify-center text-slate-400">
                  [Illustration for {sec.title}]
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>

       {/* ── Section 3: CTA + Image Slider ────────────────────── */}
      <div className="min-h-screen bg-slate-950 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 px-3 sm:px-6 lg:px-10 py-16 md:py-24 items-center">
        {/* Left — CTA copy (untouched) */}
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
            Join multiple businesses across Africa and the globe who rely on
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
          {/* <div className="grid grid-cols-3 gap-4 md:gap-6 mt-4 pt-8 border-t border-slate-800">
            {[
              { value: "12K+", label: "Businesses" },
              { value: "50+", label: "Countries" },
              { value: "$2B+", label: "Processed" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-slate-500 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div> */}
        </div>
 
        {/* Right — Image Slider */}
        <div className="flex flex-col gap-4">
 
          {/* ── Main image frame ── */}
          <div className="relative rounded-2xl overflow-hidden bg-slate-800 border border-slate-700/60"
            style={{ aspectRatio: "16/10" }}
          >
            {/* Image / placeholder */}
            {currentSlide.src ? (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                key={slideIndex}
                src={currentSlide.src}
                alt={currentSlide.alt}
                className="w-full h-full object-cover"
                style={{
                  animation: `slideIn${slideDirection === "next" ? "Right" : "Left"} 0.38s cubic-bezier(0.22,1,0.36,1) both`,
                }}
              />
            ) : (
              /* Placeholder shown until real images are provided */
              <div
                key={slideIndex}
                className="w-full h-full flex flex-col items-center justify-center gap-3"
                style={{
                  background: `linear-gradient(135deg, #0F172A 0%, #1E293B 100%)`,
                  animation: `slideIn${slideDirection === "next" ? "Right" : "Left"} 0.38s cubic-bezier(0.22,1,0.36,1) both`,
                }}
              >
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" opacity="0.3">
                  <rect x="4" y="10" width="40" height="28" rx="3" stroke="white" strokeWidth="2"/>
                  <circle cx="16" cy="20" r="4" stroke="white" strokeWidth="2"/>
                  <path d="M4 32l10-8 8 6 8-10 14 10" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
                </svg>
                <span className="text-slate-500 text-sm">Image coming soon</span>
              </div>
            )}
 
            {/* Tag pill — top left */}
            <div
              key={`tag-${slideIndex}`}
              className="absolute top-4 left-4"
              style={{ animation: "captionFadeIn 0.5s 0.2s both" }}
            >
              <span className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
                style={{
                  background: "rgba(59,130,246,0.85)",
                  backdropFilter: "blur(6px)",
                  color: "#fff",
                  letterSpacing: "0.08em",
                }}
              >
                {currentSlide.tag}
              </span>
            </div>
 
            {/* Slide counter — top right */}
            <div className="absolute top-4 right-4 text-xs font-semibold text-white/50">
              {String(slideIndex + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </div>
 
            {/* Prev / Next arrow buttons overlaid on image */}
            <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-3 pointer-events-none">
              {(["prev", "next"] as const).map((dir) => (
                <button
                  key={dir}
                  onClick={() =>
                    goToSlide(
                      dir === "next"
                        ? (slideIndex + 1) % slides.length
                        : (slideIndex - 1 + slides.length) % slides.length,
                      dir,
                    )
                  }
                  className="pointer-events-auto w-9 h-9 rounded-full flex items-center justify-center transition-all"
                  style={{
                    background: "rgba(15,23,42,0.6)",
                    backdropFilter: "blur(6px)",
                    border: "1px solid rgba(255,255,255,0.12)",
                  }}
                  aria-label={dir === "next" ? "Next slide" : "Previous slide"}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                    stroke="white" strokeWidth="1.8" strokeLinecap="round"
                  >
                    <path d={dir === "next" ? "M5 4l4 4-4 4" : "M11 4L7 8l4 4"} />
                  </svg>
                </button>
              ))}
            </div>
          </div>
 
          {/* ── Caption bar ── */}
          <div
            key={`caption-${slideIndex}`}
            className="rounded-xl px-5 py-4 flex items-start gap-3"
            style={{
              background: "rgba(30,41,59,0.8)",
              border: "1px solid rgba(255,255,255,0.07)",
              animation: "captionFadeIn 0.45s 0.15s both",
            }}
          >
            {/* Blue accent line */}
            <div className="w-1 self-stretch rounded-full bg-blue-500 shrink-0 mt-0.5" />
            <p className="text-slate-300 text-sm leading-relaxed">{currentSlide.caption}</p>
          </div>
 
          {/* ── Dot indicators + thumbnail strip ── */}
          <div className="flex items-center gap-3">
            {/* Dots */}
            <div className="flex gap-1.5 items-center">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToSlide(i, i > slideIndex ? "next" : "prev")}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === slideIndex ? 22 : 6,
                    height: 6,
                    background: i === slideIndex ? "#3B82F6" : "rgba(255,255,255,0.2)",
                  }}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
 
            {/* Progress bar */}
            <div className="flex-1 h-px bg-slate-700 relative overflow-hidden rounded-full">
              <div
                className="absolute left-0 top-0 h-full bg-blue-500 rounded-full"
                style={{
                  width: `${((slideIndex + 1) / slides.length) * 100}%`,
                  transition: "width 0.4s ease",
                }}
              />
            </div>
          </div>
 
          {/* ── Thumbnail strip ── */}
          <div className="grid grid-cols-4 gap-2 mt-1">
            {slides.map((slide, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i, i > slideIndex ? "next" : "prev")}
                className="relative rounded-lg overflow-hidden transition-all duration-200"
                style={{
                  aspectRatio: "4/3",
                  border: i === slideIndex
                    ? "2px solid #3B82F6"
                    : "2px solid transparent",
                  opacity: i === slideIndex ? 1 : 0.45,
                }}
                aria-label={`Go to slide: ${slide.tag}`}
              >
                {slide.src ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img src={slide.src} alt={slide.alt} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-slate-600"
                    style={{ background: "#1E293B" }}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <rect x="1" y="3" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
                      <circle cx="5.5" cy="7" r="1.5" stroke="currentColor" strokeWidth="1.3"/>
                      <path d="M1 11l4-3 3 2.5 3-4 4 4.5" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
                {/* Active overlay */}
                {i === slideIndex && (
                  <div className="absolute inset-0 bg-blue-500/10" />
                )}
                {/* Tag label */}
                <div className="absolute bottom-0 left-0 right-0 px-1.5 py-1"
                  style={{ background: "rgba(0,0,0,0.55)" }}
                >
                  <span className="text-white text-[9px] font-bold uppercase tracking-wide truncate block">
                    {slide.tag}
                  </span>
                </div>
              </button>
            ))}
          </div>
 
        </div>
      </div>
 
      {/* section 4 */}
      <div className="bg-slate-200 min-h-screen px-3 sm:px-6 lg:px-10 flex flex-col gap-10 md:gap-14 pt-8 text-black">
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-3 md:gap-0">
          <h1 className="text-lg md:text-2xl font-bold">What&apos;s more?</h1>
          <h1 className="text-lg md:text-2xl font-semibold text-gray-600">
            Explore more ways to take your business to the next level.
          </h1>
          <span />
        </section>
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="rounded-md border border-blue-200 bg-white text-black flex flex-col gap-4 p-5 md:p-6">
            <div className="w-11 h-11 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center">
              <ArrowLeftRight size={22} />
            </div>
            <h1 className="text-lg md:text-xl font-bold">Cross Border Payments</h1>
            <p className="text-sm md:text-base text-slate-600">
              With the Saucam Exchange App, web platform and physical branch
              network, customers can instantiate transfers, track transactions
              in real-time and access support where needed, bringing the gap
              between digital convenience and human assistance.
            </p>
          </div>
          <div className="rounded-md border border-blue-200 bg-white text-black flex flex-col gap-4 p-5 md:p-6">
            <div className="w-11 h-11 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center">
              <PiggyBank size={22} />
            </div>
            <h1 className="text-lg md:text-xl font-bold">Investment & Saving Schemes</h1>
            <p className="text-sm md:text-base text-slate-600">
              The service combines Target Savings Plans and Fixed Yield
              Investment Plans, allowing users to save with purpose while
              earning stable and predictable returns.
            </p>
          </div>
          <div className="rounded-md border border-blue-200 bg-white text-black flex flex-col gap-4 p-5 md:p-6">
            <div className="w-11 h-11 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center">
              <CreditCard size={22} />
            </div>
            <h1 className="text-lg md:text-xl font-bold">Card Payments</h1>
            <p className="text-sm md:text-base text-slate-600">
              With the Saucam Exchange App, web platform and physical branch
              network, customers can instantiate transfers, track transactions
              in real-time and access support where needed, bringing the gap
              between digital convenience and human assistance.
            </p>
          </div>
        </section>
        {/* section 5 */}
        <div
        ref={stepsRef}
        style={{ height: `${steps.length * 100}vh` }}
        className="relative"
      >
          <div className="sticky top-0 h-screen bg-slate-200 text-slate-900 flex flex-col justify-center overflow-hidden">
          {/* Background decorative grid */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
            aria-hidden
          />
 
          <div className="relative z-10 max-w-5xl mx-auto w-full px-3 sm:px-6 md:px-8">
            {/* Heading */}
            <div className="mb-8 md:mb-12">
              <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
                Getting started
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900">How to get started</h2>
              <p className="text-slate-600 mt-3 text-base md:text-lg">
                Your journey with Saucam starts here — just follow these easy
                steps.
              </p>
            </div>
 
            {/* Progress bar */}
            <div className="mb-8 md:mb-10">
              <div className="flex items-center justify-between relative">
                {/* Track */}
                <div className="absolute top-4 md:top-5 left-4 md:left-5 right-4 md:right-5 h-px bg-slate-300 z-0" />
                {/* Fill */}
                <div
                  className="absolute top-4 md:top-5 left-4 md:left-5 h-px bg-blue-500 z-10"
                  style={{ width: `calc(${progressPercent}% - 0px)` }}
                />
 
                {steps.map((step, i) => (
                  <div
                    key={step.number}
                    className="relative z-20 flex flex-col items-center gap-2"
                  >
                    {/* Circle */}
                    <div
                      className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-xs md:text-sm font-bold border-2 transition-all duration-500"
                      style={{
                        background:
                          i < activeStep
                            ? "#2563EB"
                            : i === activeStep
                            ? "#1D4ED8"
                            : "#FFFFFF",
                        borderColor:
                          i <= activeStep
                            ? "#3B82F6"
                            : "#CBD5E1",
                        color:
                          i <= activeStep
                            ? "#fff"
                            : "#64748B",
                        boxShadow:
                          i === activeStep
                            ? "0 0 0 4px rgba(59,130,246,0.2)"
                            : "none",
                        transform:
                          i === activeStep ? "scale(1.15)" : "scale(1)",
                      }}
                    >
                      {i < activeStep ? (
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <path
                            d="M2.5 7l3 3 6-6"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      ) : (
                        step.number
                      )}
                    </div>
 
                    {/* Step label */}
                    <span
                      className="hidden sm:block text-xs font-semibold transition-colors duration-300 text-center max-w-20"
                      style={{
                        color:
                          i === activeStep
                            ? "#1D4ED8"
                            : i < activeStep
                            ? "#475569"
                            : "#94A3B8",
                      }}
                    >
                      {step.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
 
            {/* Card */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 md:gap-6">
              {/* Main card */}
              <div
                key={activeStep}
                className="lg:col-span-3 bg-white border border-slate-300 rounded-2xl p-5 md:p-10"
                style={{ animation: "stepCardIn 0.45s cubic-bezier(0.22,1,0.36,1) both" }}
              >
                {/* Step icon + number */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                    {steps[activeStep].icon}
                  </div>
                  <div>
                    <div className="text-blue-400 text-xs font-bold uppercase tracking-widest">
                      Step {steps[activeStep].number}
                    </div>
                    <div className="text-slate-900 font-bold text-lg md:text-xl mt-0.5">
                      {steps[activeStep].title}
                    </div>
                  </div>
                </div>
 
                <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                  {steps[activeStep].description}
                </p>
 
                {/* Highlight pill */}
                <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span className="text-blue-300 text-sm font-medium">
                    {steps[activeStep].highlight}
                  </span>
                </div>
              </div>
 
              {/* Side list of upcoming steps */}
              <div className="hidden lg:flex lg:col-span-2 flex-col gap-3">
                {steps.map((step, i) => (
                  <div
                    key={step.number}
                    className="flex items-center gap-4 rounded-xl p-4 transition-all duration-300"
                    style={{
                      background:
                        i === activeStep
                          ? "rgba(59,130,246,0.08)"
                          : "rgba(255,255,255,0.7)",
                      border:
                        i === activeStep
                          ? "1px solid rgba(59,130,246,0.2)"
                          : "1px solid rgba(148,163,184,0.4)",
                      opacity: i < activeStep ? 0.4 : i === activeStep ? 1 : 0.55,
                    }}
                  >
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-all duration-300"
                      style={{
                        background:
                          i < activeStep
                            ? "#2563EB"
                            : i === activeStep
                            ? "#1D4ED8"
                            : "#E2E8F0",
                        color:
                          i <= activeStep ? "#fff" : "#64748B",
                      }}
                    >
                      {i < activeStep ? "✓" : step.number}
                    </div>
                    <span
                      className="text-sm font-medium transition-colors duration-300"
                      style={{
                        color:
                          i === activeStep
                            ? "#0F172A"
                            : "#64748B",
                      }}
                    >
                      {step.title}
                    </span>
                  </div>
                ))}
 
                {/* CTA at bottom */}
                {activeStep === steps.length - 1 && (
                  <div
                    className="mt-2"
                    style={{ animation: "stepCardIn 0.5s 0.2s both" }}
                  >
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors text-sm">
                      Open your account &rarr;
                    </button>
                  </div>
                )}
              </div>
            </div>
 
            {/* Scroll hint */}
            {activeStep < steps.length - 1 && (
              <div className="hidden sm:flex items-center gap-2 mt-8 text-slate-500 text-sm">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="animate-bounce"
                >
                  <path
                    d="M8 3v10M4 9l4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Scroll to continue
              </div>
            )}
          </div>
        </div>
      </div>
      </div>
       {/* ── Keyframe animations ──────────────────────────────── */}
      <style>{`
        @keyframes testimonialIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes stepCardIn {
          from { opacity: 0; transform: translateY(20px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </main>
  );
};

export default Business;
