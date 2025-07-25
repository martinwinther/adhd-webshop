import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
  return (
    <ul
      className={
        orientation === 'horizontal'
          ? 'flex gap-6 items-center'
          : 'flex flex-col gap-2 px-4 py-3'
      }
      role="menubar"
      aria-orientation={orientation}
    >
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <li key={link.href} role="none">
            <Link
              href={link.href}
              className={
                `block px-2 py-1 rounded transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-primary ` +
                (isActive
                  ? 'text-primary bg-secondary'
                  : 'text-neutral-900 hover:text-primary hover:bg-neutral-100')
              }
              aria-current={isActive ? 'page' : undefined}
              tabIndex={0}
              role="menuitem"
              onClick={onNavigate}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}; 