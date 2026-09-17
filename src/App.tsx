import { useCursorGlow } from '@/hooks/useCursorGlow';
import { BackgroundGrid } from '@/components/BackgroundGrid';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { IdentityMap } from '@/components/IdentityMap';
import { About } from '@/components/About';
import { Ventures } from '@/components/Ventures';
import { Projects } from '@/components/Projects';
import { Security } from '@/components/Security';
import { Creative } from '@/components/Creative';
import { ProblemSolving } from '@/components/ProblemSolving';
import { Lab } from '@/components/Lab';
import { Journal } from '@/components/Journal';
import { Contact } from '@/components/Contact';

function App() {
  const { x, y, visible } = useCursorGlow();

  return (
    <div className="relative min-h-screen bg-ink-950 text-warm">
      {/* Cursor glow (desktop only) */}
      {visible && (
        <div
          className="cursor-glow hidden lg:block"
          style={{ left: x, top: y }}
          aria-hidden="true"
        />
      )}

      {/* Background */}
      <BackgroundGrid />

      {/* Navigation */}
      <Navigation />

      {/* Sections */}
      <main className="relative z-10">
        <Hero />
        <IdentityMap />
        <About />
        <Ventures />
        <Projects />
        <Security />
        <Creative />
        <ProblemSolving />
        <Lab />
        <Journal />
        <Contact />
      </main>
    </div>
  );
}

export default App;
