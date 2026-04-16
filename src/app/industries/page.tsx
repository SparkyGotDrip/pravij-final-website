'use client';

import { motion } from 'motion/react';
import {
  TowerControl,
  Lightbulb,
  Factory,
  Ship,
  Pill,
  Cpu,
  FlaskConical,
  Home,
  Flame,
  Sun,
  Sofa,
  Train,
  Box
} from 'lucide-react';

const highlights = [
  { icon: Sun, name: "Utility-Scale Solar Farms" },
  { icon: TowerControl, name: "Electrical Transmission" },
  { icon: Factory, name: "Heavy Manufacturing" },
];

const industries = [
  { name: "Electrical towers", icon: TowerControl },
  { name: "Lighting industries", icon: Lightbulb },
  { name: "Structural plants", icon: Factory },
  { name: "Marine / swimming pool", icon: Ship },
  { name: "Pharmaceutical machinery", icon: Pill },
  { name: "Electrical & electronics", icon: Cpu },
  { name: "Chemical machinery", icon: FlaskConical },
  { name: "Home appliances & kitchenware", icon: Home },
  { name: "Roofing / refineries", icon: Flame },
  { name: "Furnaces", icon: Flame },
  { name: "Solar structure", icon: Sun },
  { name: "Furniture & interiors", icon: Sofa },
  { name: "Railway / metro", icon: Train },
  { name: "Engineering panel / junction box", icon: Box }
];

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-zinc-50">

      {/* Hero */}
      <section className="pt-48 pb-24 bg-white border-b border-zinc-100 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-medium text-zinc-900 mb-6"
          >
            Sectors we support.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl font-light text-zinc-500 max-w-2xl mx-auto"
          >
            Our components are universally applicable wherever electrical safety and structural integrity are critical.
          </motion.p>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">

          <div className="grid md:grid-cols-3 gap-8 mb-20 text-center">
            {highlights.map((h, i) => {
              const Icon = h.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-2xl border border-zinc-200 bg-white hover:shadow-md transition flex flex-col items-center"
                >
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl mb-6 bg-green-100 group-hover:bg-green-600 transition">
                    <Icon className="w-7 h-7 text-green-600 group-hover:text-white transition" />
                  </div>

                  <h3 className="text-lg font-medium text-zinc-900">
                    {h.name}
                  </h3>
                </motion.div>
              );
            })}
          </div>

          {/* Industries */}
          <div className="border-t border-zinc-200 pt-20 text-center">
            <h2 className="text-2xl font-medium text-zinc-900 mb-10">
              Additional Verticals
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {industries.map((ind, i) => {
                const Icon = ind.icon;

                return (
                  <div
                    key={i}
                    className="h-full p-6 rounded-xl border border-zinc-200 bg-white hover:shadow-md transition flex flex-col items-center justify-center text-center group min-h-[140px]"
                  >
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg mb-4 bg-green-100 group-hover:bg-green-600 transition">
                      <Icon className="w-6 h-6 text-green-600 group-hover:text-white transition" />
                    </div>

                    <h3 className="text-sm font-medium text-zinc-900 leading-snug">
                      {ind.name}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}