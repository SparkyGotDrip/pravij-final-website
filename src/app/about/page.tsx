'use client';

import { motion } from 'motion/react';

export default function AboutPage() {
  const principles = [
    { title: 'Vision', text: 'To become a leading & trusted brand, delivering innovative, reliable, high-performance products that support a sustainable energy future.' },
    { title: 'Mission', text: 'To manufacture durable, high-quality products and provide complete electrical & earthing protection while maintaining quality, reliability, and timely delivery.' },
    { title: 'Why Choose Us', text: 'Advanced manufacturing, high-quality products, timely delivery, advanced technology, complete solar solutions, safety & reliability, and customer commitment.' }
  ];

  return (
    <main className="min-h-screen bg-zinc-50">
      <section className="pt-48 pb-24 bg-white border-b border-zinc-100">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-xs font-medium text-zinc-400 uppercase tracking-widest mb-6">
            Company Profile
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-medium text-zinc-900 tracking-tight leading-tight mb-8">
            Engineering safety at scale.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl font-light text-zinc-500 leading-relaxed max-w-2xl">
            Pravij Earthing Technologies manufactures and supplies solar accessories with a focus on safe, efficient, and reliable solar systems for the infrastructure sector.
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-medium text-zinc-900 mb-6 tracking-tight">Our Focus</h2>
              <p className="text-zinc-500 font-light leading-relaxed mb-6">
                From our facility in Ahmedabad, we focus on safe, efficient, and reliable solar systems. We provide connectivity solutions, protection systems, and comprehensive earthing solutions for sustainable energy.
              </p>
              <p className="text-zinc-500 font-light leading-relaxed">
                Our main product line includes MC4 Connectors, Branch Connectors, ACDB/DCDB Panels, DC & LA Cables, Isolation Switches, and complete Solar Earthing Kits, setting standards for safety and reliability.
              </p>
            </div>
            
            <div className="space-y-12">
              {principles.map((item, idx) => (
                <div key={idx} className="border-l border-zinc-200 pl-6">
                  <h3 className="text-sm font-medium text-zinc-900 mb-2">{item.title}</h3>
                  <p className="text-zinc-500 font-light text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white border-t border-zinc-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-zinc-100 border-y border-zinc-100 py-12">
            {[
              { stat: "15+", label: "Years active" },
              { stat: "ISO", label: "9001:2015" },
              { stat: "16+", label: "Industrial verticals" },
              { stat: "Zero", label: "Compromises" }
            ].map((s, i) => (
              <div key={i} className="px-6 text-center md:text-left">
                <div className="text-2xl md:text-4xl font-light text-zinc-900 tracking-tight mb-2">{s.stat}</div>
                <div className="text-xs font-medium text-zinc-400 uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
