"use client";

import React from "react";

export const GrainOverlay: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden opacity-[0.035] mix-blend-multiply"
    >
      <svg className="h-full w-full">
        <filter id="loro-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#loro-noise)" />
      </svg>
    </div>
  );
};
