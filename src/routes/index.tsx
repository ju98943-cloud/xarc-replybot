import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { Features } from "@/components/site/Features";
import { Agents } from "@/components/site/Agents";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Pricing } from "@/components/site/Pricing";
import { Faq } from "@/components/site/Faq";
import { Footer } from "@/components/site/Footer";

const title = "XARC Auto Reply — AI reply agents for X & Telegram";
const description =
  "XARC runs autonomous AI reply agents on X and Telegram. $10 lifetime license, 4,000 credits per $1, paid in USDT or USDC.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://huggy-buddy-maker-55.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "https://huggy-buddy-maker-55.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "XARC Auto Reply",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          description,
          url: "https://huggy-buddy-maker-55.lovable.app/",
          offers: {
            "@type": "Offer",
            price: "10",
            priceCurrency: "USD",
            description: "Lifetime license",
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <ScrollProgress />
      <Nav />
      <Hero />
      <Features />
      <Agents />
      <HowItWorks />
      <Pricing />
      <Faq />
      <Footer />
      <Toaster />
    </main>
  );
}
