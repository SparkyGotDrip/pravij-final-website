'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const footerLinks = {
  Products: [
    { label: 'Earthing Systems', href: '/products' },
    { label: 'Lightning Protection', href: '/products' },
    { label: 'Solar BOS Components', href: '/products' },
    { label: 'Structure Fasteners', href: '/products' },
  ],
  Company: [
    { label: 'Our Story', href: '/about' },
    { label: 'Industries', href: '/industries' },
    { label: 'Certifications', href: '/certifications' },
    { label: 'Contact', href: '/contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white border-t border-zinc-100 pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* CTA */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-24">
          <div>
            <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 mb-2">
              Ready to secure your project?
            </h2>
            <p className="text-zinc-500 font-light">
              Reach out for technical consultations and quotations.
            </p>
          </div>

          <Link
            href="/contact"
            className="group flex items-center gap-2 text-sm font-medium bg-green-50 text-green-800 border border-green-200 px-6 py-3 rounded-full hover:bg-green-100 transition-colors"
          >
            Get started
            <ArrowRight
              size={16}
              strokeWidth={1.5}
              className="group-hover:translate-x-1 transition-transform text-green-600"
            />
          </Link>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          
          {/* Brand */}
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image
                src="/logo.png"
                alt="Pravij Logo"
                width={200}
                height={200}
                className="object-contain shrink-0"
              />
            </Link>

            <p className="text-zinc-500 font-light text-sm leading-relaxed mb-6 max-w-sm">
              We take grounding safety seriously. Manufacturing & supplying solar accessories for safe, efficient, and reliable solar systems.
            </p>

            {/* Contact Info */}
            <div className="text-sm text-zinc-500 font-light flex flex-col gap-2">
              
              {/* Address */}
              <a
                href="https://maps.app.goo.gl/AQTzXZuFDRhTvevw8"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-zinc-900 transition-colors"
              >
                510, Satva Icon, Vastral Cross Road<br/>
                Ahmedabad – 382418<br/>
                Gujarat, India
              </a>

              {/* Phone */}
              <a
                href="tel:+919898404514"
                className="mt-2 hover:text-zinc-900 transition-colors"
              >
                +91 98984 04514
              </a>

              <a
                href="tel:+919898404574"
                className="hover:text-zinc-900 transition-colors"
              >
                +91 98984 04574
              </a>

            </div>
          </div>

          {/* Spacer */}
          <div className="md:col-span-2 hidden md:block"></div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group} className="md:col-span-3">
              <h4 className="text-sm font-medium text-zinc-900 mb-6">
                {group}
              </h4>

              <ul className="space-y-4">
                {links.map(link => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm font-light text-zinc-500 hover:text-zinc-900 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-zinc-100 text-sm font-light text-zinc-400">
          <p>© {new Date().getFullYear()} Pravij Earthing Technologies.</p>

          <div className="flex items-center gap-6">
            <span className="hover:text-zinc-600 cursor-pointer transition-colors">
              Privacy
            </span>
            <span className="hover:text-zinc-600 cursor-pointer transition-colors">
              Terms
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}