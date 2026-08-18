import { motion } from "framer-motion";
import {
  ArrowRight,
  Clapperboard,
  MoveRight,
  PlayCircle,
  Sparkles,
  TrendingUp,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const metrics = [
  { label: "Campaign systems launched", value: "24+" },
  { label: "Average client watch-time lift", value: "3.7x" },
  { label: "Delivery window for short-form", value: "72h" },
];

const services = [
  {
    title: "Founder positioning",
    copy: "Editorial direction, voice frameworks, and messaging that make the face of the company impossible to ignore.",
  },
  {
    title: "Cinematic production",
    copy: "Studio shoots, docu-style brand films, and launch assets built for authority instead of disposable content.",
  },
  {
    title: "Distribution systems",
    copy: "Narrative hooks, cutdowns, and publishing rhythms designed to compound attention every week.",
  },
];

const steps = [
  "Shape the point of view and core narrative",
  "Produce a hero campaign and repeatable content bank",
  "Turn each shoot into weekly authority assets",
];

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="absolute inset-0 -z-10 bg-spotlight" />
      <div className="absolute inset-x-0 top-0 -z-10 h-px animate-pulseLine bg-gradient-to-r from-transparent via-primary/70 to-transparent" />

      <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 pb-16 pt-6 sm:px-8 lg:px-10">
        <header className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur">
          <div>
            <p className="text-lg font-semibold tracking-tight">Loro Productions</p>
            <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
              cinematic growth studio
            </p>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
            <a href="#services" className="transition hover:text-foreground">
              Services
            </a>
            <a href="#process" className="transition hover:text-foreground">
              Process
            </a>
            <a href="#contact" className="transition hover:text-foreground">
              Contact
            </a>
          </nav>

          <Button variant="secondary" size="sm">
            Book intro call
          </Button>
        </header>

        <section className="grid flex-1 items-center gap-10 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <Badge variant="accent" className="mb-6">
              Founder-led video systems
            </Badge>
            <h1 className="max-w-4xl text-5xl font-semibold leading-none tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
              Build a brand people trust before they ever book the call.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              Loro Productions creates premium launch campaigns, founder films, and
              repeatable content systems for teams that want attention with weight.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="group">
                Start a project
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Button>
              <Button variant="secondary" size="lg">
                <PlayCircle className="h-4 w-4" />
                View showreel
              </Button>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12 * index + 0.25, duration: 0.5 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"
                >
                  <div className="text-2xl font-semibold text-white">{metric.value}</div>
                  <div className="mt-1 text-sm leading-6 text-muted-foreground">
                    {metric.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <Card className="overflow-hidden border-primary/20 bg-[#121212]/85">
              <CardContent className="p-0">
                <div className="border-b border-white/10 p-6">
                  <div className="flex items-center justify-between">
                    <Badge>Current build</Badge>
                    <Sparkles className="h-4 w-4 text-primary" />
                  </div>
                  <div className="mt-6 rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-primary/20 via-white/5 to-transparent p-5">
                    <div className="grid gap-4">
                      <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 p-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Hero campaign</p>
                          <p className="mt-1 text-lg font-medium text-white">
                            Founder narrative sprint
                          </p>
                        </div>
                        <Clapperboard className="h-5 w-5 text-primary" />
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                          <p className="text-sm text-muted-foreground">Outputs</p>
                          <p className="mt-2 text-3xl font-semibold text-white">18</p>
                          <p className="mt-1 text-sm text-muted-foreground">
                            launch edits and cutdowns
                          </p>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                          <p className="text-sm text-muted-foreground">Primary goal</p>
                          <p className="mt-2 text-3xl font-semibold text-white">Trust</p>
                          <p className="mt-1 text-sm text-muted-foreground">
                            not vanity reach
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid gap-3 p-6 text-sm text-muted-foreground">
                  {steps.map((step, index) => (
                    <div
                      key={step}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3"
                    >
                      <span>
                        {String(index + 1).padStart(2, "0")} {step}
                      </span>
                      <MoveRight className="h-4 w-4 text-primary" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="absolute -bottom-6 -left-4 hidden w-44 rounded-3xl border border-white/10 bg-black/50 p-4 backdrop-blur md:block">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-primary/15 p-2 text-primary">
                  <TrendingUp className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Momentum stack</p>
                  <p className="text-xs text-muted-foreground">strategy + film + distribution</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="services" className="grid gap-6 py-8 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <Card className="h-full bg-white/[0.04]">
                <CardContent className="flex h-full flex-col gap-4 p-6">
                  <Badge className="w-fit">0{index + 1}</Badge>
                  <h2 className="text-2xl font-semibold tracking-tight text-white">
                    {service.title}
                  </h2>
                  <p className="text-sm leading-7 text-muted-foreground">
                    {service.copy}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </section>

        <section
          id="process"
          className="mt-10 grid gap-6 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 lg:grid-cols-[0.8fr_1.2fr]"
        >
          <div>
            <Badge variant="accent">Simple first version</Badge>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              A clean landing page, ready for a fuller site build.
            </h2>
          </div>

          <div className="grid gap-4 text-sm leading-7 text-muted-foreground">
            <p>
              This first pass focuses on a strong above-the-fold message, a premium
              visual direction, and a component foundation that fits Vite, Tailwind,
              and shadcn-style UI patterns.
            </p>
            <p id="contact">
              The next steps can expand this into case studies, reviews, booking
              flows, and CMS-backed content without carrying over any Next.js app
              router structure.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
