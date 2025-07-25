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
        'bg-white rounded-md shadow-sm border border-neutral-200 transition-shadow hover:shadow-md p-4 sm:p-6 flex flex-col',
        className
      )}
      {...props}
    >
      {header && <div className="mb-2 font-semibold text-lg">{header}</div>}
      <div className="flex-1">{children}</div>
      {footer && <div className="mt-4">{footer}</div>}
    </div>
  )
);
Card.displayName = 'Card'; 