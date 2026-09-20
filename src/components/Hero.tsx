// src/components/Hero.tsx
"use client";

import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-terminal-bg text-terminal-green font-mono px-4 relative overflow-hidden">
      
      {/* ✅ اصلاح شد: فاصله بعد از کاما حذف شد */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-terminal-surface/20 to-transparent pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center z-10"
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <span className="text-terminal-dim">{"root@portfolio:~$ "}</span>
          <span className="text-terminal-green">{SITE_CONFIG.name}</span>
          
          {/* ✅ اصلاح شد: استفاده از animate-blink تعریف شده در Tailwind به جای ease: steps */}
          <span className="inline-block w-3 h-8 bg-terminal-green ml-1 align-middle animate-blink" />
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          {SITE_CONFIG.title}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <a 
            href="#projects"
            className="group relative inline-flex items-center gap-2 px-8 py-3 border border-terminal-green text-terminal-green hover:bg-terminal-green hover:text-terminal-bg transition-all duration-300 rounded-md font-semibold"
          >
            <span>Explore Projects</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}