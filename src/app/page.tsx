"use client";
import Image from "next/image";
import Link from "next/link";
import ScrollHero from "@/components/ScrollHero";
import {
  ArrowLeftRight,
  Wallet,
  Bitcoin,
  CreditCard,
  UserPlus,
  ShieldCheck,
  Banknote,
  Send,
} from "lucide-react";

const products = [
  {
    icon: Wallet,
    title: "Multi-currency wallet",
    description:
      "Hold, convert, and manage USD, GBP, EUR, NGN and more in a single account — at real, mid-market rates.",
    href: "#wallet",
  },
  {
    icon: Send,
    title: "Cross-border transfers",
    description:
      "Send and receive money across Africa, Europe, and North America in minutes, not days.",
    href: "#transfers",
  },
  {
    icon: Bitcoin,
    title: "Crypto on/off-ramp",
    description:
      "Buy, sell, and convert crypto to local currency instantly, with transparent rates and no surprises.",
    href: "#crypto",
  },
  {
    icon: CreditCard,
    title: "Cards",
    description:
      "Spend globally with virtual and physical cards that draw from any currency in your wallet.",
    href: "/personal",
  },
];

const steps = [
  {
    number: "01",
    title: "Create your account",
    description: "Sign up in under 3 minutes with your email and basic details.",
    icon: UserPlus,
  },
  {
    number: "02",
    title: "Verify your identity",
    description: "Quick KYC with a government ID — most accounts are verified within 24 hours.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Fund your wallet",
    description: "Deposit via bank transfer, card, or crypto and your wallet is ready instantly.",
    icon: Banknote,
  },
  {
    number: "04",
    title: "Send, spend, convert",
    description: "Move money across currencies and borders, or spend straight from your wallet.",
    icon: ArrowLeftRight,
  },
];

const Home = () => {
  return (
    <main className="bg-white text-slate-900">
      <ScrollHero />

      {/* White panel slides up over the hero on scroll */}
      <div className="relative z-20 -mt-10 md:-mt-16 rounded-t-[32px] md:rounded-t-[48px] bg-white shadow-[0_-30px_60px_-20px_rgba(0,0,0,0.25)]">

      {/* Product grid */}
      <section id="wallet" className="px-3 sm:px-6 lg:px-10 py-16 md:py-24 max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
            Built for how money moves today.
          </h2>
          <p className="text-slate-600 text-base md:text-lg mt-4 max-w-2xl mx-auto">
            Currencies, crypto, and cards — everything you need to send and
            spend across borders, in one app.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((p) => {
            const Icon = p.icon;
            return (
              <Link
                key={p.title}
                href={p.href}
                className="group rounded-2xl border border-slate-100 bg-white p-6 md:p-7 flex flex-col gap-4 shadow-sm hover:shadow-lg transition-shadow no-underline"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{p.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {p.description}
                </p>
                <span className="text-sm font-semibold text-blue-600 group-hover:underline underline-offset-4 mt-auto">
                  Learn more &rarr;
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Feature highlight: cross-border */}
      <section
        id="transfers"
        className="px-3 sm:px-6 lg:px-10 py-16 md:py-24 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center"
      >
        <div className="rounded-3xl overflow-hidden order-2 lg:order-1">
          <Image
            src="/assets/chatWFriend.jpg"
            alt="Sending money across borders"
            className="w-full h-full object-cover"
            width={700}
            height={500}
          />
        </div>
        <div className="flex flex-col gap-5 order-1 lg:order-2">
          <span className="text-sm font-semibold text-blue-700 uppercase tracking-widest">
            Cross-border transfers
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
            Send money home, instantly.
          </h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            Move money between Africa, Europe, and North America in minutes
            at real exchange rates — no hidden fees, no waiting days for a
            transfer to clear.
          </p>
          <Link
            href="#"
            className="text-blue-600 font-semibold hover:underline underline-offset-4 w-fit no-underline"
          >
            See supported countries &rarr;
          </Link>
        </div>
      </section>

      {/* Feature highlight: crypto */}
      <section
        id="crypto"
        className="px-3 sm:px-6 lg:px-10 py-16 md:py-24 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center"
      >
        <div className="flex flex-col gap-5">
          <span className="text-sm font-semibold text-blue-700 uppercase tracking-widest">
            Crypto on/off-ramp
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
            Crypto, made spendable.
          </h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            Convert crypto to local currency and back, instantly. Use your
            crypto balance just like cash — to send abroad, spend on your
            card, or hold alongside your other currencies.
          </p>
          <Link
            href="#"
            className="text-blue-600 font-semibold hover:underline underline-offset-4 w-fit no-underline"
          >
            Explore crypto &rarr;
          </Link>
        </div>
        <div className="rounded-3xl overflow-hidden">
          <Image
            src="/assets/scan4.jpg"
            alt="Crypto conversion"
            className="w-full h-full object-cover"
            width={700}
            height={500}
          />
        </div>
      </section>

      {/* How it works */}
      <section className="px-3 sm:px-6 lg:px-10 py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 md:mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
              Get started in minutes.
            </h2>
            <p className="text-slate-600 text-base md:text-lg mt-4">
              Your journey with Saucam starts here.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="rounded-2xl bg-white p-6 flex flex-col gap-4 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                      <Icon size={22} />
                    </div>
                    <span className="text-sm font-bold text-slate-300">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-3 sm:px-6 lg:px-10 py-20 md:py-28 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Move money without borders.
          </h2>
          <p className="text-blue-100 text-base md:text-lg max-w-xl">
            Join thousands across Africa and the globe who rely on Saucam to
            send, spend, and grow across currencies.
          </p>
          <Link
            href="/signup"
            className="bg-white text-blue-700 hover:bg-blue-50 transition-colors font-semibold py-3.5 px-8 rounded-full no-underline"
          >
            Open an account &rarr;
          </Link>
        </div>
      </section>
      </div>
    </main>
  );
};

export default Home;
