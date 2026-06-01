import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useMotionTemplate, HTMLMotionProps } from "framer-motion";

export type PuzzleEdgeFeature = {
  type: "tab" | "cutout";
  position: number | "center"; // Center pixel coordinate or 'center' for midpoint
  radius: number;
};

interface PuzzleCardProps extends HTMLMotionProps<"article"> {
  children: React.ReactNode;
  glowColor?: string;
  glowRadius?: number;
  topEdge?: PuzzleEdgeFeature;
  rightEdge?: PuzzleEdgeFeature;
  bottomEdge?: PuzzleEdgeFeature;
  leftEdge?: PuzzleEdgeFeature;
  cornerRadius?: number;
}

export default function PuzzleCard({
  children,
  className = "",
  glowColor = "rgba(173, 198, 255, 0.12)",
  glowRadius = 300,
  topEdge,
  rightEdge,
  bottomEdge,
  leftEdge,
  cornerRadius = 32,
  ...props
}: PuzzleCardProps) {
  const containerRef = useRef<HTMLElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // ResizeObserver to track dimensions
  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setDimensions({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const { width: W, height: H } = dimensions;
  const R = cornerRadius;

  let pathData = "";
  if (W > 0 && H > 0) {
    pathData = `M ${R} 0`;
    
    // Top Edge (L to R)
    if (topEdge) {
      const d = topEdge.type === "tab" ? -topEdge.radius : topEdge.radius;
      const pos = topEdge.position === "center" ? W / 2 : topEdge.position;
      const r = topEdge.radius;
      pathData += ` L ${pos - r} 0`;
      pathData += ` C ${pos - r/2} 0, ${pos - r/2} ${d}, ${pos} ${d}`;
      pathData += ` C ${pos + r/2} ${d}, ${pos + r/2} 0, ${pos + r} 0`;
    }
    pathData += ` L ${W - R} 0`;
    pathData += ` A ${R} ${R} 0 0 1 ${W} ${R}`;

    // Right Edge (T to B)
    if (rightEdge) {
      const d = rightEdge.type === "tab" ? rightEdge.radius : -rightEdge.radius;
      const pos = rightEdge.position === "center" ? H / 2 : rightEdge.position;
      const r = rightEdge.radius;
      pathData += ` L ${W} ${pos - r}`;
      pathData += ` C ${W} ${pos - r/2}, ${W + d} ${pos - r/2}, ${W + d} ${pos}`;
      pathData += ` C ${W + d} ${pos + r/2}, ${W} ${pos + r/2}, ${W} ${pos + r}`;
    }
    pathData += ` L ${W} ${H - R}`;
    pathData += ` A ${R} ${R} 0 0 1 ${W - R} ${H}`;

    // Bottom Edge (R to L)
    if (bottomEdge) {
      const d = bottomEdge.type === "tab" ? bottomEdge.radius : -bottomEdge.radius;
      const pos = bottomEdge.position === "center" ? W / 2 : bottomEdge.position;
      const r = bottomEdge.radius;
      pathData += ` L ${pos + r} ${H}`;
      pathData += ` C ${pos + r/2} ${H}, ${pos + r/2} ${H + d}, ${pos} ${H + d}`;
      pathData += ` C ${pos - r/2} ${H + d}, ${pos - r/2} ${H}, ${pos - r} ${H}`;
    }
    pathData += ` L ${R} ${H}`;
    pathData += ` A ${R} ${R} 0 0 1 0 ${H - R}`;

    // Left Edge (B to T)
    if (leftEdge) {
      const d = leftEdge.type === "tab" ? -leftEdge.radius : leftEdge.radius;
      const pos = leftEdge.position === "center" ? H / 2 : leftEdge.position;
      const r = leftEdge.radius;
      pathData += ` L 0 ${pos + r}`;
      pathData += ` C 0 ${pos + r/2}, ${d} ${pos + r/2}, ${d} ${pos}`;
      pathData += ` C ${d} ${pos - r/2}, 0 ${pos - r/2}, 0 ${pos - r}`;
    }
    pathData += ` L 0 ${R}`;
    pathData += ` A ${R} ${R} 0 0 1 ${R} 0 Z`;
  }

  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => setIsDesktop(window.innerWidth >= 1280);
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const usePuzzle = isDesktop && pathData !== "";

  return (
    <motion.article
      ref={containerRef as any}
      onMouseMove={handleMouseMove}
      className={`group relative ${usePuzzle ? "" : "overflow-hidden rounded-[inherit]"} ${className}`}
      style={{
        clipPath: usePuzzle ? `path('${pathData}')` : undefined,
      }}
      {...props}
    >
      {/* Background and Glow */}
      <motion.div
        className="pointer-events-none absolute -inset-[64px] z-0 opacity-0 group-hover:opacity-100 transition duration-300"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              ${glowRadius}px circle at calc(${mouseX}px + 64px) calc(${mouseY}px + 64px),
              ${glowColor},
              transparent 80%
            )
          `,
        }}
      />
      
      {/* Static Background layer (so the glassmorphism works without being cut off) */}
      <div className={`absolute pointer-events-none z-[-1] ${usePuzzle ? "-inset-[64px] bg-white/[0.02] backdrop-blur-xl" : "inset-0"}`} />

      {/* SVG Border (Drawn precisely over the clip path) */}
      {usePuzzle && (
        <svg
          className="absolute pointer-events-none z-10"
          style={{ top: 0, left: 0, width: "100%", height: "100%", overflow: "visible" }}
        >
          <defs>
            <filter id="border-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path
            d={pathData}
            fill="none"
            stroke="rgba(255, 255, 255, 0.08)"
            strokeWidth="1.5"
            filter="url(#border-glow)"
          />
        </svg>
      )}

      {/* Content wrapper */}
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </motion.article>
  );
}
