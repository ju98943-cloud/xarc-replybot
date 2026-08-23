import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { ArrowRight, Terminal, Repeat2, Users, UserMinus, PenLine, Zap } from "lucide-react";
import { Counter } from "@/components/site/Counter";

const agents = [
  {
    icon: Repeat2,
    name: "Session Auto Reply",
    platform: "X · session replies",
    desc: "Runs a reply session and answers in your tone.",
    controls: ["Session", "Tone presets", "Session limits"],
  },
  {
    icon: PenLine,
    name: "Post Generator",
    platform: "X · original posts",
    desc: "Writes posts in your style. You choose what to post.",
    controls: ["Topics", "Your style", "Ready to post"],
  },
  {
    icon: Users,
    name: "Engagement Groups",
    platform: "X · group reminders",
    desc: "Reminds you when a group round drops, so you never miss one.",
    controls: ["Round alerts", "Queue", "Reminders"],
  },
  {
    icon: UserMinus,
    name: "X Unfollow",
    platform: "X · graph cleanup",
    desc: "Unfollows people who don't follow you back, slowly and safely.",
    controls: ["Non-mutuals", "Score gate", "Safe pace"],
  },
  {
    icon: Zap,
    name: "Session Agent",
    platform: "X + Telegram · sessions",
    desc: "Finishes a full session for you: Telegram group, tweet, then react.",
    controls: ["Telegram group", "Tweet", "React"],
  },
];

const stats = [
  { k: "6", v: "AI providers" },
  { k: "24/7", v: "always-on agents" },
  { k: "3,500", v: "credits per $1" },
];

function AgentShowcase() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % agents.length), 3800);
    return () => clearInterval(t);
  }, []);

  const item = agents[i]!;
  const Icon = item.icon;

  return (
    <div className="grid gap-3 p-3 sm:p-4">
      <div className="min-h-[190px] sm:min-h-[168px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="h-full rounded-lg border border-border bg-background/40 p-3.5 sm:p-4"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-primary/30 bg-primary/10 text-primary">
                <Icon className="h-4 w-4" />
              </span>
              <div className="min-w-0">
                <h3 className="text-sm font-bold tracking-wide">{item.name}</h3>
                <span className="text-[9px] tracking-[0.18em] text-muted-foreground uppercase">
                  {item.platform}
                </span>
              </div>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
              {item.desc}
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {item.controls.map((c) => (
                <span
                  key={c}
                  className="rounded border border-border bg-surface/60 px-1.5 py-0.5 text-[9px] tracking-[0.12em] uppercase"
                >
                  {c}
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-24 pb-14 sm:pt-28 sm:pb-16 md:pt-36 md:pb-20">
      <div className="grid-bg animate-grid-drift pointer-events-none absolute inset-0" />
      <motion.div
        aria-hidden
        animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.08, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-primary/5 blur-[160px]"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-5">
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-5 max-w-4xl text-center text-[2rem] leading-[1.08] font-extrabold tracking-tight break-words sm:text-5xl md:text-7xl"
        >
          XARC AUTO REPLY
          <span className="block text-primary">RUNS X FOR YOU</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-auto mt-4 max-w-xl text-center text-sm leading-relaxed text-muted-foreground sm:text-base"
        >
          Everything your X account needs, automated.


        </motion.p>


        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center"
        >
          <motion.a
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            href="#pricing"
            className="shimmer group inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-xs font-bold tracking-[0.15em] text-primary-foreground uppercase"
          >
            Buy license
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            href="#features"
            className="shimmer inline-flex items-center justify-center gap-2 rounded-md border border-border bg-surface/50 px-6 py-3 text-xs font-bold tracking-[0.15em] uppercase backdrop-blur transition-colors hover:border-primary/60 hover:text-primary"
          >
            <Terminal className="h-4 w-4" /> See what it does
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -4 }}
          className="animate-tilt-in relative mx-auto mt-10 max-w-3xl overflow-hidden rounded-xl border border-border bg-surface/70 backdrop-blur"
        >
          <AgentShowcase />
        </motion.div>

        <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
          {stats.map((s, idx) => (
            <motion.div
              key={s.v}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="lift rounded-lg border border-border bg-surface/40 px-5 py-4 text-center backdrop-blur hover:border-primary/50"
            >
              <div className="text-2xl font-bold text-primary">
                {/^\d[\d,]*$/.test(s.k) ? (
                  <Counter value={Number(s.k.replace(/,/g, ""))} />
                ) : (
                  s.k
                )}
              </div>
              <div className="mt-1 text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                {s.v}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
