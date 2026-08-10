import { motion } from "motion/react";
import { Repeat2, Users, UserMinus, PenLine, Zap } from "lucide-react";

const agents = [
  {
    icon: Repeat2,
    name: "Session Auto Reply",
    tag: "X · session replies",
    chips: ["Session", "Tone", "Safe pace"],
    desc: "Runs a reply session for you and answers in your own tone.",
  },
  {
    icon: PenLine,
    name: "Post Generator",
    tag: "X · original posts",
    chips: ["Topics", "Your style", "Ready to post"],
    desc: "Writes posts and threads in your style from your topics. You pick what goes out.",
  },
  {
    icon: Users,
    name: "Engagement Groups",
    tag: "X · group reminders",
    chips: ["Round alerts", "Queue", "Reminders"],
    desc: "Keeps track of your group rounds and reminds you when it's your turn.",
  },
  {
    icon: UserMinus,
    name: "X Unfollow",
    tag: "X · clean the graph",
    chips: ["Non-mutuals", "Score gate", "Safe pace"],
    desc: "Unfollows people who don't follow you back, at a slow and safe pace.",
  },
  {
    icon: Zap,
    name: "Session Agent",
    tag: "X + Telegram · sessions",
    chips: ["Telegram group", "Tweet", "React"],
    desc: "Finishes a full session for you: Telegram group, tweet, then react.",
  },
];

export function Agents() {
  return (
    <section id="agents" className="relative py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-1/3 h-64 bg-primary/[0.03] blur-[140px]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[10px] tracking-[0.35em] text-primary uppercase">// agent fleet</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
            Five agents.
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {agents.map((a, i) => (
            <motion.div
              key={a.name}
              initial={{ opacity: 0, x: i % 2 ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: 0.05 * i }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="group shimmer lift relative flex gap-3.5 rounded-xl border border-border bg-surface/40 p-4 sm:gap-4 sm:p-5 backdrop-blur hover:border-primary/50 hover:bg-surface/70"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary transition-transform group-hover:-rotate-6">
                <a.icon className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-sm font-bold tracking-wide">{a.name}</h3>
                  <span className="rounded border border-border px-1.5 py-0.5 text-[9px] tracking-[0.15em] text-muted-foreground uppercase">
                    {a.tag}
                  </span>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{a.desc}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {a.chips.map((c) => (
                    <span
                      key={c}
                      className="rounded-full bg-primary/10 px-2.5 py-1 text-[10px] tracking-wider text-primary"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
