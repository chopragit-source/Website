"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  className?: string;
  distance?: number;
  duration?: number;
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
  distance = 100,
  duration = 1.4,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const directionOffset = {
      up: { y: distance, x: 0 },
      left: { y: 0, x: -distance },
      right: { y: 0, x: distance },
      none: { y: 0, x: 0 },
    };

    gsap.set(el, {
      opacity: 0,
      y: directionOffset[direction].y,
      x: directionOffset[direction].x,
    });

    gsap.to(el, {
      opacity: 1,
      y: 0,
      x: 0,
      duration,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 88%",
        end: "top 20%",
        toggleActions: "play none none none",
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === el) trigger.kill();
      });
    };
  }, [delay, direction, distance, duration]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
