import { ReactNode } from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  level?: 1 | 2;
}

export function SectionHeader({ eyebrow, title, description, align = "left", level = 1 }: SectionHeaderProps) {
  const Heading = level === 1 ? "h1" : "h2";

  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-black uppercase text-prakriti-accent">
          {eyebrow}
        </p>
      ) : null}
      <Heading className="text-balance text-4xl font-black leading-tight text-white md:text-6xl">{title}</Heading>
      {description ? <p className="mt-5 text-base leading-8 text-white/70 md:text-lg">{description}</p> : null}
    </div>
  );
}
