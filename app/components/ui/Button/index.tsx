import type { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ className = '', children, ...props }: ButtonProps) {
  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center rounded-md px-4 py-2
        text-sm font-medium bg-foreground text-background hover:opacity-90
        transition-opacity focus:outline-none focus:ring-2 focus:ring-foreground
        focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50
        disabled:pointer-events-none ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}
