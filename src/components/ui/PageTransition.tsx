import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

export function PageTransition({ children }: PropsWithChildren) {
  return (
    <motion.main
      id="main-content"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen pt-16"
    >
      {children}
    </motion.main>
  );
}
