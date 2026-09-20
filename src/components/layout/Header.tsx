import { AnimatePresence, motion } from "framer-motion";
import { Leaf, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { site } from "../../data/content";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Events", to: "/events" },
  { label: "Projects", to: "/projects" },
  { label: "Team", to: "/team" },
  { label: "Sponsors", to: "/sponsors" },
  { label: "Contact", to: "/contact" },
  { label: "SHRISHTI", to: "/shrishti" }
];

function LogoMark() {
  return (
    <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-white/[0.15] bg-white/10 shadow-glow">
      {site.logo ? (
        <img src={site.logo} alt="" className="h-full w-full object-cover" width={40} height={40} />
      ) : (
        <Leaf aria-hidden="true" className="h-5 w-5 text-prakriti-secondary" />
      )}
    </span>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/[0.55] backdrop-blur-2xl">
      <nav className="container-wide flex h-16 items-center justify-between gap-4" aria-label="Primary navigation">
        <NavLink to="/" className="flex items-center gap-3 rounded-full focus-visible:outline-prakriti-accent" aria-label="PRAKRITI home">
          <LogoMark />
          <span className="hidden leading-tight sm:block">
            <span className="block text-sm font-black tracking-[0]">PRAKRITI</span>
            <span className="block text-xs text-white/60">NIT Durgapur</span>
          </span>
        </NavLink>

        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                [
                  "rounded-full px-3 py-2 text-sm font-semibold text-white/70 transition hover:bg-white/10 hover:text-white focus-visible:outline-prakriti-accent",
                  isActive ? "bg-prakriti-primary text-white hover:bg-prakriti-secondary hover:text-black" : ""
                ].join(" ")
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <NavLink
          to="/shrishti"
          className="hidden rounded-full border border-prakriti-primary/60 bg-prakriti-primary px-4 py-2 text-sm font-black text-white transition hover:bg-prakriti-secondary hover:text-black focus-visible:outline-prakriti-accent md:inline-flex"
        >
          Read SHRISHTI
        </NavLink>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-prakriti-primary bg-prakriti-primary text-white transition hover:bg-prakriti-secondary hover:text-black lg:hidden"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
        >
          {open ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="fixed inset-x-0 top-16 border-b border-white/10 bg-black/95 p-4 backdrop-blur-2xl lg:hidden"
          >
            <div className="grid gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    [
                      "rounded-lg px-4 py-3 text-base font-bold text-white/75 transition hover:bg-white/10",
                      isActive ? "bg-prakriti-primary text-white" : ""
                    ].join(" ")
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
