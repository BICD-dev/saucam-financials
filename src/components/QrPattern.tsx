/* Decorative QR-style placeholder — swap for a real generated code
   (e.g. via a qrcode library) once a deep link is available. */
const seed = [
  1, 1, 1, 0, 1, 0, 1, 1, 1,
  1, 0, 1, 0, 0, 0, 1, 0, 1,
  1, 1, 1, 1, 0, 1, 1, 1, 1,
  0, 0, 1, 0, 1, 0, 0, 1, 0,
  1, 0, 0, 1, 1, 1, 0, 0, 1,
  0, 1, 0, 1, 0, 0, 1, 0, 0,
  1, 1, 1, 0, 1, 0, 1, 1, 1,
  1, 0, 1, 0, 0, 0, 1, 0, 1,
  1, 1, 1, 1, 0, 1, 1, 1, 1,
];

export default function QrPattern() {
  const size = 9;
  return (
    <div
      className="grid w-full h-full"
      style={{ gridTemplateColumns: `repeat(${size}, 1fr)` }}
    >
      {seed.map((on, i) => (
        <div key={i} className={on ? "bg-black" : "bg-transparent"} />
      ))}
    </div>
  );
}
