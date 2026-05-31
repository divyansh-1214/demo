"use client";

import React from "react";
import { motion, useMotionValue, useMotionTemplate, HTMLMotionProps } from "framer-motion";

interface SpotlightCardProps extends HTMLMotionProps<"article"> {
  children: React.ReactNode;
  glowColor?: string; // e.g. "rgba(173, 198, 255, 0.12)"
  glowRadius?: number; // e.g. 300
}

export default function SpotlightCard({
  children,
  className = "",
  glowColor = "rgba(173, 198, 255, 0.12)",
  glowRadius = 300,
  ...props
}: SpotlightCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.article
      onMouseMove={handleMouseMove}
      className={`group relative overflow-hidden ${className}`}
      {...props}
    >
      {/* Spotlight Glow Overlay */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 group-hover:opacity-100 transition duration-300 z-0"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              ${glowRadius}px circle at ${mouseX}px ${mouseY}px,
              ${glowColor},
              transparent 80%
            )
          `,
        }}
      />
      
      {/* Content wrapper to stack above the background glow */}
      <div className="relative z-10 h-full w-full flex flex-col justify-between">
        {children}
      </div>
    </motion.article>
  );
}
