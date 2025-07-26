import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => (
  <footer className="bg-gradient-subtle border-t border-neutral-200">
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        {/* Company Info */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
              <span className="text-xl">🧠</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-neutral-900">ADHD Webshop</h3>
              <p className="text-sm text-neutral-600">Dansk webshop for ADHD produkter</p>
            </div>
          </div>
          <p className="text-neutral-700 mb-6 max-w-md">
            Vi hjælper mennesker med ADHD med at finde de rigtige produkter til deres hverdag. 
            Alt er nøje udvalgt og testet for at sikre kvalitet og effektivitet.
          </p>
          <div className="flex gap-4">
            <a href="#" aria-label="Facebook" className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-neutral-600 hover:text-primary-600 hover:shadow-soft transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-neutral-600 hover:text-primary-600 hover:shadow-soft transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z"/>
              </svg>
            </a>
            <a href="#" aria-label="Twitter" className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-neutral-600 hover:text-primary-600 hover:shadow-soft transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-neutral-900 mb-4">Hurtige links</h4>
          <ul className="space-y-3">
            <li>
              <Link href="#" className="text-neutral-600 hover:text-primary-600 transition-colors">
                Privatlivspolitik
              </Link>
            </li>
            <li>
              <Link href="#" className="text-neutral-600 hover:text-primary-600 transition-colors">
                Handelsbetingelser
              </Link>
            </li>
            <li>
              <Link href="#" className="text-neutral-600 hover:text-primary-600 transition-colors">
                Kontakt
              </Link>
            </li>
            <li>
              <Link href="#" className="text-neutral-600 hover:text-primary-600 transition-colors">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="#" className="text-neutral-600 hover:text-primary-600 transition-colors">
                Om os
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold text-neutral-900 mb-4">Kontakt</h4>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-neutral-900">Email</p>
                <p className="text-sm text-neutral-600">info@adhdwebshop.dk</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-neutral-900">Telefon</p>
                <p className="text-sm text-neutral-600">+45 12 34 56 78</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-neutral-900">Adresse</p>
                <p className="text-sm text-neutral-600">København, Danmark</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-200 mt-12 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-neutral-600">
            &copy; {new Date().getFullYear()} ADHD Webshop. Alle rettigheder forbeholdes.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-sm text-neutral-600 hover:text-primary-600 transition-colors">
              Privatlivspolitik
            </Link>
            <Link href="#" className="text-sm text-neutral-600 hover:text-primary-600 transition-colors">
              Cookies
            </Link>
            <Link href="#" className="text-sm text-neutral-600 hover:text-primary-600 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </div>
  </footer>
); 