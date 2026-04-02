/* ─── Data ──────────────────────────────────────────────────── */
export const serviceCards = [
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

export const services = serviceCards.map((s) => s.name);

