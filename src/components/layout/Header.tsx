'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navigation } from './Navigation';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-neutral-200/50 shadow-soft">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo/Brand */}
        <Link href="/" className="flex items-center gap-4 group">
          <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary-500 to-accent rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
            <span className="text-2xl" aria-label="ADHD Webshop">🧠</span>
          </div>
          <div className="hidden sm:block">
            <h1 className="text-xl font-bold text-neutral-900 group-hover:text-primary-600 transition-colors">
              ADHD Webshop
            </h1>
            <p className="text-xs text-neutral-600 font-medium">Dansk ADHD produkter</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <Navigation orientation="horizontal" />
          
          {/* Search Bar */}
          <div className="relative">
            <input
              type="search"
              placeholder="Søg produkter..."
              className="w-72 px-4 py-3 pl-12 bg-neutral-50 border border-neutral-200 rounded-2xl text-sm focus:outline-none focus:ring-4 focus:ring-primary-300/50 focus:border-primary-300 transition-all shadow-sm"
            />
            <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* Cart Icon */}
          <button aria-label="Shopping Cart" className="relative p-3 text-neutral-600 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all duration-300 group">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
            </svg>
            <span className="absolute -top-1 -right-1 bg-gradient-to-r from-primary-500 to-accent text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold shadow-lg">
              0
            </span>
          </button>

          {/* User Icon */}
          <button aria-label="User Account" className="p-3 text-neutral-600 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden flex items-center justify-center w-12 h-12 text-neutral-600 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all duration-300"
          aria-label="Open menu"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden bg-white/95 backdrop-blur-xl border-t border-neutral-200/50 shadow-medium transition-all duration-500 ease-in-out ${
          mobileMenuOpen ? 'opacity-100 visible max-h-96' : 'opacity-0 invisible max-h-0'
        }`}
      >
        <div className="px-6 py-8 space-y-6">
          <Navigation orientation="vertical" onNavigate={() => setMobileMenuOpen(false)} />
          
          {/* Mobile Search */}
          <div className="relative">
            <input
              type="search"
              placeholder="Søg produkter..."
              className="w-full px-4 py-3 pl-12 bg-neutral-50 border border-neutral-200 rounded-2xl text-sm focus:outline-none focus:ring-4 focus:ring-primary-300/50 focus:border-primary-300 transition-all shadow-sm"
            />
            <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-4 pt-6 border-t border-neutral-200">
            <button aria-label="Shopping Cart" className="flex items-center gap-3 px-4 py-3 text-neutral-600 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all duration-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
              </svg>
              <span className="font-medium">Kurv (0)</span>
            </button>
            <button aria-label="User Account" className="flex items-center gap-3 px-4 py-3 text-neutral-600 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all duration-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="font-medium">Min konto</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}; 