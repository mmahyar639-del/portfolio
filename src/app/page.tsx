// src/app/page.tsx
// src/app/page.tsx
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Social from "@/components/Social";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-terminal-bg min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Social />
      <Footer />
    </main>
  );
}
