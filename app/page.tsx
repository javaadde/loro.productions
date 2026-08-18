"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { InfographicSection } from "@/components/InfographicSection";
import { Works } from "@/components/Works";
import { About } from "@/components/About";
import { Reviews } from "@/components/Reviews";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { ContactModal } from "@/components/ContactModal";
import { GrainOverlay } from "@/components/GrainOverlay";

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-brand-cream text-brand-charcoal font-sans selection:bg-brand-orange selection:text-paper-100 relative">
      {/* Retro Film Grain Overlay for Aesthetic Depth */}
      <GrainOverlay />

      {/* Navigation Header */}
      <Navbar onOpenContact={() => setIsContactOpen(true)} />

      {/* Hero Section */}
      <Hero onOpenContact={() => setIsContactOpen(true)} />

      {/* Section 2: Systematic Brand Growth Engine (Infographic + content.png) */}
      <InfographicSection />

      {/* Section 3: Selected Case Studies & Works Portfolio */}
      <Works />

      {/* Section 4: About & The Loro Philosophy */}
      <About />

      {/* Section 5: Client Reviews & Video Testimonials */}
      <Reviews />

      {/* Section 6: Frequently Asked Questions */}
      <Faq />

      {/* Section 7: Footer */}
      <Footer onOpenContact={() => setIsContactOpen(true)} />

      {/* Interactive Multi-step Strategy Booking Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}

