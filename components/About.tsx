"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Camera, Target, Flame, Layers, ArrowRight } from "lucide-react";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  circleSize: string;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Brand Blueprint & Audit",
    description: "Deconstruct your expertise, identify key positioning, and engineer content topics that command authority.",
    circleSize: "w-8 h-8",
  },
  {
    number: "02",
    title: "Scripting & Hook Engineering",
    description: "Write high-retention scripts using proven narrative arcs and psychology-backed open loops.",
    circleSize: "w-12 h-12",
  },
  {
    number: "03",
    title: "Cinematic Studio Production",
    description: "Dispatch on-location camera crews with cinema 4K gear, studio lighting, and pro audio.",
    circleSize: "w-16 h-16",
  },
  {
    number: "04",
    title: "Retention Edit & Motion",
    description: "Cut with precision pacing, custom 2D/3D visual effects, audio design, and custom thumbnails.",
    circleSize: "w-20 h-20",
  },
  {
    number: "05",
    title: "Distribution & Monetization",
    description: "Omnichannel publishing (YouTube, LinkedIn, IG) optimized to turn views into enterprise pipeline.",
    circleSize: "w-24 h-24",
  },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="grid lg:grid-cols-12 gap-16 items-start mb-24">
          <div className="lg:col-span-7 space-y-8">
            <span className="text-[11px] font-mono uppercase tracking-widest text-black/40 block">
              The Loro Philosophy
            </span>

            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-black tracking-tight leading-[1.15]">
              We Don&apos;t Just Edit Videos. <br />
              We Build Category Kings.
            </h2>

            <p className="text-base sm:text-lg text-black/60 font-sans leading-relaxed max-w-2xl">
              In a world drowning in generic AI content, authentic video storytelling is the ultimate moat. Loro Productions was built to bridge the gap between Hollywood-grade cinematography and high-growth personal branding.
            </p>

            <div className="pt-4 grid sm:grid-cols-2 gap-5 font-sans">
              <div className="p-5 rounded-xl border border-black/5">
                <div className="flex items-center gap-2.5 font-display font-bold text-black mb-2">
                  <Camera className="w-4 h-4 text-brand-orange" />
                  <span>Cinema-Grade Gear</span>
                </div>
                <p className="text-sm text-black/50 leading-relaxed">
                  RED &amp; Sony FX Series Cinema Rigs with 4K color grading.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-black/5">
                <div className="flex items-center gap-2.5 font-display font-bold text-black mb-2">
                  <Flame className="w-4 h-4 text-brand-orange" />
                  <span>High-Retention Edits</span>
                </div>
                <p className="text-sm text-black/50 leading-relaxed">
                  Pacing and sound design calibrated for maximum viewer retention.
                </p>
              </div>
            </div>
          </div>

          {/* Right — Manifesto blockquote */}
          <div className="lg:col-span-5 flex items-start">
            <div className="w-full py-8">
              <span className="text-[10px] font-mono text-black/30 uppercase tracking-widest block mb-6">
                The Loro Manifesto
              </span>

              <blockquote className="border-l-2 border-brand-orange pl-6">
                <p className="text-xl sm:text-2xl font-display font-bold text-black leading-snug italic">
                  &ldquo;Your personal brand is what people say about you when you&apos;re not in the room. Great video makes sure they say the right things.&rdquo;
                </p>
              </blockquote>

              <div className="mt-8 pt-5 border-t border-black/5 flex items-center justify-between text-[11px] font-mono text-black/30 uppercase tracking-wider">
                <span>Founder Story // Loro Productions</span>
                <span className="text-brand-orange/70">Est. 2024</span>
              </div>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="pt-16 border-t border-black/5">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-widest text-black/40 block">
              Our Process
            </span>
            <h3 className="text-2xl sm:text-4xl font-display font-extrabold text-black tracking-tight">
              Our 5-Step Brand Scaling Framework
            </h3>
            <p className="text-sm font-sans text-black/50 leading-relaxed">
              An end-to-end production workflow designed for busy founders &amp; executives.
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-5 relative">
            {PROCESS_STEPS.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="bg-white p-6 rounded-2xl border border-black/5 flex flex-col justify-between items-start hover:opacity-70 transition-opacity duration-300 group"
              >
                {/* Step Number */}
                <div className="w-full flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center font-mono text-sm text-black/60">
                    {step.number}
                  </div>
                  {idx < PROCESS_STEPS.length - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 text-black/15 hidden md:block" />
                  )}
                </div>

                <div className="space-y-2">
                  <h4 className="text-base font-display font-bold text-black">
                    {step.title}
                  </h4>
                  <p className="text-xs font-sans text-black/50 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
