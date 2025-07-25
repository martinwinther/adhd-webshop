import React from 'react';
import { cn } from './utils';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: number | string;
  height?: number | string;
  rounded?: string;
}

export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ width = '100%', height = 16, rounded = 'rounded-md', className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'bg-neutral-200 animate-pulse',
        rounded,
        className
      )}
      style={{ width, height }}
      aria-busy="true"
      aria-label="Loading..."
      {...props}
    />
  )
);
Skeleton.displayName = 'Skeleton'; 