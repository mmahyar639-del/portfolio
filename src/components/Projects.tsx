// src/components/Projects.tsx
"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/constants";

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-terminal-bg px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* عنوان بخش */}
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-terminal-green font-mono mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-terminal-dim">{"// "}</span>
          Featured Projects
        </motion.h2>

        {/* گرید کارت‌ها */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project, index) => (
            <motion.a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer" // 🔐 نکته امنیتی: جلوگیری از Tabnabbing
              className="group block p-6 bg-terminal-surface border border-gray-800 rounded-lg hover:border-terminal-green transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,65,0.1)]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* نام پروژه و آیکون لینک */}
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-terminal-green transition-colors">
                  {project.name}
                </h3>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 text-gray-500 group-hover:text-terminal-green transition-colors" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>

              {/* توضیحات */}
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* تگ‌های تکنولوژی */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="px-3 py-1 text-xs font-mono text-terminal-dim bg-terminal-bg border border-gray-800 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}