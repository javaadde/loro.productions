"use client";

import React, { useState, useEffect } from "react";

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md py-4 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-center items-center">
        <nav className="flex items-center gap-6 sm:gap-8">
          <a
            href="#works"
            className="text-[15px] sm:text-[16px] font-sans font-medium text-brand-charcoal hover:text-brand-orange transition-colors"
          >
            Works
          </a>
          <a
            href="#about"
            className="text-[15px] sm:text-[16px] font-sans font-medium text-brand-charcoal hover:text-brand-orange transition-colors"
          >
            Abouts
          </a>
          <a
            href="#reviews"
            className="text-[15px] sm:text-[16px] font-serif italic font-bold text-brand-charcoal hover:text-brand-orange transition-colors"
          >
            Reviews
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              onOpenContact();
            }}
            className="text-[15px] sm:text-[16px] font-sans font-medium text-brand-charcoal hover:text-brand-orange transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};
