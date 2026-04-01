"use client";
import React, { useState, useEffect } from "react";

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

const Home = () => {
  const [activeSection, setActiveSection] = useState("");

  const handleSectionNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    event.preventDefault();
    const target = document.getElementById(sectionId);
    if (!target) return;

    const stickyOffset = 160; // header (68) + section nav (68)
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
      { threshold: 0.7 } // Section is "active" when 70% visible
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-slate-950 text-white">
      {/* Section 1: Hero */}
      <div className="min-h-screen px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <section className="flex flex-col gap-6 items-left justify-center ">
          <p className="text-sm font-semibold text-white bg-slate-800 border border-slate-700 rounded-full w-fit px-4 py-1">
            Africa&apos;s fastest growing financial Institution 2023-2025
          </p>
          <h1 className="font-bold text-7xl leading-tight">International Payment Solutions</h1>
          <h2 className="font-medium text-2xl text-slate-400">
            Collect payments, access loans and manage operations with a business banking solution that meets all your needs.
          </h2>
          <button className="text-white bg-blue-600 hover:bg-blue-700 transition-all rounded-md py-3 px-8 w-fit font-semibold">
            Open an account &rarr;
          </button>
        </section>
        <section className="grid grid-cols-2 gap-4 h-[400px]">
           {/* Placeholder for your visuals */}
           <div className="bg-slate-900 rounded-2xl border border-slate-800"></div>
           <div className="bg-blue-600/20 rounded-2xl border border-blue-500/30"></div>
           <div className="bg-slate-900 rounded-2xl border border-slate-800 col-span-2"></div>
        </section>
      </div>

      {/* Section 2: Features with Sticky Nav */}
      <div className="relative h-fit bg-blue-100 pb-20">
        <div className="py-20 text-center">
          <h1 className="text-5xl font-bold text-slate-950">All the tools you need to run your</h1>
          <h1 className="text-5xl font-bold text-blue-600">business with ease.</h1>
        </div>

        {/* THE STICKY NAVBAR */}
        <nav className="sticky top-[90px] z-40 bg-white/90 backdrop-blur-md border-b border-slate-200 py-4 mb-10 rounded-lg">
          <ul className="flex gap-8 justify-center overflow-none px-4">
            {sections.map((sec) => (
              <li key={sec.id}>
                <a
                  href={`#${sec.id}`}
                  onClick={(event) => handleSectionNavClick(event, sec.id)}
                  className={`text-sm font-bold uppercase tracking-wider transition-all ${
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
        <section className="max-w-6xl mx-auto px-6">
          {sections.map((sec) => (
            <div 
              id={sec.id} 
              key={sec.id} 
              className="min-h-[70vh] flex flex-col justify-center border-b border-slate-200 last:border-0"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    {/* <h3 className="text-blue-600 font-bold mb-4">Features // 0{sections.indexOf(sec) + 1}</h3> */}
                    <h2 className="text-4xl font-bold text-slate-900 mb-6">{sec.title}</h2>
                    <p className="text-xl text-slate-600 leading-relaxed">{sec.content}</p>
                    <button className="mt-8 text-blue-600 font-bold hover:underline underline-offset-4">
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

      {/* Section 3 */}
      <div className="h-screen bg-slate-950 flex items-center justify-center">
        <h1 className="text-6xl font-bold">Ready to get started?</h1>
      </div>
    </main>
  );
};

export default Home;