"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type FooterLink = { label: string; href: string; badge?: string };
type FooterColumn = { heading: string; links: FooterLink[] };

const columns: FooterColumn[] = [
  {
    heading: "About",
    links: [
      { label: "Our Story", href: "/about/our-story" },
      { label: "Mission & Values", href: "/about/mission" },
      // { label: "Leadership Team", href: "/about/leadership" },
      // { label: "Awards & Recognition", href: "/about/awards" },
      // { label: "Partnerships", href: "/about/partnerships" },
    ],
  },
  {
    heading: "Products",
    links: [
      { label: "Business Banking", href: "/products/banking" },
      { label: "Point of Sale", href: "/products/pos" },
      { label: "Payroll Management", href: "/products/payroll" },
      { label: "Invoice & Payments", href: "/products/invoices" },
      { label: "Business Loans", href: "/products/loans" },
      { label: "Expense Cards", href: "/products/cards" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Careers", href: "/company/careers", badge: "Hiring" },
      { label: "Press & Media", href: "/company/press" },
      { label: "Investor Relations", href: "/company/investors" },
      { label: "Blog & Insights", href: "/blog" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Settings", href: "/cookies" },
  { label: "Accessibility", href: "/accessibility" },
];

/* ─── Social Icons ─────────────────────────────────────── */
const TwitterIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
  </svg>
);
const LinkedInIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const InstagramIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="white" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="white" strokeWidth="1.5" />
  </svg>
);
const FacebookIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
  </svg>
);

const LogoMark = () => (
  <div className="w-[34px] h-[34px] rounded-lg bg-blue-600 flex items-center justify-center">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="2" y="2" width="7" height="7" rx="1.5" fill="white" />
      <rect x="11" y="2" width="7" height="7" rx="1.5" fill="rgba(255,255,255,0.5)" />
      <rect x="2" y="11" width="7" height="7" rx="1.5" fill="rgba(255,255,255,0.5)" />
      <rect x="11" y="11" width="7" height="7" rx="1.5" fill="white" />
    </svg>
  </div>
);

export default function Footer() {
  const pathname = usePathname();
  const isAbout = pathname.startsWith("/about");

  return (
    <footer
      className={cn(
        "border-t pt-[60px]",
        isAbout ? "bg-white border-slate-200" : "bg-slate-950 border-white/10"
      )}
    >
      <div className="max-w-[1180px] mx-auto px-7">
        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-[52px]">
          {/* Brand column */}
          <div className="flex flex-col">
            <Link href="/" className="flex items-center gap-2.25 no-underline mb-4">
              <LogoMark />
              <span className={cn("font-['Syne'] text-lg font-bold -tracking-[0.3px]", isAbout ? "text-slate-900" : "text-white")}>
                <span className={cn(isAbout ? "text-slate-900" : "text-white")}>Saucam</span>
              </span>
            </Link>
            <p className={cn("text-sm leading-7 mb-6 max-w-[220px]", isAbout ? "text-slate-600" : "text-white/60")}>
              Empowering businesses across Africa with seamless, reliable,
              and innovative financial solutions.
            </p>
            <div className="flex gap-2">
              {[
                { icon: <TwitterIcon />, label: "Twitter", href: "https://twitter.com" },
                { icon: <LinkedInIcon />, label: "LinkedIn", href: "https://linkedin.com" },
                { icon: <InstagramIcon />, label: "Instagram", href: "https://instagram.com" },
                { icon: <FacebookIcon />, label: "Facebook", href: "https://facebook.com" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "w-[34px] h-[34px] rounded-lg border flex items-center justify-center cursor-pointer transition-colors",
                    isAbout
                      ? "bg-slate-100 border-slate-200 text-slate-600 hover:bg-slate-200"
                      : "bg-white/7 border-white/10 text-white/60 hover:bg-white/14"
                  )}
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.heading} className="flex flex-col">
              <h4 className={cn("font-['Syne'] text-sm font-semibold tracking-wide uppercase mb-5", isAbout ? "text-slate-900" : "text-white")}>
                {col.heading}
              </h4>
              <ul className="list-none flex flex-col gap-2.75">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className={cn(
                        "inline-flex items-center gap-1.5 text-sm no-underline transition-colors",
                        isAbout ? "text-slate-600 hover:text-slate-900" : "text-white/60 hover:text-white"
                      )}
                    >
                      {link.label}
                      {link.badge && (
                        <span className={cn("text-xs rounded px-1.5 py-0.25", isAbout ? "bg-green-100 text-green-700" : "bg-green-500/15 text-green-400")}>
                          {link.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className={cn(
            "border-t flex flex-col sm:flex-row items-start sm:items-center justify-between py-5.5 gap-4 flex-wrap",
            isAbout ? "border-slate-200" : "border-white/10"
          )}
        >
          <p className={cn("text-sm", isAbout ? "text-slate-500" : "text-white/50")}>
            © {new Date().getFullYear()} Saucam Financials. All rights reserved.
          </p>
          <div className="flex items-center gap-6 flex-wrap">
            {legalLinks.map((l, i) => (
              <Link
                key={l.label}
                href={l.href}
                className={cn(
                  "inline-flex items-center gap-6 text-sm no-underline transition-colors",
                  isAbout ? "text-slate-500 hover:text-slate-900" : "text-white/50 hover:text-white"
                )}
              >
                {l.label}
                {i < legalLinks.length - 1 && (
                  <span className={cn("inline-block w-0.75 h-0.75 rounded-full", isAbout ? "bg-slate-300" : "bg-white/20")} />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}