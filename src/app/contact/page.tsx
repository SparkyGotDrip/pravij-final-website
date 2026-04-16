'use client';

import { motion } from 'motion/react';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-zinc-50">
      <section className="pt-48 pb-20 bg-white border-b border-zinc-100">
        <div className="max-w-5xl mx-auto px-4">
          <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-medium text-zinc-900 tracking-tight leading-tight mb-6">
            Contact our team.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl font-light text-zinc-500 max-w-2xl">
            For technical specifications, bulk procurement, or general inquiries.
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            
            <div className="space-y-12">
              <div>
                <h3 className="text-sm font-medium text-zinc-900 mb-2">Corporate Headquarters & Manufacturing</h3>
                <p className="text-zinc-500 font-light text-sm leading-relaxed mb-4">
                  Shed 46, Vishala Platinum Industrial Estate<br/>
                  Odhav – 382415<br/>
                  Gujarat, India
                </p>
                <div className="aspect-4/3 bg-zinc-200 rounded-xl overflow-hidden grayscale opacity-70 border border-zinc-100">
                  <img src="/images/industrial_map.png" alt="Map Location" className="w-full h-full object-cover" />
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-zinc-900 mb-2">Direct Contact</h3>
                <div className="flex flex-col gap-2">
                  <span className="text-zinc-500 font-light text-sm">+91 98984 04514</span>
                  <span className="text-zinc-500 font-light text-sm">+91 98984 04574</span>
                  <a href="http://www.pravijearthing.com" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-emerald-600 font-light text-sm transition-colors mt-2 block">www.pravijearthing.com</a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-zinc-900 mb-2 block tracking-wide">First name</label>
                    <input type="text" className="w-full bg-zinc-50 border border-zinc-200 text-zinc-900 px-4 py-2.5 rounded-lg text-sm focus:outline-none focus:border-zinc-400 focus:bg-white transition-colors" />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-zinc-900 mb-2 block tracking-wide">Last name</label>
                    <input type="text" className="w-full bg-zinc-50 border border-zinc-200 text-zinc-900 px-4 py-2.5 rounded-lg text-sm focus:outline-none focus:border-zinc-400 focus:bg-white transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-medium text-zinc-900 mb-2 block tracking-wide">Work email</label>
                  <input type="email" className="w-full bg-zinc-50 border border-zinc-200 text-zinc-900 px-4 py-2.5 rounded-lg text-sm focus:outline-none focus:border-zinc-400 focus:bg-white transition-colors" />
                </div>
                <div>
                  <label className="text-xs font-medium text-zinc-900 mb-2 block tracking-wide">Inquiry type</label>
                  <select className="w-full bg-zinc-50 border border-zinc-200 text-zinc-900 px-4 py-2.5 rounded-lg text-sm focus:outline-none focus:border-zinc-400 focus:bg-white transition-colors appearance-none">
                    <option>Product pricing</option>
                    <option>Technical specifications</option>
                    <option>Partnership</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-medium text-zinc-900 mb-2 block tracking-wide">Message</label>
                  <textarea rows={4} className="w-full bg-zinc-50 border border-zinc-200 text-zinc-900 px-4 py-3 rounded-lg text-sm focus:outline-none focus:border-zinc-400 focus:bg-white transition-colors resize-none"></textarea>
                </div>
                <button className="w-full bg-zinc-900 text-white font-medium text-sm py-3 rounded-lg hover:bg-zinc-800 transition-colors">
                  Submit inquiry
                </button>
              </form>
            </div>
            
          </div>
        </div>
      </section>
    </main>
  );
}
