import { ArrowRight } from "lucide-react";
import { Link, type LinkProps } from "react-router-dom";

interface PrimaryLinkProps extends LinkProps {
  variant?: "primary" | "secondary" | "ghost";
}

export function PrimaryLink({ children, variant = "primary", className = "", ...props }: PrimaryLinkProps) {
  const variants = {
    primary: "border-prakriti-accent bg-prakriti-accent text-black hover:bg-white",
    secondary: "border-white/[0.15] bg-white text-black hover:bg-prakriti-accent",
    ghost: "border-white/[0.15] bg-white/[0.08] text-white hover:bg-white/[0.14]"
  };

  return (
    <Link
      className={[
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-black transition focus-visible:outline-prakriti-accent",
        variants[variant],
        className
      ].join(" ")}
      {...props}
    >
      {children}
      <ArrowRight aria-hidden="true" className="h-4 w-4" />
    </Link>
  );
}
