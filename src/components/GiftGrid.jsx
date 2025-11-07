import React from 'react';
import { Gift, Ribbon, Heart } from 'lucide-react';

const gifts = [
  {
    id: 1,
    title: 'Kotak Hadiah Pastel',
    desc: 'Kotak warna biru muda dengan pita pink besar.',
    color: 'from-blue-100 to-blue-50',
    icon: Gift,
  },
  {
    id: 2,
    title: 'Pita Besar',
    desc: 'Pita pita menggemaskan nuansa pink dan peach.',
    color: 'from-pink-100 to-rose-50',
    icon: Ribbon,
  },
  {
    id: 3,
    title: 'Kejutan Manis',
    desc: 'Isi ucapan spesial dan stiker lucu.',
    color: 'from-yellow-100 to-amber-50',
    icon: Heart,
  },
];

const GiftCard = ({ item }) => {
  const Icon = item.icon;
  return (
    <div className="group relative rounded-2xl bg-gradient-to-br p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-white/60">
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.color} opacity-70`} />
      <div className="relative z-10">
        <div className="flex items-center gap-3">
          <div className="h-11 w-11 rounded-xl bg-white/80 backdrop-blur flex items-center justify-center shadow">
            <Icon className="h-6 w-6 text-slate-700" />
          </div>
          <h3 className="text-lg font-semibold text-slate-800">{item.title}</h3>
        </div>
        <p className="mt-3 text-slate-600">{item.desc}</p>
      </div>
    </div>
  );
};

const GiftGrid = () => {
  return (
    <section id="hadiah" className="bg-white py-14">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 text-center">Pilihan Hadiah Virtual</h2>
        <p className="mt-2 text-slate-600 text-center max-w-2xl mx-auto">
          Pilih gaya hadiah yang kamu suka. Semuanya bernuansa pastel, cerah, dan menggemaskan.
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {gifts.map((g) => (
            <GiftCard key={g.id} item={g} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GiftGrid;
