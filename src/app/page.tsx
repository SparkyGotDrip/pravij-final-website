"use client";

import { motion } from "motion/react";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Cpu,
  ChevronRight,
  Activity,
} from "lucide-react";

function HeroSection() {
  return (
    <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-zinc-50 flex flex-col items-center justify-center text-center">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 bg-white text-xs font-medium text-zinc-600 mb-8 tracking-wide shadow-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          Precision Manufacturing in India
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl font-medium text-zinc-900 tracking-tight leading-[1.1] mb-6"
        >
          Advanced safety systems for next-generation{" "}
          <span className="text-zinc-400 font-light">energy.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-zinc-500 font-light max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Manufacturing & supplying solar accessories for safe, efficient, and reliable solar systems. Providing complete electrical and earthing protection.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/products"
            className="w-full sm:w-auto px-7 py-3 rounded-full bg-black text-white font-medium text-sm hover:bg-black/90 transition-all flex items-center justify-center gap-2 shadow-sm shadow-green-600/30"
          >
            View products
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto px-7 py-3 rounded-full bg-white border border-zinc-200 text-zinc-900 font-medium text-sm hover:bg-zinc-50 transition-all flex items-center justify-center gap-2 shadow-sm group"
          >
            Speak to engineering{" "}
            <ArrowRight
              size={16}
              strokeWidth={1.5}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </motion.div>
      </div>

      {/* Subtle background abstract element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-blue-50/50 rounded-full blur-3xl -z-10 opacity-70" />
    </section>
  );
}

function HighlightSection() {
  const highlights = [
    {
      icon: <ShieldCheck size={20} strokeWidth={1.5} />,
      title: "Complete Solar Solutions",
      desc: "Providing complete electrical, earthing protection, and smart connectivity solutions for sustainable energy.",
    },
    {
      icon: <Cpu size={20} strokeWidth={1.5} />,
      title: "Advanced Manufacturing",
      desc: "Using advanced manufacturing technology with customer focus to deliver durable and high-quality products.",
    },
    {
      icon: <Activity size={20} strokeWidth={1.5} />,
      title: "Safety & Reliability",
      desc: "Delivering innovative and safe solutions built for efficiency, on-time delivery, and maximum peace of mind.",
    },
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col items-start"
            >
              <div className="w-10 h-10 rounded-lg bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-900 mb-5">
                {item.icon}
              </div>
              <h3 className="text-lg font-medium text-zinc-900 mb-3">
                {item.title}
              </h3>
              <p className="text-zinc-500 font-light text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MinimalProductPreview() {
  const categories = [
    {
      name: "Electrical Items",
      items: "MC4 Connectors, ACDB / DCDB, Earthing Kits",
      link: "/products",
      img: "/images/solar_connectors.png",
    },
    {
      name: "Structure Items",
      items: "Bolts, Base Plates, Rails, Fasteners",
      link: "/products",
      img: "/images/solar_mounts.png",
    },
    {
      name: "Cleaning Items",
      items: "Pressure Pumps, Sprinklers, Brushes",
      link: "/products",
      img: "/images/earthing_rods.png",
    },
  ];

  return (
    <section className="py-24 bg-zinc-50 border-y border-zinc-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="max-w-xl">
            <h2 className="text-3xl font-medium text-zinc-900 mb-4 tracking-tight">
              Purpose-built components.
            </h2>
            <p className="text-zinc-500 font-light text-lg">
              A comprehensive portfolio designed to protect and optimize
              critical infrastructure.
            </p>
          </div>
          <Link
            href="/products"
            className="text-sm font-medium text-green-600 hover:text-green-700 transition-colors flex items-center gap-1 group"
          >
            Browse full catalog{" "}
            <ChevronRight
              size={16}
              strokeWidth={1.5}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-zinc-200 mb-6">
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 saturate-50 mix-blend-multiply"
                />
              </div>
              <h3 className="text-xl font-medium text-zinc-900 mb-1">
                {cat.name}
              </h3>
              <p className="text-zinc-500 font-light text-sm">{cat.items}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechnicalSpecs() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-3xl font-medium text-zinc-900 mb-6 tracking-tight">
            Engineering excellence standard.
          </h2>
          <p className="text-zinc-500 font-light text-lg leading-relaxed mb-8">
            Our state-of-the-art facility in Ahmedabad utilizes advanced
            metallurgical processes and rigorous quality assurance protocols to
            deliver components that outlast industry baselines.
          </p>

          <div className="space-y-6">
            {[
              {
                label: "Tensile Strength Testing",
                val: "Continuous load verification",
              },
              {
                label: "Conductivity Audits",
                val: "99.9% pure copper bonding",
              },
              {
                label: "Environmental Stress",
                val: "Salt mist & corrosion chambers",
              },
            ].map((spec, i) => (
              <div
                key={i}
                className="flex flex-col py-3 border-b border-zinc-100 last:border-0"
              >
                <span className="text-sm font-medium text-zinc-900 mb-1">
                  {spec.label}
                </span>
                <span className="text-sm text-zinc-500 font-light">
                  {spec.val}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative rounded-2xl overflow-hidden aspect-square bg-zinc-100">
          <img
            src="/images/testing_lab.png"
            alt="Laboratory"
            className="w-full h-full object-cover saturate-50 opacity-90"
          />
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <HighlightSection />
      <MinimalProductPreview />
      <TechnicalSpecs />
    </main>
  );
}
