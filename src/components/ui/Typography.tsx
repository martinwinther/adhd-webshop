import React from 'react';
import { cn } from './utils';

type HeadingLevel = 1 | 2 | 3 | 4;

type TextColor = 'default' | 'muted' | 'primary' | 'accent' | 'danger';
type TextWeight = 'normal' | 'medium' | 'semibold' | 'bold';
type TextSize = 'sm' | 'base' | 'lg' | 'xl';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: HeadingLevel;
  color?: TextColor;
  weight?: TextWeight;
  className?: string;
}

const headingSize: Record<HeadingLevel, string> = {
  1: 'text-4xl md:text-5xl font-bold',
  2: 'text-3xl md:text-4xl font-semibold',
  3: 'text-2xl md:text-3xl font-semibold',
  4: 'text-xl md:text-2xl font-medium',
};

const colorMap: Record<TextColor, string> = {
  default: 'text-neutral-900',
  muted: 'text-neutral-500',
  primary: 'text-primary',
  accent: 'text-accent',
  danger: 'text-red-600',
};

const weightMap: Record<TextWeight, string> = {
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
};

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ level = 1, color = 'default', weight = 'bold', className, children, ...props }, ref) => {
    const Tag = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4';
    return React.createElement(
      Tag,
      {
        ref,
        className: cn(headingSize[level], colorMap[color], weightMap[weight], className),
        ...props,
      },
      children,
    );
  },
);
Heading.displayName = 'Heading';

interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
  color?: TextColor;
  weight?: TextWeight;
  size?: TextSize;
  className?: string;
}

const textSizeMap: Record<TextSize, string> = {
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
};

export const Text = React.forwardRef<HTMLSpanElement, TextProps>(
  ({ color = 'default', weight = 'normal', size = 'base', className, children, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(textSizeMap[size], colorMap[color], weightMap[weight], className)}
      {...props}
    >
      {children}
    </span>
  ),
);
Text.displayName = 'Text'; 