import { motion } from "motion/react";
import { Check, Coins, Infinity as InfinityIcon, Zap } from "lucide-react";

const includes = [
  "All 5 agents unlocked",
  "6 AI providers, unlimited model keys",
  "Lifetime updates — no subscription",
  "Priority Telegram support",
];

const packs = [
  { usd: 1, credits: 4000, label: "Starter" },
  { usd: 5, credits: 20000, label: "Runner", popular: true },
  { usd: 20, credits: 80000, label: "Operator" },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="mx-auto max-w-6xl px-4 sm:px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-[10px] tracking-[0.35em] text-primary uppercase">// pricing</p>
          <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-balance sm:text-4xl">
            Pay once. Top up credits when you burn them.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-xs leading-relaxed text-muted-foreground sm:text-sm">
            No monthly plans, no seats, no card. A single $15 lifetime license, and credits at a
            flat 4,000 per dollar.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.05fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl border border-primary/40 bg-surface/60 p-6 backdrop-blur sm:p-8"
          >
            <div className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-primary/8 blur-3xl" />
            <div className="flex items-center gap-2 text-[10px] tracking-[0.25em] text-primary uppercase">
              <InfinityIcon className="h-3.5 w-3.5" /> lifetime license
            </div>
            <div className="mt-5 flex items-end gap-2">
              <span className="text-5xl font-extrabold tracking-tight text-primary sm:text-6xl">$15</span>
              <span className="mb-2 text-xs tracking-widest text-muted-foreground uppercase">
                one-time
              </span>
            </div>
            <ul className="mt-7 space-y-3">
              {includes.map((it) => (
                <li key={it} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                  {it}
                </li>
              ))}
            </ul>
            <a
              href="https://t.me/XARC_SUPPORT"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-xs font-bold tracking-[0.15em] text-primary-foreground uppercase transition-transform hover:scale-[1.02]"
            >
              <Zap className="h-4 w-4" /> Buy license
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-border bg-surface/40 p-6 backdrop-blur sm:p-8"
          >
            <div className="flex items-center gap-2 text-[10px] tracking-[0.25em] text-primary uppercase">
              <Coins className="h-3.5 w-3.5" /> credit packs
            </div>
            <div className="mt-6 space-y-3">
              {packs.map((p) => (
                <motion.div
                  key={p.usd}
                  whileHover={{ x: 6 }}
                  className={`flex items-center justify-between gap-3 rounded-xl border px-4 py-4 sm:px-5 transition-colors ${
                    p.popular
                      ? "border-primary/50 bg-primary/10"
                      : "border-border bg-background/40 hover:border-primary/40"
                  }`}
                >
                  <div className="min-w-0">
                    <div className="text-sm font-bold">{p.credits.toLocaleString()} credits</div>
                    <div className="mt-0.5 text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                      {p.label}
                    </div>
                  </div>
                  <div className="shrink-0 text-right">
                    <div className="text-xl font-bold text-primary">${p.usd}</div>
                    {p.popular && (
                      <div className="text-[9px] tracking-[0.2em] text-primary uppercase">
                        popular
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="mt-6 text-[11px] leading-relaxed text-muted-foreground">
              Credits are used only when a post or reply is generated.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
