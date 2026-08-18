"use client";

import React from "react";

interface LoroLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showSubtitle?: boolean;
}

export const LoroLogo: React.FC<LoroLogoProps> = ({
  className = "",
  size = "md",
  showSubtitle = false,
}) => {
  const sizeClasses = {
    sm: "h-7",
    md: "h-10",
    lg: "h-14",
    xl: "h-20",
  };

  return (
    <div className={`inline-flex flex-col items-start select-none ${className}`}>
      <div className={`flex items-center gap-1.5 font-mono ${sizeClasses[size]}`}>
        {/* SVG Pixel Logo based on Reference Image */}
        <svg
          viewBox="0 0 380 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-auto"
        >
          {/* LETTER L */}
          <g id="letter-L">
            <rect x="0" y="10" width="22" height="70" fill="#FF4500" />
            <rect x="0" y="60" width="48" height="20" fill="#FF4500" />
          </g>

          {/* LETTER O (WITH PIXEL CAMERA ICON INSIDE) */}
          <g id="letter-O1">
            {/* Outer Box */}
            <rect x="62" y="10" width="75" height="70" rx="14" fill="#FF4500" />
            {/* Inner Cutout Canvas */}
            <rect x="74" y="22" width="51" height="46" rx="6" fill="#F4F1EA" />
            {/* Pixel Camera Body */}
            <rect x="79" y="32" width="26" height="26" fill="#FF4500" />
            <rect x="83" y="36" width="18" height="18" fill="#F4F1EA" />
            {/* Pixel Lens / Cone */}
            <rect x="105" y="34" width="6" height="22" fill="#FF4500" />
            <rect x="111" y="38" width="6" height="14" fill="#FF4500" />
            <rect x="117" y="42" width="4" height="6" fill="#FF4500" />
          </g>

          {/* LETTER R */}
          <g id="letter-R">
            <rect x="151" y="10" width="22" height="70" fill="#FF4500" />
            <rect x="173" y="10" width="30" height="20" fill="#FF4500" />
            <rect x="183" y="30" width="20" height="20" fill="#FF4500" />
            <rect x="151" y="30" width="40" height="16" fill="#FF4500" />
            <rect x="175" y="46" width="18" height="16" fill="#FF4500" />
            <rect x="185" y="62" width="20" height="18" fill="#FF4500" />
          </g>

          {/* LETTER O (WITH PIXEL PERSON SILHOUETTE INSIDE) */}
          <g id="letter-O2">
            {/* Outer Box */}
            <rect x="219" y="10" width="75" height="70" rx="14" fill="#FF4500" />
            {/* Inner Cutout Canvas */}
            <rect x="231" y="22" width="51" height="46" rx="6" fill="#F4F1EA" />
            {/* Pixel Person Head */}
            <rect x="250" y="28" width="13" height="12" fill="#FF4500" />
            <rect x="254" y="40" width="5" height="4" fill="#FF4500" />
            {/* Pixel Person Shoulders & Body */}
            <rect x="242" y="44" width="29" height="18" fill="#FF4500" />
          </g>
        </svg>

        {/* Studio Badge Tag */}
        <span className="hidden sm:inline-block text-[10px] font-mono tracking-widest uppercase bg-brand-charcoal text-brand-cream px-2 py-0.5 rounded border border-brand-charcoal font-bold ml-1">
          PRODUCTIONS
        </span>
      </div>

      {showSubtitle && (
        <span className="text-xs font-mono tracking-widest text-brand-charcoal/70 uppercase mt-1 font-semibold">
          Video Production &amp; Personal Branding
        </span>
      )}
    </div>
  );
};
