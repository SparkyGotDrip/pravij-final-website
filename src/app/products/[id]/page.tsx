import { getProductById } from "@/data/products";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-zinc-50 pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <Link
          href="/products"
          className="inline-flex items-center text-zinc-500 hover:text-zinc-900 transition-colors mb-8 text-sm font-medium"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Products
        </Link>
        
        <div className="bg-white rounded-3xl shadow-sm border border-zinc-100 overflow-hidden">
          <div className="aspect-video relative bg-zinc-100">
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-medium text-zinc-900 mb-3 tracking-tight">
              {product.name}
            </h1>
            <p className="text-lg font-medium text-emerald-600 mb-6">
              {product.spec}
            </p>
            <p className="text-zinc-600 font-light text-lg leading-relaxed mb-10 max-w-3xl">
              {product.desc}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="flex-1 sm:flex-none px-8 py-3.5 bg-zinc-900 text-white font-medium rounded-xl hover:bg-zinc-800 transition-colors text-center shadow-sm"
              >
                Request a Quote
              </a>
              <a
                href="mailto:contact@pravij.com?subject=Inquiry for ${product.name}"
                className="flex-1 sm:flex-none px-8 py-3.5 bg-zinc-50 text-zinc-900 border border-zinc-200 font-medium rounded-xl hover:bg-zinc-100 transition-colors text-center"
              >
                Email Sales
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
