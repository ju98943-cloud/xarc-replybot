import { motion } from "motion/react";
import {
  BrainCircuit,
  Fingerprint,
  Gauge,
  Languages,
  MessagesSquare,
} from "lucide-react";

const features = [
  {
    icon: MessagesSquare,
    title: "Session auto reply",
    body: "You start a session, XARC replies inside it in your own words — no timeline watching needed.",
  },
  {
    icon: BrainCircuit,
    title: "6 model providers",
    body: "OpenAI, Groq, OpenRouter, Cerebras, Cohere and Mistral. Swap models per agent, test connections in one tap.",
  },
  {
    icon: Fingerprint,
    title: "Your voice, cloned",
    body: "Tone presets plus your own sample replies keep the output on-brand instead of sounding like a bot.",
  },
  {
    icon: Languages,
    title: "Multi-language",
    body: "Reply in the language of the thread, or force a language per agent for regional communities.",
  },
  {
    icon: Gauge,
    title: "Rate + limit control",
    body: "Delays, daily caps and score thresholds keep activity human and your account healthy.",
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[10px] tracking-[0.35em] text-primary uppercase">// capabilities</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
            Everything the extension does
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.article
              key={f.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -8, rotate: i % 2 ? -0.4 : 0.4 }}
              className="group shimmer lift relative overflow-hidden rounded-xl border border-border bg-surface/40 p-5 backdrop-blur sm:p-6 hover:border-primary/50"
            >
              <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-primary/5 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-primary/30 bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <f.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-sm font-bold tracking-wide">{f.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{f.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
