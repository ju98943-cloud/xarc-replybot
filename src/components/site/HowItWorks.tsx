import { motion } from "motion/react";
import { Download, KeySquare, Rocket, Wallet } from "lucide-react";

const steps = [
  { icon: Download, title: "Install", body: "Load XARC in your Chromium browser." },
  { icon: KeySquare, title: "Get license", body: "Enter your X handle to get a key." },
  { icon: Wallet, title: "Pay", body: "Send USDT or USDC, paste the tx hash." },
  { icon: Rocket, title: "Start", body: "Pick a tone and run an agent." },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
            Live in four steps
          </h2>
        </motion.div>

        <div className="relative mt-14">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-6 right-0 left-0 hidden h-px origin-left bg-gradient-to-r from-transparent via-primary/40 to-transparent md:block"
          />
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <div className="relative z-10 mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-primary/40 bg-background text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <s.icon className="h-5 w-5" />
                  <span className="absolute inset-0 rounded-full" />
                  <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                </div>
                <h3 className="text-sm font-bold tracking-wide">{s.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
