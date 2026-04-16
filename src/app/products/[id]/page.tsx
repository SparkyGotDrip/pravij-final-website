import { getProductById } from "@/data/products";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

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
        
        <div className="bg-white rounded-3xl shadow-sm border border-zinc-100 overflow-hidden mb-12">
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
            
            {product.details && product.details.length > 0 && (
              <div className="mt-12 space-y-16 border-t border-zinc-100 pt-12">
                {product.details.map((detail, index) => (
                  <div key={index} className="space-y-6">
                    {detail.title && (
                      <h3 className="text-xl font-medium text-zinc-900 tracking-tight">
                        {detail.title}
                      </h3>
                    )}

                    {/* Parameters Grid */}
                    {detail.type === "parameters" && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {detail.data.map((param, i) => (
                          <div
                            key={i}
                            className="bg-zinc-50 rounded-xl p-4 border border-zinc-100 flex flex-col justify-center"
                          >
                            <span className="text-xs font-medium text-zinc-400 uppercase tracking-wider mb-1">
                              {param.label}
                            </span>
                            <span className="text-sm font-medium text-zinc-800">
                              {param.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Feature / Component List */}
                    {detail.type === "list" && (
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                        {detail.items.map((item, i) => (
                          <li key={i} className="flex items-start text-zinc-700">
                            <CheckCircle2
                              size={20}
                              className="text-emerald-500 mr-3 shrink-0 mt-0.5"
                            />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Multi-column Table */}
                    {detail.type === "table" && (
                      <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse min-w-[600px]">
                          <thead>
                            <tr className="border-b-2 border-zinc-200">
                              {detail.headers.map((header, i) => (
                                <th
                                  key={i}
                                  className="py-4 px-4 text-sm font-semibold text-zinc-900 bg-zinc-50/50 first:rounded-tl-xl last:rounded-tr-xl"
                                >
                                  {header}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-zinc-100">
                            {detail.rows.map((row, i) => (
                              <tr
                                key={i}
                                className="hover:bg-zinc-50/50 transition-colors"
                              >
                                {row.map((cell, j) => (
                                  <td
                                    key={j}
                                    className="py-4 px-4 text-sm text-zinc-600 max-w-[250px] whitespace-pre-wrap break-words"
                                  >
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
            
            <div className="flex flex-col sm:flex-row gap-4 mt-16 pt-12 border-t border-zinc-100">
              <a
                href="/contact"
                className="flex-1 sm:flex-none px-8 py-3.5 bg-zinc-900 text-white font-medium rounded-xl hover:bg-zinc-800 transition-colors text-center shadow-md shadow-zinc-900/10"
              >
                Request a Quote
              </a>
              <a
                href={`mailto:contact@pravij.com?subject=Inquiry for ${product.name}`}
                className="flex-1 sm:flex-none px-8 py-3.5 bg-white text-zinc-900 border border-zinc-200 font-medium rounded-xl hover:bg-zinc-50 transition-colors text-center shadow-sm"
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
