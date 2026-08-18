"use client";

import React, { useState } from "react";
import { Play, Star, Quote, CheckCircle2, Film, Video, Sparkles } from "lucide-react";

interface Testimonial {
  id: string;
  clientName: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  videoType: "Vertical Reel (9:16)" | "Widescreen (16:9)";
  metrics: string;
  videoPlaceholderNote: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "review-1",
    clientName: "David Miller",
    role: "Co-Founder & CEO",
    company: "Apex AI Labs",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    quote: "Loro Productions took our founder videos from 500 views to over 80,000 views per episode. Their team handles everything from script to final color grade.",
    videoType: "Vertical Reel (9:16)",
    metrics: "+420K Followers Gained",
    videoPlaceholderNote: "Video slot ready: drop your mp4 or embed link here",
  },
  {
    id: "review-2",
    clientName: "Sarah Jenkins",
    role: "Managing Director",
    company: "Horizon Capital",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
    quote: "Our LP recruitment campaign docuseries generated incredible trust before we even sat down for pitch meetings. Extremely professional studio team.",
    videoType: "Widescreen (16:9)",
    metrics: "12M Views Across LinkedIn",
    videoPlaceholderNote: "Video slot ready: drop your mp4 or embed link here",
  },
  {
    id: "review-3",
    clientName: "Marcus Vance",
    role: "Keynote Speaker & Author",
    company: "Vance Media",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    quote: "The aesthetic Loro created for my personal brand is unmatched. Every single reel feels like a mini feature film.",
    videoType: "Vertical Reel (9:16)",
    metrics: "96.5% Audience Retention",
    videoPlaceholderNote: "Video slot ready: drop your mp4 or embed link here",
  },
];

export const Reviews: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"all" | "vertical" | "widescreen">("all");

  const filteredTestimonials = TESTIMONIALS.filter((t) => {
    if (activeTab === "vertical") return t.videoType.includes("9:16");
    if (activeTab === "widescreen") return t.videoType.includes("16:9");
    return true;
  });

  return (
    <section id="reviews" className="py-32 bg-paper-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-xs font-body uppercase tracking-widest text-black/40 mb-4">
            Client Reviews & Video Testimonials
          </p>

          <h2 className="text-3xl sm:text-5xl font-heading text-black tracking-tight leading-tight">
            Hear From Visionaries We've Scaled
          </h2>

          <p className="mt-5 text-base font-body text-black/50 leading-relaxed max-w-xl mx-auto">
            Video testimonial containers are pre-styled below with dedicated slots for your future video embeds.
          </p>

          {/* Format Filter Tabs */}
          <div className="mt-8 flex justify-center gap-3">
            {([
              { key: "all", label: "All Formats" },
              { key: "vertical", label: "Shorts / Reels (9:16)" },
              { key: "widescreen", label: "Widescreen (16:9)" },
            ] as const).map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-5 py-2 rounded-full text-xs font-body tracking-wider transition-all duration-300 ${
                  activeTab === tab.key
                    ? "bg-black text-white"
                    : "bg-transparent text-black/60 border border-black/10 hover:border-black/30 hover:text-black"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Video Reviews Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTestimonials.map((review) => (
            <div
              key={review.id}
              className="bg-white border border-black/5 rounded-2xl p-5 flex flex-col justify-between hover:border-black/15 transition-all duration-300"
            >
              {/* VIDEO CONTAINER PLACEHOLDER FRAME */}
              <div className="relative aspect-video rounded-xl bg-neutral-900 overflow-hidden mb-5 group cursor-pointer">
                {/* Inner Video Placeholder Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                  <div className="w-12 h-12 rounded-full border border-white/25 flex items-center justify-center group-hover:border-white/50 transition-all duration-300 mb-3">
                    <Play className="w-5 h-5 text-white/80 fill-white/80 ml-0.5" />
                  </div>

                  <span className="text-[11px] font-body text-white/40 tracking-wider uppercase">
                    {review.videoType}
                  </span>
                </div>

                {/* Top Corner Badge */}
                <div className="absolute top-3 left-3 text-[9px] font-body text-white/30 tracking-wider uppercase">
                  Video Placeholder
                </div>
              </div>

              {/* Review Content */}
              <div className="space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-0.5 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <blockquote className="text-sm font-body text-black leading-relaxed">
                    &ldquo;{review.quote}&rdquo;
                  </blockquote>
                </div>

                {/* Metric highlight */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FF4500]/5 text-[#FF4500] text-xs font-body w-fit">
                  <Sparkles className="w-3 h-3" />
                  <span>{review.metrics}</span>
                </div>

                {/* Client Profile */}
                <div className="pt-4 border-t border-black/5 flex items-center gap-3">
                  <img
                    src={review.avatar}
                    alt={review.clientName}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-sm font-heading text-black">
                        {review.clientName}
                      </h4>
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FF4500]/40" />
                    </div>
                    <p className="text-xs font-body text-black/40">
                      {review.role}, {review.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Integration Callout Banner */}
        <div className="mt-16 p-6 rounded-2xl bg-white border border-black/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center">
              <Film className="w-4 h-4 text-black/40" />
            </div>
            <div>
              <p className="text-sm font-heading text-black">
                Need to add your own YouTube / MP4 video links?
              </p>
              <p className="text-xs font-body text-black/40 mt-0.5">
                All video frames in <code className="text-black/50">components/Reviews.tsx</code> are pre-configured to render HTML5 video elements or iframe embeds effortlessly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
