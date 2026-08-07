"use client";

import dynamic from "next/dynamic";

const HeroParticles = dynamic(() => import("@/components/HeroParticles"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-black" />,
});

export default function HeroParticlesWrapper() {
  return <HeroParticles />;
}
