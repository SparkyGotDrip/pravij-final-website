'use client';

import { motion } from 'motion/react';

const certifications = [
  {
    code: 'ISO 9001:2015',
    full: 'Quality Management Systems',
    desc: 'Verifies that our engineering, manufacturing, and QA/QC processes adhere to globally recognized standards for consistency and defect reduction.',
  },
  {
    code: 'IEC 62561',
    full: 'Lightning Protection Systems',
    desc: 'Ensures that our lightning protection hardware safely and effectively manages high-voltage atmospheric discharges without structural failure.',
  },
  {
    code: 'RoHS Directive',
    full: 'Restriction of Hazardous Substances',
    desc: 'Confirms our products are manufactured completely free of specific hazardous materials found in electrical products, ensuring environmental safety.',
  },
  {
    code: 'TUV Validation',
    full: 'For Solar Extension Cables',
    desc: 'Independent validation guaranteeing thermal, mechanical, and electrical durability over the 25-year operational lifespan of a solar installation.',
  }
];

export default function CertificationsPage() {
  return (
    <main className="min-h-screen bg-zinc-50">
      <section className="pt-48 pb-20 bg-white border-b border-zinc-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1">
              <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-medium text-zinc-900 tracking-tight leading-tight mb-6">
                Standards & compliance.
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
                className="text-xl font-light text-zinc-500 max-w-xl leading-relaxed">
                Our commitment to engineering integrity is validated by leading international certification bodies. 
              </motion.p>
            </div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} 
              className="flex-1 w-full aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-100 shadow-sm">
              <img src="/images/certification_hero.png" alt="Lab Inspector" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 space-y-24">
          
          <div className="grid md:grid-cols-2 gap-12">
            {certifications.map((cert, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 bg-white rounded-2xl border border-zinc-100 shadow-sm hover:border-zinc-300 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <span className="inline-block px-3 py-1 bg-green-600/10 text-green-700 border border-green-600/20 text-xs font-semibold rounded tracking-wider">
                    {cert.code}
                  </span>
                </div>
                <h3 className="text-xl font-medium text-zinc-900 mb-2">{cert.full}</h3>
                <p className="text-zinc-500 font-light text-sm leading-relaxed">{cert.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="border-t border-zinc-200 pt-20 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-medium text-zinc-900 mb-6 tracking-tight">Internal testing protocols</h2>
              <p className="text-zinc-500 font-light leading-relaxed mb-8 text-lg">
                Beyond external certifications, our Ahmedabad testing facility conducts continuous batch testing to ensure 0% deviation from optimal technical specifications.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Short Circuit & Load Testing",
                  "Spectroscopic Material Analysis",
                  "Salt-Mist Corrosion Checking",
                  "Pull & Tensile Strength Verification",
                  "Dielectric Breakdown Audits",
                  "Ingress Protection (IP) Checks"
                ].map((test, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-white border border-zinc-100 rounded-lg">
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-300"></div>
                    <span className="text-sm text-zinc-700 font-medium">{test}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="w-full aspect-square rounded-2xl bg-white border border-zinc-100 shadow-sm overflow-hidden flex items-center justify-center p-12">
               <img src="/images/quality_assurance.png" alt="QA Emblem" className="w-full h-full object-contain" />
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}
