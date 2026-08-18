"use client";

import React from "react";
import { LoroLogo } from "./LoroLogo";
import { ArrowUpRight, Mail, Instagram, Youtube, Linkedin, Twitter } from "lucide-react";

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  return (
    <footer className="bg-brand-charcoal text-paper-100 pt-20 pb-12 border-t-4 border-brand-orange relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-paper-100/15">
          {/* Column 1: Brand & Logo */}
          <div className="md:col-span-5 space-y-6">
            <LoroLogo size="lg" className="brightness-125" />
            
            <p className="text-sm font-sans text-paper-300 max-w-md leading-relaxed">
              Loro Productions is an elite video production agency specializing in high-retention video content and personal branding for founders, executives, and visionaries.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {[
                { icon: Youtube, label: "YouTube" },
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Twitter, label: "X (Twitter)" },
                { icon: Instagram, label: "Instagram" },
              ].map((s, idx) => (
                <a
                  key={idx}
                  href="#"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full bg-paper-100/10 border border-paper-100/20 text-paper-100 flex items-center justify-center hover:bg-brand-orange hover:border-brand-orange transition-colors"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-brand-orange">
              // NAVIGATION
            </h4>
            <ul className="space-y-2.5 text-sm font-sans text-paper-300">
              <li>
                <a href="#hero" className="hover:text-brand-orange transition-colors">
                  Home / Overview
                </a>
              </li>
              <li>
                <a href="#works" className="hover:text-brand-orange transition-colors">
                  Works &amp; Case Studies
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-brand-orange transition-colors">
                  The Loro Philosophy
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-brand-orange transition-colors">
                  Client Reviews &amp; Testimonials
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-brand-orange transition-colors">
                  FAQs &amp; Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Newsletter & CTA */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-brand-orange">
              // BRAND INSIGHTS
            </h4>
            <p className="text-xs font-sans text-paper-300 leading-relaxed">
              Join 12,000+ founders receiving our weekly breakdown on high-retention video hooks and personal brand scaling.
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2">
              <input
                type="email"
                placeholder="founder@company.com"
                className="w-full px-3.5 py-2 rounded-xl bg-paper-100/10 border border-paper-100/20 text-xs text-paper-100 focus:outline-none focus:border-brand-orange"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-xl bg-brand-orange text-paper-100 font-mono font-bold text-xs hover:bg-brand-orange-light transition-colors whitespace-nowrap"
              >
                JOIN
              </button>
            </form>

            <div className="pt-2">
              <button
                onClick={onOpenContact}
                className="w-full py-3 rounded-xl bg-paper-100 text-brand-charcoal font-display font-bold text-xs uppercase tracking-wider hover:bg-brand-orange hover:text-paper-100 transition-colors flex items-center justify-center gap-2"
              >
                <span>BOOK STRATEGY SESSION</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-paper-400">
          <p>© {new Date().getFullYear()} Loro Productions LLC. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-paper-100 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-paper-100 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-paper-100 transition-colors">
              Cookie Preferences
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
