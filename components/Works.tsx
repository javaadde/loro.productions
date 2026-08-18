"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Play, Sparkles, X, CheckCircle2 } from "lucide-react";

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: "Personal Branding" | "Docuseries" | "Shorts & Reels";
  thumbnail: string;
  metrics: { label: string; value: string }[];
  summary: string;
  fullStrategy: string;
  deliverables: string[];
  quote: { text: string; author: string; role: string };
  gradient: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "case-1",
    title: "Zero to 350K Followers: The SaaS Founder Roadmap",
    client: "Alex Vance // Founder of CloudScale",
    category: "Personal Branding",
    thumbnail: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
    metrics: [
      { label: "Organic Views", value: "24.5M" },
      { label: "Follower Growth", value: "+350K" },
      { label: "Pipeline Generated", value: "$1.8M" },
    ],
    summary: "Transformed a introverted tech founder into the #1 authority in cloud infrastructure through weekly breakdown videos and short-form insights.",
    fullStrategy: "We audited Alex's unique domain expertise, distilled complex cloud engineering into 3-minute visual metaphors, and dispatched a two-person cinema crew to shoot 1 month of content in a 1-day sprint.",
    deliverables: [
      "Weekly 4K YouTube Deep Dives",
      "20x High-Retention Vertical Reels/Month",
      "Executive Scripting & Topic Research",
      "Custom Thumbnail & Motion System",
    ],
    quote: {
      text: "Loro Productions didn't just edit videos — they architected my entire personal brand. Our inward inbound demo requests tripled in 90 days.",
      author: "Alex Vance",
      role: "CEO & Founder, CloudScale",
    },
    gradient: "from-amber-600 via-orange-600 to-red-700",
  },
  {
    id: "case-2",
    title: "Inside the Dealflow: VC Firm Cinematic Docuseries",
    client: "Vanguard Ventures // Tier-1 VC",
    category: "Docuseries",
    thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
    metrics: [
      { label: "Series Views", value: "14.2M" },
      { label: "LP Inbound", value: "+140%" },
      { label: "Retention Rate", value: "94.2%" },
    ],
    summary: "A raw, unscripted docuseries tracking startup founders during high-stakes board meetings and pitch days.",
    fullStrategy: "Positioned Vanguard as the founder-first venture firm by capturing authentic, high-drama moments of venture building with dynamic handheld camera work and film-grade color grading.",
    deliverables: [
      "6-Episode Mini Docuseries",
      "High-Impact Trailer Campaign",
      "Short-Form Clip Distribution for Partners",
    ],
    quote: {
      text: "The aesthetic was unlike anything in VC. Loro captured the heart and grit of building startups with cinematic brilliance.",
      author: "Marcus Thorne",
      role: "Managing Partner, Vanguard Ventures",
    },
    gradient: "from-stone-700 via-neutral-800 to-zinc-900",
  },
  {
    id: "case-3",
    title: "AI Thought Leadership: 60-Day Viral Content Engine",
    client: "Dr. Elena Rostova // AI Researcher",
    category: "Shorts & Reels",
    thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    metrics: [
      { label: "Shorts Views", value: "48.1M" },
      { label: "X & IG Growth", value: "+520K" },
      { label: "Keynote Invites", value: "18 Global" },
    ],
    summary: "Engineered a rapid-fire short-form video strategy simplifying complex AI breakthroughs into 45-second compelling visual hooks.",
    fullStrategy: "Used custom retro 2D motion graphics overlays, energetic pacing, and micro-storytelling frameworks to break through algorithm clutter.",
    deliverables: [
      "Daily Short-Form Video Reels",
      "Custom 2D Retro Motion Graphics",
      "Multi-Platform Distribution (TikTok, IG, YouTube Shorts)",
    ],
    quote: {
      text: "Loro turned my dense academic research into visual art that millions of people actually want to watch.",
      author: "Dr. Elena Rostova",
      role: "AI Lead & Keynote Speaker",
    },
    gradient: "from-orange-500 via-red-600 to-rose-700",
  },
];

export const Works: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  const categories = ["All", "Personal Branding", "Docuseries", "Shorts & Reels"];

  const filteredCases =
    activeCategory === "All"
      ? CASE_STUDIES
      : CASE_STUDIES.filter((c) => c.category === activeCategory);

  return (
    <section id="works" className="py-24 bg-paper-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-brand-orange text-xs font-silkscreen uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>SELECTED CASE STUDIES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-pixel font-bold text-brand-charcoal tracking-tight uppercase">
              Proof of Impact &amp; Authority
            </h2>
          </div>

          {/* Category Filter Tabs */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-pixel font-bold transition-all uppercase ${
                  activeCategory === cat
                    ? "bg-brand-charcoal text-paper-100 shadow-brutalist-sm"
                    : "bg-paper-200 text-brand-charcoal/80 hover:bg-brand-sand border border-brand-charcoal/15"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCases.map((study) => (
            <motion.div
              key={study.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="bg-paper-200 border-2 border-brand-charcoal rounded-2xl overflow-hidden shadow-brutalist flex flex-col justify-between group"
            >
              {/* Card Thumbnail / Header */}
              <div className="relative aspect-video overflow-hidden bg-brand-charcoal">
                <img
                  src={study.thumbnail}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-transparent opacity-80" />

                {/* Badge Category */}
                <div className="absolute top-3 left-3 bg-brand-orange text-paper-100 text-[10px] font-silkscreen px-2.5 py-1 rounded-md uppercase tracking-wider shadow-sm">
                  {study.category}
                </div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-paper-100/90 text-brand-charcoal flex items-center justify-center shadow-lg group-hover:bg-brand-orange group-hover:text-paper-100 transition-colors">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-paper-100">
                  <p className="text-[11px] font-mono opacity-80">{study.client}</p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-pixel font-bold text-brand-charcoal leading-snug group-hover:text-brand-orange transition-colors uppercase">
                    {study.title}
                  </h3>
                  <p className="text-xs text-brand-charcoal/70 mt-2 font-sans line-clamp-2">
                    {study.summary}
                  </p>
                </div>

                {/* Key Metrics Row */}
                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-brand-charcoal/15 text-center">
                  {study.metrics.map((m, idx) => (
                    <div key={idx} className="bg-paper-100 p-2 rounded-lg border border-brand-charcoal/10">
                      <div className="text-sm font-pixel font-bold text-brand-charcoal">
                        {m.value}
                      </div>
                      <div className="text-[9px] font-mono text-brand-charcoal/60 uppercase">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Trigger Modal Button */}
                <button
                  onClick={() => setSelectedCase(study)}
                  className="w-full py-2.5 rounded-xl bg-brand-charcoal text-paper-100 text-xs font-silkscreen font-bold hover:bg-brand-orange transition-colors flex items-center justify-center gap-2 mt-2 uppercase"
                >
                  <span>READ CASE STUDY</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Modal Drawer */}
      <AnimatePresence>
        {selectedCase && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCase(null)}
              className="fixed inset-0 bg-brand-charcoal/80 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-paper-100 border-4 border-brand-charcoal rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl z-10 p-6 sm:p-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCase(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-paper-200 border-2 border-brand-charcoal flex items-center justify-center text-brand-charcoal hover:bg-brand-orange hover:text-paper-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="space-y-3">
                <span className="inline-block bg-brand-orange text-paper-100 text-xs font-silkscreen font-bold px-3 py-1 rounded-md uppercase">
                  {selectedCase.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-pixel font-bold text-brand-charcoal uppercase">
                  {selectedCase.title}
                </h3>
                <p className="text-xs font-mono text-brand-orange font-bold">
                  {selectedCase.client}
                </p>
              </div>

              {/* Metrics Highlights Banner */}
              <div className="my-6 grid grid-cols-3 gap-4 bg-brand-charcoal text-paper-100 p-4 rounded-2xl border-2 border-brand-orange">
                {selectedCase.metrics.map((m, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-xl sm:text-2xl font-pixel font-bold text-brand-orange">
                      {m.value}
                    </div>
                    <div className="text-[10px] sm:text-xs font-mono uppercase text-paper-300">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Strategy & Execution */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-base font-pixel font-bold text-brand-charcoal mb-2 uppercase">
                    The Strategy &amp; Execution
                  </h4>
                  <p className="text-xs sm:text-sm text-brand-charcoal/80 leading-relaxed font-sans">
                    {selectedCase.fullStrategy}
                  </p>
                </div>

                <div>
                  <h4 className="text-base font-pixel font-bold text-brand-charcoal mb-3 uppercase">
                    Deliverables Delivered
                  </h4>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {selectedCase.deliverables.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-xs font-mono text-brand-charcoal bg-paper-200 p-2.5 rounded-lg border border-brand-charcoal/10"
                      >
                        <CheckCircle2 className="w-4 h-4 text-brand-orange flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Client Quote Box */}
                <div className="p-6 rounded-2xl bg-brand-sand border-2 border-brand-charcoal relative">
                  <p className="text-xs sm:text-sm font-sans italic text-brand-charcoal font-medium">
                    "{selectedCase.quote.text}"
                  </p>
                  <div className="mt-4 pt-3 border-t border-brand-charcoal/20 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-brand-charcoal">
                        {selectedCase.quote.author}
                      </p>
                      <p className="text-[10px] font-mono text-brand-charcoal/70">
                        {selectedCase.quote.role}
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-brand-orange text-paper-100 flex items-center justify-center font-mono font-bold text-xs">
                      LP
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Action Footer */}
              <div className="mt-8 pt-4 border-t border-brand-charcoal/15 flex justify-end">
                <button
                  onClick={() => setSelectedCase(null)}
                  className="px-6 py-2.5 rounded-xl bg-brand-charcoal text-paper-100 font-bold text-xs font-silkscreen hover:bg-brand-orange transition-colors uppercase"
                >
                  CLOSE CASE STUDY
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
