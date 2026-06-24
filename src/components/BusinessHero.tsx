"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./BusinessHero.module.css";

type Transform = { x: number; y: number; r: number; s: number };
type CardState = { start: Transform; end: Transform; z: number };

/* Each card starts scattered off-canvas, then shuffles into a
   front-facing fanned stack — distinct from the home page's
   horizontal converge-to-flat-row animation. */
const states: Record<"card1" | "card2" | "card3" | "card4", CardState> = {
  card1: { start: { x: -260, y: -180, r: -24, s: 0.85 }, end: { x: -18, y: -36, r: -7, s: 0.93 }, z: 1 },
  card2: { start: { x: 260, y: -160, r: 22, s: 0.85 }, end: { x: 14, y: -16, r: 5, s: 0.96 }, z: 2 },
  card3: { start: { x: -220, y: 200, r: 18, s: 0.85 }, end: { x: -10, y: 8, r: -3, s: 0.98 }, z: 3 },
  card4: { start: { x: 240, y: 180, r: -20, s: 0.85 }, end: { x: 0, y: 28, r: 2, s: 1 }, z: 4 },
};

const LERP_FACTOR = 0.08;
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

const cards = [
  { key: "card1" as const, image: "/assets/moneyCount.jpg", alt: "Currency counting" },
  { key: "card2" as const, image: "/assets/cards.jpg", alt: "Business cards" },
  { key: "card3" as const, image: "/assets/atm.jpg", alt: "ATM withdrawal" },
  { key: "card4" as const, image: "/assets/posNcard.jpg", alt: "Card payment" },
];

export default function BusinessHero() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const deckStageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let targetProgress = 0;
    let currentProgress = 0;
    let rafId: number;

    const isMobile = () => window.innerWidth < 768;

    const getScrollProgress = () => {
      const rect = scrollContainer.getBoundingClientRect();
      const total = scrollContainer.offsetHeight - window.innerHeight;
      if (total <= 0) return 0;
      const scrolled = -rect.top;
      return Math.min(Math.max(scrolled / total, 0), 1);
    };

    const applyCardTransform = (
      el: HTMLDivElement | null,
      key: keyof typeof states,
      progress: number
    ) => {
      if (!el) return;
      const { start, end, z } = states[key];
      const x = lerp(start.x, end.x, progress);
      const y = lerp(start.y, end.y, progress);
      const r = lerp(start.r, end.r, progress);
      const s = lerp(start.s, end.s, progress);

      el.style.transform = `translate(${x}px, ${y}px) rotate(${r}deg) scale(${s})`;
      el.style.zIndex = String(z);

      const shadowStrength = 14 + progress * 30;
      const shadowSpread = 40 + progress * 40;
      const shadowOpacity = 0.3 + progress * 0.25;
      el.style.boxShadow = `0 ${shadowStrength}px ${shadowSpread}px rgba(0,0,0,${shadowOpacity})`;
    };

    const tick = () => {
      currentProgress = lerp(currentProgress, targetProgress, LERP_FACTOR);

      if (!isMobile()) {
        (Object.keys(states) as Array<keyof typeof states>).forEach((key) => {
          applyCardTransform(cardRefs.current[key], key, currentProgress);
        });
      }

      rafId = requestAnimationFrame(tick);
    };

    const onScroll = () => {
      targetProgress = getScrollProgress();
    };

    const onResize = () => {
      targetProgress = getScrollProgress();
      currentProgress = targetProgress;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    onScroll();
    rafId = requestAnimationFrame(tick);

    let observer: IntersectionObserver | undefined;
    if (deckStageRef.current && "IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              deckStageRef.current?.classList.add(styles.isVisible);
            }
          });
        },
        { threshold: 0.3 }
      );
      observer.observe(deckStageRef.current);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(rafId);
      observer?.disconnect();
    };
  }, []);

  return (
    <div ref={scrollContainerRef} className={styles.scrollContainer}>
      <section className={styles.hero}>
        <div className={styles.glow} />

        <div className={styles.inner}>
          <div className={styles.copy}>
            <span className={styles.badge}>
              Africa&apos;s fastest growing financial institution 2021–2025
            </span>
            <h1 className={styles.headline}>International Payment Solutions</h1>
            <p className={styles.subtext}>
              Collect payments, access loans, and manage operations with a
              business banking solution that meets all your needs.
            </p>
            <a href="/signup" className={styles.cta}>
              Open an account &rarr;
            </a>
          </div>

          <div ref={deckStageRef} className={styles.deckStage}>
            {cards.map((card) => (
              <div
                key={card.key}
                ref={(el) => {
                  cardRefs.current[card.key] = el;
                }}
                className={`${styles.card} ${card.key === "card4" ? styles.cardFront : ""}`}
              >
                <Image src={card.image} alt={card.alt} fill className={styles.cardImage} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
