import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface CounterProps {
  value: number;
  suffix?: string;
}

export function Counter({ value, suffix = "" }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { stiffness: 80, damping: 22 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, motionValue, value]);

  useEffect(() => {
    return springValue.on("change", (latest) => setDisplay(Math.round(latest)));
  }, [springValue]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}
