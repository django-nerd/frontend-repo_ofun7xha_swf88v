import React from 'react';
import { Candle, Cake } from 'lucide-react';

const BirthdayCake = () => {
  return (
    <section id="kue" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="rounded-3xl border border-blue-100 bg-gradient-to-b from-blue-50 to-white p-8 relative overflow-hidden">
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-pink-100 blur-3xl opacity-60" />
          <div className="absolute -left-10 -bottom-10 h-48 w-48 rounded-full bg-yellow-100 blur-3xl opacity-60" />
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-yellow-50 text-yellow-700 px-3 py-1 text-sm font-medium shadow-sm">
                <Candle className="h-4 w-4" />
                Tiup lilin dan buat harapan
              </div>
              <h3 className="mt-4 text-2xl sm:text-3xl font-bold text-slate-800">
                Kue Ulang Tahun Pastel yang Manis
              </h3>
              <p className="mt-3 text-slate-600">
                Kue dua tingkat dengan krim lembut dan lilin berkilau. Desain kartun yang lucu dan cerah, cocok untuk layar interface.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full bg-pink-100 text-pink-700 px-3 py-1 text-sm">Pink Lembut</span>
                <span className="rounded-full bg-blue-100 text-blue-700 px-3 py-1 text-sm">Biru Muda</span>
                <span className="rounded-full bg-yellow-100 text-yellow-700 px-3 py-1 text-sm">Kuning Pastel</span>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 -z-0 rounded-3xl bg-pink-200/40 blur-2xl" />
                <div className="mx-auto h-44 w-44 sm:h-56 sm:w-56 rounded-3xl bg-white shadow-xl border border-slate-100 flex items-center justify-center">
                  <Cake className="h-20 w-20 sm:h-24 sm:w-24 text-pink-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BirthdayCake;
