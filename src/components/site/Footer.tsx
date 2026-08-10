import { motion } from "motion/react";
import logo from "@/assets/xarc-logo.png";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border pt-14">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-10 sm:px-5 sm:py-12 sm:flex-row sm:justify-between"
      >
        <div className="group flex items-center gap-3">
          <img
            src={logo}
            alt="XARC logo"
            className="h-9 w-9 rounded-md object-cover transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110"
          />
          <div>
            <div className="text-sm font-bold tracking-[0.2em]">XARC</div>
            <div className="text-[10px] tracking-widest text-muted-foreground uppercase">
              AI auto reply
            </div>
          </div>
        </div>

        <nav className="flex flex-wrap justify-center gap-6 text-[11px] tracking-widest text-muted-foreground uppercase">
          {[
            { href: "#features", label: "Features" },
            { href: "#pricing", label: "Pricing" },
            { href: "#faq", label: "FAQ" },
          ].map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="story-link transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </motion.div>

      <p className="pb-8 text-center text-[10px] tracking-widest text-muted-foreground uppercase">
        © {new Date().getFullYear()} XARC SYSTEM
      </p>
    </footer>
  );
}
