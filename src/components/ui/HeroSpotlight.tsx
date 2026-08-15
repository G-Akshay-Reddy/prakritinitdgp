import { type RefObject, useEffect } from "react";

interface HeroSpotlightProps {
  targetRef: RefObject<HTMLElement>;
}

/** A lightweight Aceternity-style spotlight and aurora layer for immersive heroes. */
export function HeroSpotlight({ targetRef }: HeroSpotlightProps) {
  useEffect(() => {
    const target = targetRef.current;
    if (!target || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const updateSpotlight = (event: PointerEvent) => {
      const bounds = target.getBoundingClientRect();
      const x = ((event.clientX - bounds.left) / bounds.width) * 100;
      const y = ((event.clientY - bounds.top) / bounds.height) * 100;
      target.style.setProperty("--spotlight-x", `${Math.max(0, Math.min(100, x))}%`);
      target.style.setProperty("--spotlight-y", `${Math.max(0, Math.min(100, y))}%`);
    };

    target.addEventListener("pointermove", updateSpotlight, { passive: true });
    return () => target.removeEventListener("pointermove", updateSpotlight);
  }, [targetRef]);

  return (
    <div className="hero-spotlight" aria-hidden="true">
      <span className="hero-aurora hero-aurora--one" />
      <span className="hero-aurora hero-aurora--two" />
      <span className="hero-aurora hero-aurora--three" />
    </div>
  );
}
