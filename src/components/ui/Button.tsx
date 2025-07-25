import React from 'react';
import { Spinner } from './Spinner';
import { cn } from './utils';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-primary text-white hover:bg-accent',
  secondary: 'bg-secondary text-primary hover:bg-primary hover:text-white',
  outline: 'border border-primary text-primary bg-white hover:bg-secondary',
  ghost: 'bg-transparent text-primary hover:bg-secondary',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { children, variant = 'primary', size = 'md', loading = false, disabled, className, ...props },
    ref
  ) => (
    <button
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      disabled={disabled || loading}
      aria-disabled={disabled || loading}
      aria-busy={loading}
      {...props}
    >
      {loading && <Spinner className="mr-2 h-4 w-4" aria-label="Loading" />}
      {children}
    </button>
  )
);
Button.displayName = 'Button';

// Utility for className merging
function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(' ');
}
