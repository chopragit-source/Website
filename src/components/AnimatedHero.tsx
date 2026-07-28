"use client";

import { useEffect, useRef } from "react";

export default function AnimatedHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let animationId = 0;
    let time = 0;

    function resize() {
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx!.scale(dpr, dpr);
    }

    function draw() {
      if (!ctx) return;
      const w = window.innerWidth;
      const h = window.innerHeight;

      ctx.clearRect(0, 0, w, h);
      time += 0.005;

      // Draw flowing curves
      for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(255, 59, 48, ${0.03 + i * 0.01})`;
        ctx.lineWidth = 1.5;

        for (let x = 0; x < w; x += 3) {
          const y =
            h / 2 +
            Math.sin(x * 0.003 + time + i * 0.8) * (100 + i * 30) +
            Math.cos(x * 0.005 + time * 1.3 + i) * (50 + i * 20);
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      // Blue flowing curves
      for (let i = 0; i < 4; i++) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(90, 200, 250, ${0.02 + i * 0.008})`;
        ctx.lineWidth = 1;

        for (let x = 0; x < w; x += 3) {
          const y =
            h / 2 +
            Math.sin(x * 0.004 + time * 0.8 + i * 1.2 + 2) * (80 + i * 25) +
            Math.cos(x * 0.002 + time * 1.1 + i * 0.5) * (60 + i * 15);
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      // Floating particles
      for (let i = 0; i < 30; i++) {
        const x = ((i * 137.5 + time * 20) % w);
        const y = ((i * 89.3 + Math.sin(time + i) * 50) % h);
        const size = 1 + Math.sin(time * 2 + i) * 0.5;
        const opacity = 0.2 + Math.sin(time + i * 0.5) * 0.15;

        ctx.fillStyle = i % 2 === 0
          ? `rgba(255, 59, 48, ${opacity})`
          : `rgba(90, 200, 250, ${opacity})`;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!prefersReducedMotion) {
        animationId = requestAnimationFrame(draw);
      }
    }

    resize();
    draw();

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        opacity: 0.7,
        pointerEvents: "none",
      }}
    />
  );
}
