'use client';

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { FileText, X, Search, ChevronRight } from "lucide-react";
import { catalog } from "@/data/products";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("Earthing Products");
  const [searchQuery, setSearchQuery] = useState("");
  const [activePdf, setActivePdf] = useState<string | null>(null);

  const categories = catalog.map((c) => c.category);

  // Find active category object
  const activeCatObj = catalog.find((c) => c.category === activeCategory) || catalog[0];

  // Filter items by search query
  const filteredItems = activeCatObj.items.filter((item) => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    item.spec.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // 🔒 Disable scroll when modal open
  useEffect(() => {
    document.body.style.overflow = activePdf ? "hidden" : "auto";
  }, [activePdf]);

  return (
    <main className="min-h-screen bg-zinc-50 font-sans pb-24">

      {/* Hero Section */}
      <section className="pt-40 pb-16 bg-white border-b border-zinc-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            
            {/* Left Content */}
            <div className="flex-1 w-full pt-8">
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
                className="text-lg md:text-xl font-light text-zinc-500 max-w-xl leading-relaxed mb-8"
              >
                A complete inventory of industrial-grade Earthing protection and structural components. Manufactured to precise tolerances for total reliability.
              </motion.p>

              {/* 🔥 PDF Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-wrap gap-4"
              >
                <button
                  onClick={() => setActivePdf("/files/Brochure.pdf")}
                  className="px-6 py-3 cursor-pointer rounded-full bg-emerald-600 text-white text-sm font-medium flex items-center gap-2 
                  transition-all duration-300 hover:bg-emerald-700 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-600/30"
                >
                  <FileText size={16} />
                  Brochure
                </button>

                <button
                  onClick={() => setActivePdf("/files/earthing-materials.pdf")}
                  className="px-6 py-3 cursor-pointer rounded-full bg-emerald-600 text-white text-sm font-medium flex items-center gap-2 
                  transition-all duration-300 hover:bg-emerald-700 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-600/30"
                >
                  <FileText size={16} />
                  Earthing Details
                </button>
              </motion.div>
            </div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1 w-full max-w-xl mx-auto aspect-[16/10] md:aspect-square rounded-3xl overflow-hidden border border-zinc-100 shadow-sm"
            >
              <img
                src="/images/products_hero.png"
                alt="Earthing Components Overview"
                className="w-full h-full object-cover"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* Main Catalog Section */}
      <section className="pt-16 max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          
          {/* Sidebar Area */}
          <aside className="w-full lg:w-1/4 flex-shrink-0 lg:sticky lg:top-28 space-y-10">
            {/* Search filter */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-full border border-zinc-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500/50 text-sm transition-all text-zinc-800 placeholder:text-zinc-400"
              />
            </div>

            {/* Nav Menu */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4 px-3">
                Categories
              </h3>
              <nav className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 scrollbar-hide">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setActiveCategory(cat);
                      setSearchQuery("");
                    }}
                    className={`flex items-center justify-between px-4 py-3 rounded-2xl transition-all duration-200 text-left whitespace-nowrap lg:whitespace-normal ${
                      activeCategory === cat
                        ? "bg-emerald-50 text-emerald-700 shadow-inner ring-1 ring-emerald-500/10"
                        : "text-zinc-600 hover:bg-white hover:shadow hover:text-zinc-900 border border-transparent hover:border-zinc-200/60"
                    }`}
                  >
                    <span className="font-semibold text-sm">{cat}</span>
                    {activeCategory === cat && <ChevronRight size={16} className="text-emerald-600 hidden lg:block" />}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Grid Area */}
          <div className="flex-1 w-full relative min-h-[600px]">
             
             {/* Category Header */}
            <div className="mb-10 pb-6 border-b border-zinc-200/70 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <motion.h2
                  key={activeCatObj.category}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-3xl font-semibold text-zinc-900 mb-3 tracking-snug"
                >
                  {activeCatObj.category}
                </motion.h2>
                <p className="text-zinc-500 font-medium text-base max-w-2xl leading-relaxed">
                  {activeCatObj.description}
                </p>
              </div>
              <div className="text-xs text-zinc-500 font-bold tracking-widest uppercase bg-zinc-200/50 px-3 py-1.5 rounded-full whitespace-nowrap hidden md:block border border-zinc-200/80 shadow-inner">
                {filteredItems.length} Product{filteredItems.length !== 1 ? 's' : ''}
              </div>
            </div>

            {/* Product Rendering */}
            <AnimatePresence mode="wait">
              {filteredItems.length > 0 ? (
                <motion.div
                  key="grid"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 sm:gap-x-6 gap-y-10"
                >
                  {filteredItems.map((item, i) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.03, duration: 0.4 }}
                    >
                      <Link
                        href={`/products/${item.id}`}
                        className="group flex flex-col h-full items-start transition-opacity cursor-pointer"
                      >
                        <div className="w-full aspect-square rounded-3xl bg-zinc-100 mb-4 overflow-hidden shadow-[inset_0_0_0_1px_rgba(0,0,0,0.04)] relative">
                          <img
                            src={item.img}
                            alt={item.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-emerald-900/0 group-hover:bg-emerald-900/5 transition-colors duration-500" />
                        </div>
                        <h3 className="text-[15px] font-bold text-zinc-800 mb-1 leading-snug group-hover:text-emerald-700 transition-colors">
                          {item.name}
                        </h3>
                        <p className="text-sm font-medium text-zinc-500 line-clamp-2 leading-relaxed">
                          {item.spec}
                        </p>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-32 text-center"
                >
                  <div className="w-20 h-20 bg-white shadow-sm ring-1 ring-zinc-200/50 rounded-full flex items-center justify-center mx-auto mb-6 text-zinc-300">
                    <Search size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-zinc-800 mb-2">No matches found</h3>
                  <p className="text-zinc-500 font-medium text-base">We couldn't find anything for "{searchQuery}" in {activeCategory}.</p>
                  <button 
                    onClick={() => setSearchQuery("")}
                    className="mt-6 px-6 py-2 bg-zinc-100 hover:bg-zinc-200 text-zinc-700 text-sm font-bold rounded-full transition-colors"
                  >
                    Clear search
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>
      </section>

      {/* PDF MODAL */}
      <AnimatePresence>
        {activePdf && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 lg:p-10"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="relative w-full max-w-6xl h-[85vh] bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10"
            >
              {/* Header inside modal */}
              <div className="absolute top-0 inset-x-0 h-14 bg-zinc-900 flex items-center justify-end px-4 z-10 border-b border-white/5">
                <button
                  onClick={() => setActivePdf(null)}
                  className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* PDF Viewer */}
              <div className="w-full h-full pt-14 bg-white">
                <iframe
                  src={activePdf}
                  className="w-full h-full"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}