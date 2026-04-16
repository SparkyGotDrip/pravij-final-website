"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { catalog } from "@/data/products";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...catalog.map((c) => c.category)];

  const filteredCatalog =
    activeCategory === "All"
      ? catalog
      : catalog.filter((c) => c.category === activeCategory);

  return (
    <main className="min-h-screen bg-zinc-50">
      <section className="pt-48 pb-20 bg-white border-b border-zinc-100 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1">
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-medium text-zinc-900 tracking-tight leading-tight mb-6"
              >
                Product catalog.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-xl font-light text-zinc-500 max-w-xl leading-relaxed"
              >
                A precise inventory of industrial-grade components. Manufactured
                to precise tolerances for total reliability.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1 w-full max-w-lg mx-auto aspect-4/3 md:aspect-square rounded-2xl overflow-hidden border border-zinc-100 shadow-sm"
            >
              <img
                src="/images/products_hero.png"
                alt="Electrical Components Overview"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="pt-12 pb-8 border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 cursor-pointer py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
                    : "bg-white text-zinc-600 hover:bg-zinc-50 border border-zinc-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="space-y-28"
            >
              {filteredCatalog.map((cat) => (
                <div key={cat.category}>
                  <div className="mb-12 pb-6 border-b border-zinc-200">
                    <h2 className="text-3xl font-medium text-zinc-900 mb-3 tracking-tight">
                      {cat.category}
                    </h2>
                    <p className="text-zinc-500 font-light text-lg">
                      {cat.description}
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
                    {cat.items.map((item, i) => (
                      <Link
                        key={i}
                        href={`/products/${item.id}`}
                        className="group flex flex-col items-start cursor-pointer transition-opacity hover:opacity-80"
                      >
                        <div className="w-full aspect-square rounded-xl bg-zinc-100 mb-5 overflow-hidden border border-zinc-100 inline-block">
                          <img
                            src={item.img}
                            alt={item.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                          />
                        </div>
                        <h3 className="text-base font-medium text-zinc-900 mb-1.5">
                          {item.name}
                        </h3>
                        <p className="text-sm font-light text-zinc-500 leading-relaxed">
                          {item.spec}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

    </main>
  );
}
