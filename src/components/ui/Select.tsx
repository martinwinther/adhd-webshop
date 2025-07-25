import React from 'react';
import { cn } from './utils';

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, options, className, id, ...props }, ref) => {
    const selectId = id || (label ? label.replace(/\s+/g, '-').toLowerCase() : undefined);
    return (
      <div className="w-full">
        {label && (
          <label htmlFor={selectId} className="block mb-1 text-sm font-medium text-neutral-800">
            {label}
          </label>
        )}
        <select
          ref={ref}
          id={selectId}
          className={cn(
            'block w-full rounded-md border border-neutral-300 focus:border-primary focus:ring-2 focus:ring-primary/30 transition disabled:opacity-60 disabled:cursor-not-allowed px-3 py-2 text-base bg-white',
            error && 'border-red-500 focus:border-red-500 focus:ring-red-200',
            className
          )}
          aria-invalid={!!error}
          aria-describedby={error ? `${selectId}-error` : undefined}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {error && (
          <p id={`${selectId}-error`} className="mt-1 text-xs text-red-600">
            {error}
          </p>
        )}
      </div>
    );
  }
);
Select.displayName = 'Select'; 