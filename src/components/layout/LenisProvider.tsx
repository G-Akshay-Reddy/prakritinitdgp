import Lenis from "lenis";
import { PropsWithChildren, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export function LenisProvider({ children }: PropsWithChildren) {
  const location = useLocation();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (time: number) => Math.min(1, 1.001 - Math.pow(2, -10 * time)),
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    let frame = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };

    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    lenisRef.current?.scrollTo(0, {
      immediate: true,
    });
  }, [location.pathname]);

  return <>{children}</>;
}