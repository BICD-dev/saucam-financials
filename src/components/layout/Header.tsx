"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type DropdownItem = {
  label: string;
  description: string;
  href: string;
  icon: React.ReactNode;
};

type NavItem = {
  label: string;
  href?: string;
  dropdown?: DropdownItem[];
};

const navItems: NavItem[] = [
  {
    label: "About",
    dropdown: [
      {
        label: "Our Story",
        description: "How we started",
        href: "/about/our-story",
        icon: (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="6" r="3" stroke="currentColor" strokeWidth="1.3" />
            <path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="currentColor" strokeWidth="1.3" />
          </svg>
        ),
      },
      {
        label: "Mission & Values",
        description: "What drives us",
        href: "/about/mission",
        icon: (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <rect x="2" y="2" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.3" />
            <path d="M5 8h6M5 5.5h6M5 10.5h4" stroke="currentColor" strokeWidth="1.3" />
          </svg>
        ),
      },
      // {
      //   label: "Awards",
      //   description: "Recognition & milestones",
      //   href: "/about/awards",
      //   icon: (
      //     <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      //       <path d="M8 2L10 6h4l-3.3 2.4 1.3 4L8 10.2 4 12.4 5.3 8.4 2 6h4z" stroke="white" strokeWidth="1.3" />
      //     </svg>
      //   ),
      // },
    ],
  },
  {
    label: "Products",
    dropdown: [
      {
        label: "Business Banking",
        description: "Accounts & transfers",
        href: "/products/banking",
        icon: (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <rect x="2" y="4" width="12" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
            <path d="M5 8h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        label: "Point of Sale",
        description: "POS terminals & payments",
        href: "/products/pos",
        icon: (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 5h10M3 8h7M3 11h5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        label: "Payroll",
        description: "Manage team payments",
        href: "/products/payroll",
        icon: (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.3" />
            <path d="M8 5v3l2 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
          </svg>
        ),
      },
    ],
  },
  {
    label: "Company",
    dropdown: [
      {
        label: "Careers",
        description: "Join our team",
        href: "/company/careers",
        icon: (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M2 13V6l6-4 6 4v7" stroke="currentColor" strokeWidth="1.3" />
            <rect x="5.5" y="8" width="5" height="5" rx=".5" stroke="currentColor" strokeWidth="1.3" />
          </svg>
        ),
      },
      {
        label: "Press & Media",
        description: "News & resources",
        href: "/company/press",
        icon: (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <rect x="2" y="4" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
            <path d="M5 4V3a1 1 0 011-1h4a1 1 0 011 1v1" stroke="currentColor" strokeWidth="1.3" />
          </svg>
        ),
      },
      {
        label: "Investors",
        description: "Investor relations",
        href: "/company/investors",
        icon: (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.3" />
            <path d="M5 9l2-2 2 2 2-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
          </svg>
        ),
      },
    ],
  },
  {
    label: "Developers",
    href: "/developers",
  },
];

const ChevronIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
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

export default function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isAbout = pathname.startsWith("/about");

  const isBusiness = pathname === "/" || pathname.startsWith("/business");
  const isPersonal = pathname.startsWith("/personal");

  return (
    <header
      className={cn(
        "sticky top-0 z-[100] border-b",
        isAbout ? "bg-white border-slate-200" : "bg-slate-950 border-white/10"
      )}
    >
      <div className="max-w-295  px-8 flex items-center h-[82px] gap-8 justify-between">
        {/* Logo */}
        <Link href="/business" className="flex items-center gap-3 no-underline shrink-0">
          {/* <Image src="/assets/saucam_logoMark-WhiteBg-transparent.png" alt="Saucam Logo" className="w-40 h-35" /> */}
              <LogoMark />
          <span className={cn("font-['Syne'] text-2xl font-bold -tracking-[0.3px] lg:block", isAbout ? "text-slate-900" : "text-white")}>
            <span className={cn("hidden md:block", isAbout ? "text-slate-900" : "text-white")}>Saucam</span>
          </span>
        </Link>

        {/* Personal / Business tabs */}
        <div className={cn("flex items-center gap-2 rounded-full p-1 shrink-0", isAbout ? "bg-slate-100" : "bg-white/5")}>
          <Link
            href="/personal"
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              isPersonal
                ? "bg-blue-600 text-white"
                : isAbout
                  ? "text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                  : "text-white/70 hover:bg-white/10 hover:text-white"
            }`}
          >
            Personal
          </Link>
          <Link
            href="/business"
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              isBusiness
                ? "bg-blue-600 text-white"
                : isAbout
                  ? "text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                  : "text-white/70 hover:bg-white/10 hover:text-white"
            }`}
          >
            Business
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 flex-1 ">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.dropdown && setOpenMenu(item.label)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              {item.href && !item.dropdown ? (
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1.5 px-2 py-2.5 rounded-lg text-base font-semibold cursor-pointer no-underline whitespace-nowrap transition-colors",
                    isAbout
                      ? "text-slate-700 hover:text-slate-900 hover:bg-slate-100"
                      : "text-white hover:text-white hover:bg-white/7"
                  )}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={cn(
                    "flex items-center gap-1.5 px-2 py-2.5 rounded-lg text-base font-semibold cursor-pointer whitespace-nowrap transition-colors",
                    isAbout
                      ? "text-slate-700 hover:text-slate-900 hover:bg-slate-100"
                      : "text-white hover:text-white hover:bg-white/7"
                  )}
                >
                  {item.label}
                  {item.dropdown && (
                    <span
                      className={`opacity-50 transition-transform ${
                        openMenu === item.label ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      <ChevronIcon />
                    </span>
                  )}
                </span>
              )}

              {/* Dropdown */}
              {item.dropdown && openMenu === item.label && (
                <div
                  className={cn(
                    "absolute top-[calc(100%+8px)] left-0 border rounded-xl p-2 min-w-[250px] flex flex-col gap-0.5 shadow-2xl z-[200]",
                    isAbout ? "bg-white border-slate-200" : "bg-blue-950 border-white/10"
                  )}
                >
                  {item.dropdown.map((dd) => (
                    <Link
                      key={dd.label}
                      href={dd.href}
                      className={cn(
                        "flex items-center gap-2.5 px-4 py-3 rounded-lg text-base no-underline transition-all",
                        isAbout
                          ? "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                          : "text-white hover:bg-white/7 hover:text-white"
                      )}
                    >
                      <div
                        className={cn(
                          "w-8 h-8 rounded-md flex items-center justify-center flex-shrink-0",
                          isAbout ? "bg-slate-100" : "bg-white/7"
                        )}
                      >
                        {dd.icon}
                      </div>
                      <div>
                        <div className={cn("text-sm mb-0.5", isAbout ? "text-slate-900" : "text-white")}>
                          {dd.label}
                        </div>
                        <div className={cn("text-xs", isAbout ? "text-slate-500" : "text-white/50")}>{dd.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA buttons */}
        <div className="hidden md:flex items-center gap-2 shrink-0">
          <Link
            href="/login"
            className={cn(
              "px-5 py-2.5 rounded-lg text-base font-semibold no-underline transition-colors",
              isAbout ? "text-slate-700 hover:text-slate-900" : "text-white hover:text-white"
            )}
          >
            Sign in
          </Link>
          <Link
            href="/signup"
            className="px-6 py-2.5 rounded-lg text-base font-semibold bg-blue-600 text-white no-underline transition-colors hover:bg-blue-500"
          >
            Get started
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.25 bg-transparent border-0 cursor-pointer p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={cn("block w-5.5 h-0.5 rounded-sm", isAbout ? "bg-slate-700" : "bg-white/70")} />
          <span className={cn("block w-5.5 h-0.5 rounded-sm", isAbout ? "bg-slate-700" : "bg-white/70")} />
          <span className={cn("block w-5.5 h-0.5 rounded-sm", isAbout ? "bg-slate-700" : "bg-white/70")} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className={cn(
            "border-t px-6 py-3 flex flex-col gap-1",
            isAbout ? "bg-white border-slate-200" : "bg-slate-950 border-white/8"
          )}
        >
          {navItems.map((item) => (
            <div key={item.label}>
              <div
                className={cn(
                  "flex items-center justify-between px-0 py-3 text-base font-medium border-b cursor-pointer",
                  isAbout ? "text-slate-700 border-slate-100" : "text-white/75 border-white/6"
                )}
                onClick={() =>
                  setOpenMenu(openMenu === item.label ? null : item.label)
                }
              >
                {item.label}
                {item.dropdown && (
                  <span
                    className={`transition-transform ${
                      openMenu === item.label ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <ChevronIcon />
                  </span>
                )}
              </div>
              {item.dropdown && openMenu === item.label && (
                <div className="pl-4 flex flex-col gap-0.5 pt-1 pb-2">
                  {item.dropdown.map((dd) => (
                    <Link
                      key={dd.label}
                      href={dd.href}
                      className={cn("block py-2.25 text-sm no-underline", isAbout ? "text-slate-500" : "text-white/50")}
                    >
                      {dd.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="flex flex-col gap-2.5 mt-4">
            <Link
              href="/login"
              className={cn(
                "block text-center py-2.75 rounded-lg text-base font-medium border no-underline",
                isAbout ? "text-slate-700 border-slate-200" : "text-white/70 border-white/15"
              )}
            >
              Sign in
            </Link>
            <Link href="/signup" className="block text-center py-2.75 rounded-lg text-base font-medium bg-blue-600 text-white no-underline">
              Get started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
