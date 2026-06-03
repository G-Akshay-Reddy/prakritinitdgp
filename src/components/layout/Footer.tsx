import { ArrowUpRight, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import { site } from "../../data/content";

const footerLinks = [
  { label: "About", to: "/about" },
  { label: "Events", to: "/events" },
  { label: "Projects", to: "/projects" },
  { label: "Team", to: "/team" },
  { label: "Sponsors", to: "/sponsors" },
  { label: "Contact", to: "/contact" },
  { label: "SHRISHTI", to: "/shrishti" }
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/[0.55] py-10">
      <div className="container-wide grid gap-8 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-prakriti-primary">
              <img src="/media/logo.jpg" alt="" />
            </span>
            <div>
              <p className="font-black">PRAKRITI</p>
              <p className="text-sm text-white/60">{site.subtitle}</p>
            </div>
          </div>
          <p className="max-w-lg text-sm leading-7 text-white/60">{site.description}</p>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-black uppercase text-white/90">Explore</h2>
          <ul className="grid gap-2 text-sm text-white/60">
            {footerLinks.map((link) => (
              <li key={link.to}>
                <Link className="transition hover:text-prakriti-accent" to={link.to}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-black uppercase text-white/90">Social</h2>
          <ul className="grid gap-2 text-sm text-white/60">
            {site.socialLinks.map((link) => (
              <li key={link.href}>
                <a
                  className="inline-flex items-center gap-1 transition hover:text-prakriti-accent"
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label}
                  <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container-wide mt-8 border-t border-white/10 pt-5 text-xs text-white/40">
        <p>© {new Date().getFullYear()} PRAKRITI, NIT Durgapur. Built for sustainable storytelling.</p>
      </div>
    </footer>
  );
}
