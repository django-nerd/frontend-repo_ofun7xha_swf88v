import React from 'react';
import Hero from './components/Hero';
import GiftGrid from './components/GiftGrid';
import BirthdayCake from './components/BirthdayCake';
import ConfettiBanner from './components/ConfettiBanner';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Hero />
      <GiftGrid />
      <BirthdayCake />
      <ConfettiBanner />
      <footer className="py-10 text-center text-slate-500">
        Dibuat dengan penuh keceriaan untuk merayakan hari spesialmu.
      </footer>
    </div>
  );
}

export default App;
