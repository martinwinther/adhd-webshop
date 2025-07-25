import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => (
  <footer className="bg-neutral-100 border-t border-neutral-200 text-neutral-700 mt-12">
    <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
      {/* Company Info */}
      <div>
        <div className="text-xl font-bold text-primary mb-2">ADHD Webshop</div>
        <p className="mb-2">Dansk webshop for ADHD produkter</p>
        <p>&copy; {new Date().getFullYear()} ADHD Webshop</p>
      </div>
      {/* Quick Links */}
      <div>
        <div className="font-semibold mb-2">Links</div>
        <ul className="space-y-1">
          <li><Link href="#" className="hover:text-primary transition-colors">Privatlivspolitik</Link></li>
          <li><Link href="#" className="hover:text-primary transition-colors">Handelsbetingelser</Link></li>
          <li><Link href="#" className="hover:text-primary transition-colors">Kontakt</Link></li>
          <li><Link href="#" className="hover:text-primary transition-colors">FAQ</Link></li>
        </ul>
      </div>
      {/* Contact Info */}
      <div>
        <div className="font-semibold mb-2">Kontakt</div>
        <p className="mb-1">Email: info@adhdwebshop.dk</p>
        <p>Telefon: +45 12 34 56 78</p>
      </div>
      {/* Social Media */}
      <div>
        <div className="font-semibold mb-2">Følg os</div>
        <div className="flex gap-3">
          <a href="#" aria-label="Facebook" className="hover:text-primary transition-colors"><span className="material-symbols-outlined">facebook</span></a>
          <a href="#" aria-label="Instagram" className="hover:text-primary transition-colors"><span className="material-symbols-outlined">instagram</span></a>
          <a href="#" aria-label="Twitter" className="hover:text-primary transition-colors"><span className="material-symbols-outlined">twitter</span></a>
        </div>
      </div>
    </div>
  </footer>
); 