import React from 'react';

type BadgeVariant = 'gold' | 'navy' | 'teal' | 'green' | 'slate' | 'red';

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  gold:  'bg-[#F5C842]/15 text-[#C88B00] border border-[#F5C842]/40',
  navy:  'bg-[#1A2D57]/10 text-[#1A2D57] border border-[#1A2D57]/25',
  teal:  'bg-[#2DD4BF]/15 text-[#0D9488] border border-[#2DD4BF]/40',
  green: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
  slate: 'bg-slate-100 text-slate-600 border border-slate-200',
  red:   'bg-red-50 text-red-600 border border-red-200',
};

export default function Badge({ variant = 'slate', children, className = '' }: BadgeProps) {
  return (
    <span
      className={[
        'inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium rounded-full',
        variantStyles[variant],
        className,
      ].join(' ')}
    >
      {children}
    </span>
  );
}
