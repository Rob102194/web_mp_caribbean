import type { ReactNode, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
  label?: string;
}

export default function Input({ icon, label, id, className = '', ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-slate-700">
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        {icon && (
          <span className="absolute left-3 text-slate-400 pointer-events-none">{icon}</span>
        )}
        <input
          id={id}
          className={[
            'w-full bg-white border border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-400',
            'text-sm transition-all duration-200',
            'focus:outline-none focus:border-[#E6A817] focus:ring-2 focus:ring-[#E6A817]/20',
            'hover:border-slate-300',
            icon ? 'pl-10 pr-4 py-2.5' : 'px-4 py-2.5',
            className,
          ].join(' ')}
          {...props}
        />
      </div>
    </div>
  );
}
