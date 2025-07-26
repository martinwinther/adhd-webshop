'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button, Input } from '../ui';
import { categories } from '../../lib/categories';

interface NavigationProps {
  orientation?: 'horizontal' | 'vertical';
  onNavigate?: () => void;
}

const navLinks = [
  { href: '/', label: 'Hjem' },
  { href: '/produkter', label: 'Produkter' },
  { href: '/om-os', label: 'Om Os' },
  { href: '/kontakt', label: 'Kontakt' },
];

export const Navigation: React.FC<NavigationProps> = ({ orientation = 'horizontal', onNavigate }) => {
  const pathname = usePathname();
  const [catOpen, setCatOpen] = useState(false);
  const [search, setSearch] = useState('');

  return (
    <nav className="relative w-full">
      <div className={orientation === 'horizontal' ? 'flex gap-6 items-center' : 'flex flex-col gap-2'}>
        {navLinks.map((link) => {
          if (link.label === 'Produkter') {
            return (
              <div key={link.href} className="relative" onMouseLeave={() => setCatOpen(false)}>
                <button
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg font-medium transition-all ${
                    pathname.startsWith('/produkter')
                      ? 'text-primary-600 bg-primary-50 border border-primary-200'
                      : 'text-neutral-700 hover:text-primary-600 hover:bg-primary-50'
                  }`}
                  aria-haspopup="true"
                  aria-expanded={catOpen}
                  onClick={() => setCatOpen((open) => !open)}
                  onMouseEnter={() => setCatOpen(true)}
                  tabIndex={0}
                >
                  {link.label}
                  <svg className={`w-4 h-4 transition-transform ${catOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Dropdown */}
                <div
                  className={`absolute left-0 mt-2 min-w-[220px] bg-white border border-neutral-200 rounded-xl shadow-medium z-20 transition-all duration-200 ${
                    catOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                  }`}
                  role="menu"
                  aria-label="Produktkategorier"
                >
                  <div className="p-2">
                    {categories.map((cat) => (
                      <Link
                        key={cat.slug}
                        href={`/produkter/${cat.slug}`}
                        className={`block px-3 py-2 text-sm rounded-lg transition-all ${
                          pathname === `/produkter/${cat.slug}`
                            ? 'bg-primary-50 text-primary-600 font-medium'
                            : 'text-neutral-700 hover:bg-primary-50 hover:text-primary-600'
                        }`}
                        role="menuitem"
                        tabIndex={0}
                        onClick={onNavigate}
                      >
                        {cat.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          }
          
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-2 rounded-lg font-medium transition-all ${
                isActive
                  ? 'text-primary-600 bg-primary-50 border border-primary-200'
                  : 'text-neutral-700 hover:text-primary-600 hover:bg-primary-50'
              }`}
              aria-current={isActive ? 'page' : undefined}
              tabIndex={0}
              role="menuitem"
              onClick={onNavigate}
            >
              {link.label}
            </Link>
          );
        })}
        
        {/* Search Bar - Only show in vertical orientation */}
        {orientation === 'vertical' && (
          <form action="/søg" method="get" className="flex items-center gap-2">
            <Input
              name="q"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Søg..."
              className="flex-1"
              aria-label="Søg produkter"
              type="search"
            />
            <button
              type="submit"
              className="p-2 text-neutral-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all"
              aria-label="Søg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </form>
        )}
      </div>
    </nav>
  );
}; 