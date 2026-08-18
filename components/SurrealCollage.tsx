"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Video, Sparkles, Mic, Play, Radio, Volume2 } from "lucide-react";

export const SurrealCollage: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative w-full aspect-[4/3] max-w-2xl mx-auto flex items-center justify-center p-4">
      {/* Background Graphic: Giant Orange Circle from Inspiration 1, 4 & 5 */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] rounded-full bg-brand-orange/90 shadow-2xl flex items-center justify-center"
      >
        {/* Concentric rings */}
        <div className="w-[85%] h-[85%] rounded-full border border-paper-100/30" />
      </motion.div>

      {/* Floating Retro Code Snippets (Inspired by Image 1 top right) */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute top-2 right-4 sm:right-8 bg-brand-charcoal text-paper-100 p-3 rounded-lg border border-brand-orange shadow-brutalist max-w-[200px] text-[10px] font-mono leading-relaxed hidden sm:block z-20"
      >
        <div className="text-brand-orange font-bold mb-1">// LORO_ENGINE_V2</div>
        <p className="opacity-80">{"const brand = await Loro.transform({"}</p>
        <p className="pl-2 opacity-80">{"retention: '98.4%',"}</p>
        <p className="pl-2 opacity-80">{"aesthetic: 'surreal_cinema'"}</p>
        <p className="opacity-80">{"});"}</p>
      </motion.div>

      {/* Main Surreal Hero Visual Container */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        {/* CRT Computer Monitor Box with Headphone Art (Inspiration 1 & 4) */}
        <motion.div
          whileHover={{ scale: 1.03, rotate: -1 }}
          className="relative bg-paper-200 border-4 border-brand-charcoal rounded-2xl p-4 sm:p-6 shadow-brutalist-lg max-w-sm sm:max-w-md w-full bg-grain-pattern"
        >
          {/* Top Bar of CRT */}
          <div className="flex items-center justify-between pb-3 border-b-2 border-brand-charcoal mb-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-brand-orange animate-pulse" />
              <span className="w-3 h-3 rounded-full bg-amber-400" />
              <span className="w-3 h-3 rounded-full bg-emerald-500" />
            </div>
            <span className="text-[11px] font-mono font-bold tracking-widest text-brand-charcoal uppercase">
              CRT-REC // 1994
            </span>
          </div>

          {/* CRT Screen Display */}
          <div className="relative bg-brand-charcoal rounded-xl p-4 border-2 border-brand-charcoal overflow-hidden group">
            {/* Scanlines Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] pointer-events-none z-20 opacity-60" />

            {/* Inner Screen Graphic */}
            <div className="relative aspect-video bg-gradient-to-br from-neutral-900 via-neutral-950 to-stone-900 rounded-lg flex flex-col items-center justify-center p-4 text-center border border-neutral-800">
              {/* Floating Camera & Headphone Icon Composition */}
              <div className="relative mb-3">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="w-16 h-16 sm:w-20 sm:h-20 bg-brand-orange text-paper-100 rounded-2xl flex items-center justify-center shadow-lg border-2 border-paper-100 mx-auto"
                >
                  <Video className="w-9 h-9 sm:w-11 sm:h-11" />
                </motion.div>
                
                {/* Headphones overlay graphic (Inspiration 1) */}
                <div className="absolute -top-3 -left-3 -right-3 text-paper-100 flex justify-between pointer-events-none">
                  <span className="w-6 h-8 rounded-l-full bg-neutral-800 border border-brand-orange flex items-center justify-center">
                    <Volume2 className="w-3 h-3 text-brand-orange" />
                  </span>
                  <span className="w-6 h-8 rounded-r-full bg-neutral-800 border border-brand-orange flex items-center justify-center">
                    <Radio className="w-3 h-3 text-brand-orange" />
                  </span>
                </div>
              </div>

              <h4 className="text-paper-100 font-display text-sm sm:text-base font-bold tracking-tight">
                PERSONAL BRAND ENGINE
              </h4>
              <p className="text-paper-300 text-[11px] font-mono mt-1">
                [ CINEMATIC VIDEO &amp; RETENTION ]
              </p>

              {/* Interactive Play Trigger */}
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-orange text-paper-100 text-xs font-mono font-bold hover:bg-brand-orange-light transition-all shadow-sm"
              >
                <Play className={`w-3 h-3 ${isPlaying ? "fill-paper-100" : ""}`} />
                {isPlaying ? "SYSTEM ACTIVE" : "PREVIEW REEL"}
              </button>
            </div>

            {/* Glowing signal text */}
            <div className="mt-3 flex items-center justify-between text-[10px] font-mono text-paper-400">
              <span className="flex items-center gap-1">
                <Radio className="w-3 h-3 text-brand-orange" /> LIVE FEED
              </span>
              <span>4K / 60 FPS</span>
            </div>
          </div>

          {/* Hands holding monitor illustration badge (Inspired by Image 1) */}
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-brand-orange text-paper-100 flex items-center justify-center font-mono font-bold text-xs">
                LP
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-brand-charcoal leading-none">LORO PRODUCTIONS</p>
                <p className="text-[10px] font-mono text-brand-charcoal/60">EST. 2024</p>
              </div>
            </div>
            
            <div className="flex items-center gap-1 bg-brand-sand px-2.5 py-1 rounded-full border border-brand-charcoal text-[11px] font-mono font-bold text-brand-charcoal">
              <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
              SURREAL VIBES
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Retro Decorative Badge (Inspired by Image 4 stone head / red circle) */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        className="absolute -bottom-2 -left-2 sm:left-4 bg-paper-100 text-brand-charcoal p-3 rounded-xl border-2 border-brand-charcoal shadow-brutalist z-20 flex items-center gap-3"
      >
        <div className="w-10 h-10 rounded-lg bg-brand-charcoal text-brand-orange flex items-center justify-center font-mono font-extrabold text-sm border border-brand-orange">
          <Mic className="w-5 h-5 text-brand-orange" />
        </div>
        <div>
          <div className="text-xs font-display font-bold">VIRAL RETENTION</div>
          <div className="text-[10px] font-mono text-brand-charcoal/70">100% Studio Quality</div>
        </div>
      </motion.div>
    </div>
  );
};
