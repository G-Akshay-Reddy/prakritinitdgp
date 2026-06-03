import { motion, type MotionProps } from "framer-motion";
import { PropsWithChildren } from "react";

interface RevealProps extends PropsWithChildren {
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li";
  motionProps?: MotionProps;
}

export function Reveal({ children, delay = 0, className, as = "div", motionProps }: RevealProps) {
  const Component = motion[as];

  return (
    <Component
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...motionProps}
    >
      {children}
    </Component>
  );
}
