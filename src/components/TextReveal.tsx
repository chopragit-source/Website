"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
}

export default function TextReveal({
  children,
  className = "",
  delay = 0,
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const words = children.split(" ");
    el.innerHTML = words
      .map((word) => `<span class="inline-block overflow-hidden mr-[0.3em]"><span class="inline-block" style="transform: translateY(100%)">${word}</span></span>`)
      .join("");

    const spans = el.querySelectorAll("span > span");

    gsap.to(spans, {
      y: 0,
      duration: 1,
      stagger: 0.05,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === el) trigger.kill();
      });
    };
  }, [children, delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
