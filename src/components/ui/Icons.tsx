import React from 'react';

export const CartIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" width={24} height={24} aria-hidden="true" {...props}>
    <path d="M7 18a2 2 0 100 4 2 2 0 000-4zm10 2a2 2 0 11-4 0 2 2 0 014 0zM7.2 16h9.45a2 2 0 001.98-1.7l1.2-7A2 2 0 0018.66 5H6.34l-.31-1.65A1 1 0 005.05 2H2v2h2.24l2.03 10.36A4 4 0 007.2 16z" fill="currentColor" />
  </svg>
);

export const UserIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" width={24} height={24} aria-hidden="true" {...props}>
    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
    <path d="M4 20c0-4 8-4 8-4s8 0 8 4" stroke="currentColor" strokeWidth="2" />
  </svg>
);

export const SearchIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" width={24} height={24} aria-hidden="true" {...props}>
    <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
    <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const MenuIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" width={24} height={24} aria-hidden="true" {...props}>
    <rect x="4" y="6" width="16" height="2" rx="1" fill="currentColor" />
    <rect x="4" y="11" width="16" height="2" rx="1" fill="currentColor" />
    <rect x="4" y="16" width="16" height="2" rx="1" fill="currentColor" />
  </svg>
);

export const CloseIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" width={24} height={24} aria-hidden="true" {...props}>
    <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const ChevronDownIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" width={24} height={24} aria-hidden="true" {...props}>
    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
); 