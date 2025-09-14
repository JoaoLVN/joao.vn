import type { MouseEventHandler, ReactNode } from 'react';

export type IconButtonProps = {
  label: string;
  ariaLabel?: string;
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLSpanElement>;
};

export function IconButton({
  label,
  ariaLabel,
  children,
  className = '',
  onClick,
}: IconButtonProps) {
  const baseClasses =
    'group relative inline-flex items-center justify-center p-2 rounded-md text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-300 transition-colors';

  return (
    <span
      aria-label={ariaLabel ?? label}
      className={`${baseClasses} ${className}`.trim()}
      onClick={onClick}
    >
      {children}
      <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 mt-2 top-full text-[10px] bg-neutral-900 text-white px-1.5 py-0.5 rounded opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition whitespace-nowrap">
        {label}
      </span>
    </span>
  );
}
