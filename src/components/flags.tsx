/* Flat (non-emoji) flag icons shared across login/signup/download flows */
export const FlagNG = () => (
  <svg width="20" height="14" viewBox="0 0 30 20">
    <rect width="30" height="20" fill="#fff" />
    <rect width="10" height="20" fill="#008751" />
    <rect x="20" width="10" height="20" fill="#008751" />
  </svg>
);

export const FlagUS = () => (
  <svg width="20" height="14" viewBox="0 0 30 20">
    <rect width="30" height="20" fill="#fff" />
    {[0, 2, 4, 6, 8, 10, 12].map((y) => (
      <rect key={y} y={y * (20 / 13)} width="30" height={20 / 13} fill="#B22234" />
    ))}
    <rect width="13" height="10.8" fill="#3C3B6E" />
  </svg>
);

export const FlagGB = () => (
  <svg width="20" height="14" viewBox="0 0 30 20">
    <rect width="30" height="20" fill="#012169" />
    <path d="M0 0L30 20M30 0L0 20" stroke="#fff" strokeWidth="3" />
    <path d="M0 0L30 20M30 0L0 20" stroke="#C8102E" strokeWidth="1.4" />
    <path d="M15 0V20M0 10H30" stroke="#fff" strokeWidth="5" />
    <path d="M15 0V20M0 10H30" stroke="#C8102E" strokeWidth="2.4" />
  </svg>
);

export const phoneCountries = [
  { code: "+234", Flag: FlagNG, label: "Nigeria" },
  { code: "+1", Flag: FlagUS, label: "United States" },
  { code: "+44", Flag: FlagGB, label: "United Kingdom" },
];
