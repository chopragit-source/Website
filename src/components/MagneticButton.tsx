"use client";

import { useRef, useState, ReactNode } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
}

export default function MagneticButton({ children, className = "", href }: MagneticButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: React.MouseEvent) {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setOffset({ x: x * 0.3, y: y * 0.3 });
  }

  function handleMouseLeave() {
    setOffset({ x: 0, y: 0 });
  }

  const Tag = href ? "a" : "div";

  return (
    <div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      <Tag
        href={href}
        className={className}
        style={{
          transform: `translate(${offset.x}px, ${offset.y}px)`,
          transition: "transform 0.2s ease-out",
          display: "inline-flex",
        }}
      >
        {children}
      </Tag>
    </div>
  );
}
