import type { Metadata } from "next";
import "./globals.css";
import LenisProvider from "@/components/lenis";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const metadata: Metadata = {
  title: "Pravij Earthing Technologies | Solar Accessories Manufacturer",
  description:
    "Pravij Earthing Technologies — trusted manufacturer of high-quality solar accessories, earthing solutions, and lightning protection systems from Ahmedabad, Gujarat.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased" data-scroll-behavior="smooth">
      <body className="flex flex-col min-h-screen bg-zinc-50">
        <LenisProvider>
          <Navbar />
          <main className="flex-1 w-full bg-white">
            {children}
          </main>
          <Footer />
          <FloatingWhatsApp />
        </LenisProvider>
      </body>
    </html>
  );
}
