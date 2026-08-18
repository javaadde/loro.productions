"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

interface StepData {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  shapeStyle: string; // Tailwind aspect/width multiplier
}

const STEPS: StepData[] = [
  {
    number: "01",
    title: "Brand Audit & Blueprint",
    subtitle: "Discovery Stage",
    description: "We audit your domain expertise, define your unique positioning moat, and map out 90 days of high-converting content topics.",
    shapeStyle: "w-4 sm:w-6 h-40 sm:h-52 rounded-[100%]",
  },
  {
    number: "02",
    title: "Scripting & Hook Architecture",
    subtitle: "Pacing & Psychology",
    description: "Crafting retention-focused scripts using psychological open loops, high-impact verbal hooks, and clear call-to-actions.",
    shapeStyle: "w-8 sm:w-12 h-40 sm:h-52 rounded-[100%]",
  },
  {
    number: "03",
    title: "Studio Cinema Shoot",
    subtitle: "Production Stage",
    description: "Dispatching our 4K cinema camera crew with studio lighting and teleprompter gear directly to your office or venue.",
    shapeStyle: "w-16 sm:w-24 h-40 sm:h-52 rounded-[100%]",
  },
  {
    number: "04",
    title: "Retention Edit & Motion FX",
    subtitle: "Post-Production",
    description: "Cutting with dynamic pacing, sound design, custom 2D retro motion graphics, and high-CTR custom thumbnails.",
    shapeStyle: "w-32 sm:w-44 h-40 sm:h-52 rounded-full",
  },
  {
    number: "05",
    title: "Distribution & Revenue Scale",
    subtitle: "Omnichannel Execution",
    description: "Distributing your content across YouTube, X, and LinkedIn to build unstoppable category authority and inbound pipeline.",
    shapeStyle: "w-40 sm:w-52 h-40 sm:h-52 rounded-full relative",
  },
];

export const InfographicSection: React.FC = () => {
  return (
    <section className="py-24 bg-paper-100 border-y-2 border-brand-charcoal relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-brand-charcoal/15">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange text-paper-100 text-xs font-silkscreen uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>BRAND GROWTH FRAMEWORK</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-pixel font-extrabold text-brand-charcoal tracking-tight uppercase">
              Brand Growth Engine
            </h2>
            <p className="text-sm font-mono text-brand-charcoal/70 mt-1 uppercase tracking-widest">
              LORO PRODUCTIONS // 5-STAGE SYSTEMATIC INFOGRAPHIC
            </p>
          </div>

          <div className="mt-4 sm:mt-0 font-mono text-xs text-brand-charcoal/60 text-right hidden md:block">
            <span>[ SYSTEM ARCHITECTURE V2.4 ]</span>
          </div>
        </div>

        {/* Infographic Banner Asset (content.png) with Framer Motion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="my-10 p-6 sm:p-8 rounded-3xl bg-paper-200 border-2 border-brand-charcoal shadow-brutalist flex items-center justify-center overflow-hidden"
        >
          <img
            src="/content.png"
            alt="Loro Productions Brand Growth Framework Graphic"
            className="w-full max-w-4xl h-auto object-contain filter drop-shadow-md hover:scale-[1.01] transition-transform duration-300"
          />
        </motion.div>

        {/* 5 Columns Text Block below the Infographic circles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 pt-8 border-t border-brand-charcoal/15">
          {STEPS.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="space-y-3"
            >
              {/* Number in Pixel Font */}
              <div className="text-2xl sm:text-3xl font-pixel font-bold text-brand-orange tracking-tight">
                {step.number}
              </div>

              {/* Step Title */}
              <h3 className="text-base font-pixel font-bold text-brand-charcoal leading-snug uppercase">
                {step.title}
              </h3>

              {/* Subtitle */}
              <div className="text-[11px] font-mono text-brand-charcoal/60 uppercase font-bold">
                [ {step.subtitle} ]
              </div>

              {/* Description */}
              <p className="text-xs font-sans text-brand-charcoal/80 leading-relaxed pt-1">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
