"use client";

import { motion } from "framer-motion";

export default function HeroVisual() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
      {/* Large abstract gradient orb */}
      <motion.div
        className="relative w-[600px] h-[600px] md:w-[800px] md:h-[800px]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        {/* Main orb */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: "radial-gradient(ellipse at 30% 30%, rgba(255,59,48,0.25) 0%, rgba(175,82,222,0.1) 40%, transparent 70%)",
          }}
        />

        {/* Secondary orb */}
        <motion.div
          className="absolute inset-[15%] rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          style={{
            background: "radial-gradient(ellipse at 70% 60%, rgba(90,200,250,0.2) 0%, rgba(255,149,0,0.08) 40%, transparent 65%)",
          }}
        />

        {/* Inner glow core */}
        <motion.div
          className="absolute inset-[30%] rounded-full"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background: "radial-gradient(circle, rgba(255,59,48,0.3) 0%, rgba(255,149,0,0.15) 30%, transparent 60%)",
            filter: "blur(20px)",
          }}
        />

        {/* Floating ring 1 */}
        <motion.div
          className="absolute inset-[20%] rounded-full border border-[#ff3b30]/10"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />

        {/* Floating ring 2 */}
        <motion.div
          className="absolute inset-[35%] rounded-full border border-[#5ac8fa]/8"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        {/* Floating ring 3 */}
        <motion.div
          className="absolute inset-[10%] rounded-full border border-[#af52de]/5"
          animate={{ rotate: -360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        />

        {/* Accent dots orbiting */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute top-[10%] left-1/2 w-2 h-2 rounded-full bg-[#ff3b30] shadow-[0_0_10px_rgba(255,59,48,0.8)]" />
        </motion.div>

        <motion.div
          className="absolute inset-0"
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute bottom-[15%] right-[20%] w-1.5 h-1.5 rounded-full bg-[#5ac8fa] shadow-[0_0_8px_rgba(90,200,250,0.8)]" />
        </motion.div>

        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute top-[40%] left-[5%] w-1 h-1 rounded-full bg-[#af52de] shadow-[0_0_6px_rgba(175,82,222,0.8)]" />
        </motion.div>
      </motion.div>
    </div>
  );
}
