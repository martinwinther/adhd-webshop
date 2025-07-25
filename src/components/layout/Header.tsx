import React, { useState } from 'react';
import Link from 'next/link';
import { Navigation } from './Navigation';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 w-full bg-white shadow-sm border-b border-neutral-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo/Brand */}
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-primary">
          {/* You can replace this with an actual logo image if desired */}
          <span aria-label="ADHD Webshop">🧠</span>
          ADHD Webshop
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Navigation orientation="horizontal" />
          {/* Cart Icon */}
          <button aria-label="Shopping Cart" className="relative ml-4 text-accent hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-2xl">shopping_cart</span>
            <span className="absolute -top-1 -right-2 bg-primary text-white text-xs rounded-full px-1.5 py-0.5">0</span>
          </button>
          {/* User Icon */}
          <button aria-label="User Account" className="ml-2 text-accent hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-2xl">account_circle</span>
          </button>
        </nav>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center text-accent hover:text-primary focus:outline-none"
          aria-label="Open menu"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          <span className="material-symbols-outlined text-3xl">menu</span>
        </button>
      </div>
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-white border-t border-neutral-200 shadow animate-fade-in"
        >
          <Navigation orientation="vertical" onNavigate={() => setMobileMenuOpen(false)} />
          <div className="flex items-center gap-4 px-4 py-3 border-t border-neutral-100">
            <button aria-label="Shopping Cart" className="relative text-accent hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-2xl">shopping_cart</span>
              <span className="absolute -top-1 -right-2 bg-primary text-white text-xs rounded-full px-1.5 py-0.5">0</span>
            </button>
            <button aria-label="User Account" className="text-accent hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-2xl">account_circle</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}; 