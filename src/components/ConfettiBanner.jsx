import React from 'react';
import { PartyPopper } from 'lucide-react';

const ConfettiBanner = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl border border-rose-100 bg-gradient-to-r from-rose-50 via-pink-50 to-yellow-50 p-6">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,182,193,0.35),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(173,216,230,0.35),transparent_35%),radial-gradient(circle_at_50%_90%,rgba(255,255,153,0.35),transparent_40%)]" />
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-xl bg-white/80 backdrop-blur flex items-center justify-center shadow">
                <PartyPopper className="h-6 w-6 text-rose-500" />
              </div>
              <div>
                <p className="text-sm font-medium text-rose-700">Confetti time!</p>
                <h4 className="text-lg font-semibold text-slate-800">Sebarkan kebahagiaan ke temanmu</h4>
              </div>
            </div>
            <a
              href="#hadiah"
              className="inline-flex items-center rounded-lg bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 font-semibold shadow-lg shadow-rose-400/30 transition-colors"
            >
              Kirim Sekarang
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConfettiBanner;
