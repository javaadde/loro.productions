import { useEffect, useState } from "react";

import contentImage from "../assets/content.png";
import { CtaBanner } from "@/components/site/cta-banner";
import { HeroSection } from "@/components/site/hero-section";
import { MobileMenu } from "@/components/site/mobile-menu";
import { ReviewsSection } from "@/components/site/reviews-section";
import { ServicesSection } from "@/components/site/services-section";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { StatsSection } from "@/components/site/stats-section";

const navItems = [
  { href: "#works", label: "Works", active: true },
  { href: "#about", label: "About" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

const stats = [
  { icon: "*", target: 500, suffix: "+", label: "Videos Crafted" },
  { icon: "%", target: 98, suffix: "%", label: "Client Retention" },
  { icon: "#", target: 150, suffix: "M+", label: "Views Generated" },
  { icon: "<", target: 48, suffix: "h", label: "Avg. Turnaround" },
];

const services = [
  {
    number: "01",
    title: "Strategy First",
    copy: "We map your category, audience, and angle before a single frame is cut — so every video has a job to do.",
  },
  {
    number: "02",
    title: "Production & Edit",
    copy: "Hooks, pacing, sound design, and packaging engineered for binge-worthy watch time.",
    delay: 0.08,
  },
  {
    number: "03",
    title: "Publish & Compound",
    copy: "Platform-native distribution that turns attention into authority, week after week.",
    delay: 0.16,
  },
];

const reviews = [
  { chip: "i must" },
  { chip: "incredible.", delay: 0.08 },
  { chip: "out", delay: 0.16 },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth > 720) {
        setMenuOpen(false);
      }
    };

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", closeOnResize);
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      window.removeEventListener("resize", closeOnResize);
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div className="bg-background text-foreground">
      <div className="relative z-[1] flex min-h-screen min-h-dvh flex-col items-center overflow-hidden px-[clamp(20px,4vw,32px)] py-[clamp(16px,2.4vh,28px)]">
        <SiteHeader
          navItems={navItems}
          menuOpen={menuOpen}
          onMenuToggle={() => setMenuOpen((open) => !open)}
        />
        <HeroSection onContactClick={() => setMenuOpen(false)} />
        <StatsSection stats={stats} />
      </div>

      <section
        aria-hidden="true"
        className="flex justify-center px-[clamp(20px,6vw,80px)] py-[clamp(12px,3vh,36px)] max-[720px]:px-8"
      >
        <img
          src={contentImage}
          alt=""
          loading="lazy"
          className="h-auto w-[min(1080px,94vw)] mix-blend-multiply max-[720px]:w-[min(100%,88vw)]"
        />
      </section>

      <ServicesSection services={services} />
      <ReviewsSection reviews={reviews} />
      <CtaBanner />
      <SiteFooter />

      <MobileMenu
        open={menuOpen}
        navItems={navItems}
        onClose={() => setMenuOpen(false)}
      />
    </div>
  );
}
