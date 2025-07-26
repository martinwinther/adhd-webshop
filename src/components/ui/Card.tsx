import React from 'react';
import { cn } from './utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ header, footer, children, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100/50 backdrop-blur-sm',
        className
      )}
      {...props}
    >
      {header && (
        <div className="px-6 py-4 border-b border-neutral-100">
          <div className="font-semibold text-lg text-neutral-900">{header}</div>
        </div>
      )}
      <div className="flex-1">{children}</div>
      {footer && (
        <div className="px-6 py-4 border-t border-neutral-100 bg-neutral-50/50">
          {footer}
        </div>
      )}
    </div>
  )
);
Card.displayName = 'Card'; 