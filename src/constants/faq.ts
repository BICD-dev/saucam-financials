type FAQItem = { q: string; a: string };
type FAQGroup = { category: string; items: FAQItem[] };

export const faqGroups: FAQGroup[] = [
  {
    category: "General",
    items: [
      {
        q: "What is Saucam Financial?",
        a: "Saucam Financial is a financial services provider offering solutions such as corporate remittance, foreign exchange, cross-border payments, asset-backed microfinance, and investment products.",
      },
      {
        q: "Who can use Saucam Financial services?",
        a: "Both individuals and businesses can access Saucam Financial's services, depending on their financial needs.",
      },
    ],
  },
  {
    category: "Corporate Remittance",
    items: [
      {
        q: "What is Corporate Remittance?",
        a: "Corporate Remittance allows businesses to send funds immediately while settling the payment later through flexible repayment options.",
      },
      {
        q: "Who is eligible for Corporate Remittance?",
        a: "This service is designed primarily for businesses that need to make urgent payments without immediate liquidity.",
      },
    ],
  },
  {
    category: "Asset-Backed Microfinance",
    items: [
      {
        q: "What is Asset-Backed Microfinance?",
        a: "It is a loan service where financing is secured using assets, combined with modern digital tracking for transparency and security.",
      },
      {
        q: "What types of assets can be used as collateral?",
        a: "Assets may include equipment, inventory, or other valuable holdings, subject to approval.",
      },
    ],
  },
  {
    category: "Saucam Exchange Transfer App",
    items: [
      {
        q: "What is the Saucam Exchange App?",
        a: "It is a mobile application that allows users to send and receive money instantly and securely across borders.",
      },
      {
        q: "Is the app secure?",
        a: "Yes, the app is built with strong security protocols to ensure safe and reliable transactions.",
      },
    ],
  },
  {
    category: "Foreign Exchange & Currency Brokerage",
    items: [
      {
        q: "What foreign exchange services does Saucam offer?",
        a: "Saucam provides fast and secure currency conversion and international money transfers.",
      },
      {
        q: "What is a currency broker?",
        a: "A currency broker facilitates foreign currency transactions, helping clients get competitive exchange rates and smooth transfers.",
      },
    ],
  },
  {
    category: "Cross-Border Payments",
    items: [
      {
        q: "How do cross-border payments work with Saucam?",
        a: "Saucam enables fast and secure international payments for both individuals and businesses globally.",
      },
      {
        q: "How long do cross-border transfers take?",
        a: "Transfer times may vary but are designed to be as fast and efficient as possible.",
      },
    ],
  },
  {
    category: "Credit Card Payments",
    items: [
      {
        q: "Does Saucam support credit card payments?",
        a: "Yes, Saucam offers secure and reliable credit card payment solutions for global transactions.",
      },
      {
        q: "Are credit card transactions safe?",
        a: "All transactions are processed using secure systems to protect user data and funds.",
      },
    ],
  },
  {
    category: "TravelCard Investment & Savings",
    items: [
      {
        q: "What is the TravelCard Investment & Savings Scheme?",
        a: "It is a savings and investment program designed to help users grow their funds while planning for future financial goals.",
      },
      {
        q: "What are the benefits of this scheme?",
        a: "It offers potentially high returns and a secure way to save and invest for the future.",
      },
    ],
  },
  {
    category: "Security & Reliability",
    items: [
      {
        q: "How does Saucam ensure transaction security?",
        a: "Saucam uses modern digital systems, encryption, and monitoring tools to ensure all transactions are secure and transparent.",
      },
      {
        q: "Can I track my transactions?",
        a: "Yes, digital tracking systems allow users to monitor their transactions in real time.",
      },
    ],
  },
];