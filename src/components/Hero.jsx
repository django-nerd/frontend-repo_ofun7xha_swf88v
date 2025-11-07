import React from 'react';
import Spline from '@splinetool/react-spline';
import { PartyPopper, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full h-[70vh] sm:h-[80vh] bg-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/pVLJXSVq3zyQq0OD/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft light overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/80" />

      <div className="relative z-10 h-full container mx-auto px-4 flex items-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-pink-50 text-pink-700 px-3 py-1 text-sm font-medium shadow-sm">
            <Sparkles className="h-4 w-4" />
            Hadiah Digital Ulang Tahun
          </div>
          <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold leading-tight text-slate-800">
            Rayakan momen spesial dengan hadiah virtual yang lucu dan ceria
          </h1>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Kotak hadiah warna-warni, balon mengambang, kue dengan lilin, dan confetti — semua dalam gaya kartun pastel yang hangat.
          </p>
          <div className="mt-6 inline-flex items-center gap-3">
            <a
              href="#hadiah"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 font-semibold shadow-lg shadow-blue-500/20 transition-colors"
            >
              <PartyPopper className="h-5 w-5" />
              Kirim Hadiah
            </a>
            <a
              href="#kue"
              className="inline-flex items-center gap-2 rounded-lg bg-white text-slate-700 px-5 py-3 font-semibold shadow hover:shadow-md"
            >
              Lihat Kue
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
