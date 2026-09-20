// src/components/About.tsx
"use client";

import { motion } from "framer-motion";

const SKILLS = [
  "Go (Golang)",
  "Bug Bounty Hunting",
  "Red Teaming",
  "C2 Frameworks",
  "Automation",
  "Linux / Bash",
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-terminal-bg px-4 md:px-8 border-t border-gray-800">
      <div className="max-w-4xl mx-auto">
        {/* عنوان بخش با حس دستور لینوکس */}
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-terminal-green font-mono mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-terminal-dim">{"$ cat "}</span>
          about.md
        </motion.h2>

        {/* کارت محتوا */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="bg-terminal-surface p-6 md:p-8 rounded-lg border border-gray-800 shadow-lg"
        >
        <p className="text-gray-300 leading-relaxed mb-6 text-lg">
          I&apos;m <span className="text-terminal-green font-bold">Mahyar</span>. 
          I believe security is not just about finding vulnerabilities—it&apos;s about 
          <span className="text-white font-semibold"> building systems that anticipate threats</span>, 
          <span className="text-white font-semibold"> automating what can be automated</span>, and 
          <span className="text-white font-semibold"> continuously learning and sharing knowledge</span>.
        </p>
        <p className="text-gray-400 leading-relaxed mb-4">
          Currently, I focus on bug bounty hunting and building advanced security tools with 
          <span className="text-terminal-green"> Go</span> and <span className="text-terminal-green">Python</span>. 
          My work includes automated reconnaissance utilities, C2 frameworks, and JWT security tools—all 
          designed for efficiency and scalability.
        </p>
        <p className="text-gray-500 leading-relaxed mb-8 text-sm">
          As I transition toward <span className="text-white font-semibold">Red Team operations</span>, 
          I&apos;m also developing expertise in security consulting and knowledge sharing. 
          My mission: <span className="text-terminal-green">making security accessible, scalable, and sustainable</span>—
          whether through code, research, or collaboration.
        </p>

          {/* بخش مهارت‌ها */}
          <div className="mt-8">
            <h3 className="text-xl font-bold text-white mb-4 font-mono">
              <span className="text-terminal-dim">{"// "}</span>Core Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {SKILLS.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  className="px-4 py-2 bg-terminal-bg border border-terminal-dim text-terminal-green rounded-md text-sm font-mono hover:bg-terminal-green hover:text-terminal-bg transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}