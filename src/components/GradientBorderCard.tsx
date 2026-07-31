"use client";

import { ReactNode } from "react";

interface GradientBorderCardProps {
  children: ReactNode;
  className?: string;
}

export default function GradientBorderCard({ children, className = "" }: GradientBorderCardProps) {
  return (
    <div className={`relative group ${className}`}>
      {/* Animated gradient border */}
      <div
        className="absolute -inset-[1px] rounded-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 blur-[1px]"
        style={{
          background: "linear-gradient(135deg, #ff3b30, #ff9500, #af52de, #5ac8fa, #ff3b30)",
          backgroundSize: "300% 300%",
          animation: "gradientShift 4s ease infinite",
        }}
      />
      {/* Card content */}
      <div className="relative rounded-2xl bg-[#111111] h-full">
        {children}
      </div>
    </div>
  );
}
