import React from 'react';
import { Navbar, Footer } from './components/Layout';
import { Hero } from './components/Hero';
import { Diagnostics } from './components/Diagnostics';
import { Protocols } from './components/Protocols';
import { Methodology } from './components/Methodology';
import { Authority } from './components/Authority';
import { Bio } from './components/Bio';

function App() {
  return (
    <div className="font-sans selection:bg-brand-cta selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Diagnostics />
        <Protocols />
        <Methodology />
        <Authority />
        <Bio />
      </main>
      <Footer />
    </div>
  );
}

export default App;