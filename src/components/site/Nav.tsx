import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Menu, X, Zap } from "lucide-react";
import logo from "@/assets/xarc-logo.png";

const links = [
  { href: "#features", label: "Features" },
  { href: "#agents", label: "Agents" },
  { href: "#how", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 border-b border-border backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3.5 sm:px-5">
        <a href="#top" className="group flex items-center gap-2.5">
          <img
            src={logo}
            alt="XARC Auto Reply logo"
            className="h-8 w-8 rounded-md object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <span className="text-sm font-bold tracking-[0.2em] text-foreground">XARC</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-xs tracking-widest text-muted-foreground uppercase transition-colors hover:text-primary after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://t.me/XARC_SUPPORT"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-md bg-primary px-4 py-2 text-xs font-bold tracking-widest text-primary-foreground uppercase transition-transform duration-200 hover:scale-105 md:inline-flex"
          >
            <Zap className="h-3.5 w-3.5" /> Get access
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="rounded-md border border-border p-2 text-primary md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          className="overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl md:hidden"
        >
          <div className="flex flex-col px-5 py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/50 py-3 text-xs tracking-widest text-muted-foreground uppercase hover:text-primary"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://t.me/XARC_SUPPORT"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-4 mb-1 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-xs font-bold tracking-widest text-primary-foreground uppercase"
            >
              <Zap className="h-3.5 w-3.5" /> Get access
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
