import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
  <button
    className="px-4 py-2 rounded bg-primary text-white font-medium hover:bg-accent transition-colors"
    {...props}
  >
    {children}
  </button>
);
