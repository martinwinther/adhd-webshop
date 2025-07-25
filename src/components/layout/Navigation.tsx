'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button, Input } from '../ui';
import { categories } from '../../lib/categories';
import { ChevronDownIcon, SearchIcon } from '../ui/Icons';

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
      <div className={orientation === 'horizontal' ? 'flex gap-6 items-center' : 'flex flex-col gap-2 px-4 py-3'}>
        {navLinks.map((link) => {
          if (link.label === 'Produkter') {
            return (
              <div key={link.href} className="relative" onMouseLeave={() => setCatOpen(false)}>
                <Button
                  variant={pathname.startsWith('/produkter') ? 'secondary' : 'ghost'}
                  size="md"
                  className="flex items-center gap-1"
                  aria-haspopup="true"
                  aria-expanded={catOpen}
                  onClick={() => setCatOpen((open) => !open)}
                  onMouseEnter={() => setCatOpen(true)}
                  tabIndex={0}
                >
                  {link.label}
                  <ChevronDownIcon className="w-4 h-4" />
                </Button>
                {/* Dropdown */}
                <div
                  className={`absolute left-0 mt-2 min-w-[200px] bg-white border border-neutral-200 rounded-md shadow-lg z-20 transition-all duration-200 ${catOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
                  role="menu"
                  aria-label="Produktkategorier"
                >
                  {categories.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/produkter/${cat.slug}`}
                      className={`block px-4 py-2 text-sm rounded hover:bg-secondary hover:text-primary transition-colors ${pathname === `/produkter/${cat.slug}` ? 'bg-secondary text-primary' : 'text-neutral-900'}`}
                      role="menuitem"
                      tabIndex={0}
                      onClick={onNavigate}
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              </div>
            );
          }
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`px-2 py-1 rounded font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary ${isActive ? 'text-primary bg-secondary' : 'text-neutral-900 hover:text-primary hover:bg-neutral-100'}`}
              aria-current={isActive ? 'page' : undefined}
              tabIndex={0}
              role="menuitem"
              onClick={onNavigate}
            >
              {link.label}
            </Link>
          );
        })}
        {/* Search Bar */}
        <form action="/søg" method="get" className="ml-2 flex items-center gap-1">
          <Input
            name="q"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Søg..."
            className="w-32 md:w-48"
            aria-label="Søg produkter"
            type="search"
          />
          <Button type="submit" variant="ghost" size="sm" aria-label="Søg">
            <SearchIcon className="w-5 h-5" />
          </Button>
        </form>
      </div>
    </nav>
  );
}; 