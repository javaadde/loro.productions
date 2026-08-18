"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle, Sparkles } from "lucide-react";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const FAQS: FaqItem[] = [
  {
    id: "faq-1",
    question: "How involved do I need to be in the video shoot & scriptwriting?",
    answer: "Minimal time commitment on your end. We handle 90% of the heavy lifting — including topic research, scriptwriting, hook design, editing, and distribution. We typically require just 1 shoot day per month (or 4 hours) to record 1 month worth of content.",
    category: "Production",
  },
  {
    id: "faq-2",
    question: "What is your typical turnaround time for finished videos?",
    answer: "Our initial sprint takes 14 days from shoot completion to final color-graded delivery. For retainer clients, we deliver on a rolling weekly schedule so your content engine never stops.",
    category: "Logistics",
  },
  {
    id: "faq-3",
    question: "Do you shoot on-location or provide studio spaces?",
    answer: "Both! We dispatch cinema camera crews directly to your office, penthouse, or event location worldwide. We also operate dedicated podcast & cinema studios in major cities.",
    category: "Production",
  },
  {
    id: "faq-4",
    question: "How do you ensure the content aligns with my personal brand?",
    answer: "Before any cameras roll, we conduct a deep Brand Architecture Audit. We analyze your voice, key audience, anti-goals, and core thesis to build a custom style guide tailored exclusively to you.",
    category: "Strategy",
  },
  {
    id: "faq-5",
    question: "Can I add custom video testimonials or existing footage later?",
    answer: "Absolutely. All video sections in our framework are pre-built to allow instant drop-in of custom video files, YouTube embeds, or client reels whenever you have them ready.",
    category: "Technical",
  },
  {
    id: "faq-6",
    question: "What is the investment level for working with Loro Productions?",
    answer: "We offer tailored 90-day Brand Sprints and ongoing monthly Retainer engines. Our packages start at $4,500/month for comprehensive short-form + long-form production. Book a strategy call to get a custom quote.",
    category: "Pricing",
  },
];

export const Faq: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-32 bg-paper-100 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-xs font-body uppercase tracking-widest text-black/40 mb-4">
            Frequently Asked Questions
          </p>

          <h2 className="text-3xl sm:text-5xl font-heading text-black tracking-tight leading-tight">
            Everything You Need to Know
          </h2>

          <p className="mt-5 text-base font-body text-black/50 leading-relaxed max-w-xl mx-auto">
            Got questions about our video shoots, pricing, or strategy? We've got answers.
          </p>
        </div>

        {/* Accordion */}
        <div className="border-t border-black/10">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="border-b border-black/10"
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full py-6 text-left flex items-start justify-between gap-6 group"
                >
                  <div className="flex-1">
                    <span className="text-[10px] font-body uppercase tracking-widest text-black/30 mb-1 block">
                      {faq.category}
                    </span>
                    <span className="text-base sm:text-lg font-heading text-black group-hover:opacity-60 transition-opacity duration-300 leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <div
                    className={`w-7 h-7 rounded-full border flex items-center justify-center flex-shrink-0 mt-1 transition-all duration-300 ${
                      isOpen
                        ? "border-black/20 text-black"
                        : "border-black/10 text-black/30 group-hover:border-black/30 group-hover:text-black/60"
                    }`}
                  >
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 pr-12">
                        <p className="text-sm font-body text-black/50 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
