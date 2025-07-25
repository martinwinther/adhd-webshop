import React from 'react';

export interface SpinnerProps extends React.HTMLAttributes<SVGSVGElement> {
  size?: number;
}

export const Spinner = React.forwardRef<SVGSVGElement, SpinnerProps>(
  ({ size = 20, className, ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={`animate-spin text-primary ${className || ''}`}
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
      />
    </svg>
  )
);
Spinner.displayName = 'Spinner'; 