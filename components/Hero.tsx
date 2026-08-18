"use client";

import React from "react";
import Image from "next/image";

interface HeroProps {
  onOpenContact: () => void;
}

const BarcodeLogo = () => (
  <div className="flex flex-col gap-1.5 select-none items-center lg:items-start">
    {/* High-fidelity custom SVG Barcode */}
    <svg width="150" height="28" viewBox="0 0 150 28" fill="currentColor" className="text-brand-charcoal">
      <rect x="0" y="0" width="2" height="28" />
      <rect x="4" y="0" width="4" height="28" />
      <rect x="10" y="0" width="1" height="28" />
      <rect x="13" y="0" width="2" height="28" />
      <rect x="18" y="0" width="5" height="28" />
      <rect x="25" y="0" width="2" height="28" />
      <rect x="29" y="0" width="1" height="28" />
      <rect x="32" y="0" width="4" height="28" />
      <rect x="38" y="0" width="2" height="28" />
      <rect x="42" y="0" width="6" height="28" />
      <rect x="50" y="0" width="1" height="28" />
      <rect x="53" y="0" width="3" height="28" />
      <rect x="58" y="0" width="2" height="28" />
      <rect x="62" y="0" width="5" height="28" />
      <rect x="69" y="0" width="1" height="28" />
      <rect x="72" y="0" width="4" height="28" />
      <rect x="78" y="0" width="2" height="28" />
      <rect x="82" y="0" width="2" height="28" />
      <rect x="86" y="0" width="4" height="28" />
      <rect x="92" y="0" width="1" height="28" />
      <rect x="95" y="0" width="3" height="28" />
      <rect x="100" y="0" width="6" height="28" />
      <rect x="108" y="0" width="2" height="28" />
      <rect x="112" y="0" width="1" height="28" />
      <rect x="115" y="0" width="4" height="28" />
      <rect x="121" y="0" width="2" height="28" />
      <rect x="125" y="0" width="5" height="28" />
      <rect x="132" y="0" width="2" height="28" />
      <rect x="136" y="0" width="1" height="28" />
      <rect x="139" y="0" width="3" height="28" />
      <rect x="144" y="0" width="6" height="28" />
    </svg>
    <span className="text-[7.5px] font-mono tracking-[0.25em] text-brand-charcoal uppercase select-none whitespace-nowrap">
      L o r o &nbsp; P r o d u c t i o n s
    </span>
  </div>
);

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-brand-cream text-brand-charcoal pt-24 pb-12 flex flex-col justify-between overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 w-full flex-grow flex flex-col justify-between">
        
        {/* Main 3-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-stretch w-full flex-grow pt-8 lg:pt-16">
          
          {/* Left Column: Headline and Barcode */}
          <div className="lg:col-span-3 flex flex-col justify-between py-6 text-center lg:text-left order-1">
            <div className="space-y-2 text-[20px] sm:text-[24px] md:text-[28px] font-sans font-extrabold text-brand-charcoal leading-snug tracking-tight">
              <h1>We Don't Just Edit Videos.</h1>
              <h1>We Build Category Kings.</h1>
            </div>
            
            {/* Desktop Barcode Logo */}
            <div className="hidden lg:block pt-12">
              <BarcodeLogo />
            </div>
          </div>

          {/* Center Column: Transparent Collage Image */}
          <div className="lg:col-span-6 flex items-end justify-center py-4 lg:py-0 order-2">
            <div className="relative w-full max-w-[420px] sm:max-w-[560px] lg:max-w-[760px] aspect-[1.47] flex items-end">
              <Image
                src="/hero.png"
                alt="Loro Productions surreal television head collage representation"
                fill
                priority
                sizes="(max-width: 640px) 420px, (max-width: 1024px) 560px, 760px"
                className="object-contain object-bottom select-none"
              />
            </div>
          </div>

          {/* Right Column: Quote and Brand Tagline */}
          <div className="lg:col-span-3 flex flex-col justify-between py-6 text-center lg:text-right order-3">
            
            {/* Quote Block (Vertically Centered on Desktop) */}
            <div className="flex-grow flex items-center justify-center lg:justify-start text-left lg:pl-6 py-8 lg:py-0">
              <blockquote className="text-[14px] sm:text-[15px] md:text-[16px] font-sans font-medium text-brand-charcoal leading-relaxed max-w-[290px]">
                “Your personal brand is what people say about you when you're not in the room. Great video makes sure they say the right things.”
              </blockquote>
            </div>

            {/* Brand Tagline */}
            <div className="text-center lg:text-right">
              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-sans font-extrabold text-brand-charcoal leading-tight uppercase whitespace-pre-line">
                {"We craft binge-worthy\npersonal brands."}
              </p>
            </div>
          </div>

        </div>

        {/* Mobile Barcode Logo (Centered at the bottom on smaller viewports) */}
        <div className="block lg:hidden w-full text-center py-6 order-4">
          <div className="inline-block">
            <BarcodeLogo />
          </div>
        </div>

      </div>
    </section>
  );
};
