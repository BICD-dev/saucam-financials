"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./ScrollHero.module.css";
import { useAppModal } from "@/components/AppModalProvider";

type Transform = { x: number; y: number; r: number; s: number };
type CardState = { start: Transform; end: Transform };
type States = Record<"left" | "center" | "right", CardState>;

const LERP_FACTOR = 0.08;
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

/* Spread scales down on narrow viewports so the side cards stay
   on-screen, but the same converge-to-center motion still plays. */
const buildStates = (viewportWidth: number): States => {
  const spreadX = Math.max(120, Math.min(380, viewportWidth * 0.42));
  return {
    left: { start: { x: -spreadX, y: 0, r: -15, s: 1 }, end: { x: 0, y: 0, r: 0, s: 1 } },
    center: { start: { x: 0, y: 60, r: 0, s: 0.88 }, end: { x: 0, y: 0, r: 0, s: 1 } },
    right: { start: { x: spreadX, y: 0, r: 15, s: 1 }, end: { x: 0, y: 0, r: 0, s: 1 } },
  };
};

const cards = [
  {
    key: "left" as const,
    label: "Multi-currency",
    image: "/assets/moneyCount.jpg",
    className: styles.cardLeft,
  },
  {
    key: "center" as const,
    label: "Spend anywhere",
    image: "/assets/cardInPhone.jpg",
    className: styles.cardCenter,
  },
  {
    key: "right" as const,
    label: "Crypto on/off-ramp",
    image: "/assets/scan4.jpg",
    className: styles.cardRight,
  },
];

export default function ScrollHero() {
  const { openModal } = useAppModal();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let targetProgress = 0;
    let currentProgress = 0;
    let rafId: number;
    let states = buildStates(window.innerWidth);

    const getScrollProgress = () => {
      const rect = scrollContainer.getBoundingClientRect();
      const total = scrollContainer.offsetHeight - window.innerHeight;
      if (total <= 0) return 0;
      const scrolled = -rect.top;
      return Math.min(Math.max(scrolled / total, 0), 1);
    };

    const applyCardTransform = (
      el: HTMLDivElement | null,
      key: "left" | "center" | "right",
      progress: number
    ) => {
      if (!el) return;
      const { start, end } = states[key];
      const x = lerp(start.x, end.x, progress);
      const y = lerp(start.y, end.y, progress);
      const r = lerp(start.r, end.r, progress);
      const s = lerp(start.s, end.s, progress);

      el.style.transform = `translate(${x}px, ${y}px) rotate(${r}deg) scale(${s})`;

      const shadowStrength = 20 + progress * 40;
      const shadowSpread = 60 + progress * 40;
      const shadowOpacity = 0.35 + progress * 0.25;
      el.style.boxShadow = `0 ${shadowStrength}px ${shadowSpread}px rgba(0,0,0,${shadowOpacity})`;
    };

    const tick = () => {
      currentProgress = lerp(currentProgress, targetProgress, LERP_FACTOR);

      applyCardTransform(cardRefs.current.left, "left", currentProgress);
      applyCardTransform(cardRefs.current.center, "center", currentProgress);
      applyCardTransform(cardRefs.current.right, "right", currentProgress);

      rafId = requestAnimationFrame(tick);
    };

    const onScroll = () => {
      targetProgress = getScrollProgress();
    };

    const onResize = () => {
      states = buildStates(window.innerWidth);
      targetProgress = getScrollProgress();
      currentProgress = targetProgress;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    onScroll();
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div ref={scrollContainerRef} className={styles.scrollContainer}>
      <section className={styles.hero}>
        <div className={styles.glow} />

        <div className={styles.heroContent}>
          <div className={styles.headlineWrap}>
            <h1 className={styles.headline}>
              Money
              <br />& Beyond
            </h1>
            <p className={styles.subtext}>
              One account for every currency, every border, every card.
              Scroll to see it come together.
            </p>
            <div className={styles.ctaRow}>
              <button type="button" onClick={openModal} className={styles.cta}>
                Open an account
              </button>
              <button type="button" onClick={openModal} className={styles.ctaSecondary}>
                Download the app
              </button>
            </div>
          </div>

          <div className={styles.cardStage}>
            {cards.map((card) => (
              <div
                key={card.key}
                ref={(el) => {
                  cardRefs.current[card.key] = el;
                }}
                className={`${styles.card} ${card.className}`}
              >
                <Image
                  src={card.image}
                  alt={card.label}
                  fill
                  className={styles.cardImage}
                />
                <span className={styles.cardLabel}>{card.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
