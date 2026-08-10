import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What exactly does the $10 buy?",
    a: "A lifetime XARC license key bound to your device. It unlocks all five agents, every AI provider and all future updates. There is no subscription and no renewal.",
  },
  {
    q: "How do credits work?",
    a: "Credits fuel your agent sessions — you start a session, the agent runs until you stop it, and credits are drawn down as it works. They cost a flat 4,000 credits per $1, so a few dollars covers long sessions across every agent.",
  },
  {
    q: "Which networks and tokens can I pay with?",
    a: "USDT or USDC on Ethereum, BNB Chain, Polygon, Arbitrum, Base or Solana. EVM chains share one deposit address; Solana has its own.",
  },
  {
    q: "Will this get my account banned?",
    a: "XARC paces actions with delays, daily caps and relevance thresholds so behaviour stays human. You still control every limit — set them conservatively.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[10px] tracking-[0.35em] text-primary uppercase">// faq</p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Questions before you send funds
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`i-${i}`} className="border-border">
                <AccordionTrigger className="text-left text-sm font-bold hover:text-primary hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-xs leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
