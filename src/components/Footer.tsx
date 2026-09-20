// src/components/Footer.tsx
import { SITE_CONFIG } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-terminal-bg border-t border-gray-800 py-8 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-500 text-sm font-mono">
          <span className="text-terminal-dim">{"// "}</span>
          © {currentYear} {SITE_CONFIG.name}. All rights reserved.
        </p>
        <p className="text-gray-600 text-xs font-mono mt-2">
          Built with Next.js, TypeScript, and Tailwind CSS
        </p>
      </div>
    </footer>
  );
}