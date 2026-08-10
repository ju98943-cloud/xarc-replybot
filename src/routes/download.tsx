import { createFileRoute, Link } from "@tanstack/react-router";
import { Download, Github, Rocket, Terminal, ArrowLeft } from "lucide-react";
import logo from "@/assets/xarc-logo.png";

const title = "Download Source Code — XARC Auto Reply";
const description =
  "Download the complete XARC Auto Reply website source code. Pre-configured for one-click deploys to Netlify or Vercel.";

export const Route = createFileRoute("/download")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://huggy-buddy-maker-55.lovable.app/download" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "https://huggy-buddy-maker-55.lovable.app/download" }],
  }),
  component: DownloadPage,
});

const steps = [
  {
    icon: Download,
    title: "1 — Download & unzip",
    body: "Grab the archive below and extract it anywhere on your machine.",
  },
  {
    icon: Terminal,
    title: "2 — Install & run",
    body: "npm install then npm run dev — the site boots on localhost:8080.",
  },
  {
    icon: Github,
    title: "3 — Push to Git",
    body: "Create a repo and push the folder so Netlify or Vercel can import it.",
  },
  {
    icon: Rocket,
    title: "4 — Deploy",
    body: "netlify.toml and vercel.json are already included — import and hit deploy.",
  },
];

function DownloadPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-5 sm:py-24">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[11px] tracking-widest text-muted-foreground uppercase transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Back to site
        </Link>

        <div className="mt-8 flex items-center gap-3">
          <img src={logo} alt="XARC logo" className="h-11 w-11 rounded-md object-cover" />
          <div>
            <div className="text-sm font-bold tracking-[0.2em]">XARC</div>
            <div className="text-[10px] tracking-widest text-muted-foreground uppercase">
              source code
            </div>
          </div>
        </div>

        <h1 className="mt-8 text-3xl font-bold tracking-tight sm:text-5xl">
          Download the full website source
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          The complete codebase for this site — TanStack Start, React 19, Tailwind CSS v4 and every
          component you see here. Pre-configured so it deploys to Netlify or Vercel without any
          extra setup.
        </p>

        <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
          <a
            href="/xarc-website-source.zip"
            download
            className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-xs font-bold tracking-widest text-primary-foreground uppercase transition-transform duration-200 hover:scale-105"
          >
            <Download className="h-4 w-4" /> Download source (.zip)
          </a>
          <span className="text-center text-[11px] tracking-widest text-muted-foreground uppercase sm:text-left">
            ~1.4 MB · MIT-free of backend · Node 20+
          </span>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {steps.map((s) => (
            <div key={s.title} className="rounded-lg border border-border bg-card/40 p-5">
              <s.icon className="h-5 w-5 text-primary" />
              <h2 className="mt-3 text-sm font-bold tracking-wide">{s.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-lg border border-border bg-card/40 p-5">
          <h2 className="text-sm font-bold tracking-widest uppercase">Quick start</h2>
          <pre className="mt-4 overflow-x-auto rounded-md border border-border bg-background p-4 text-xs leading-6 text-muted-foreground">
            <code>{`unzip xarc-website-source.zip
cd xarc-website
npm install
npm run dev      # http://localhost:8080
npm run build    # production build`}</code>
          </pre>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Full deployment instructions for both hosts are in{" "}
            <span className="text-primary">DEPLOY.md</span> inside the archive.
          </p>
        </div>
      </div>
    </main>
  );
}
