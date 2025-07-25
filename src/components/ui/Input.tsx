import React from 'react';
import { cn } from './utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, id, type = 'text', ...props }, ref) => {
    const inputId = id || (label ? label.replace(/\s+/g, '-').toLowerCase() : undefined);
    return (
      <div className="w-full">
        {label && (
          <label htmlFor={inputId} className="block mb-1 text-sm font-medium text-neutral-800">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          type={type}
          className={cn(
            'block w-full rounded-md border border-neutral-300 focus:border-primary focus:ring-2 focus:ring-primary/30 transition disabled:opacity-60 disabled:cursor-not-allowed px-3 py-2 text-base',
            error && 'border-red-500 focus:border-red-500 focus:ring-red-200',
            className
          )}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : undefined}
          {...props}
        />
        {error && (
          <p id={`${inputId}-error`} className="mt-1 text-xs text-red-600">
            {error}
          </p>
        )}
      </div>
    );
  }
);
Input.displayName = 'Input'; 