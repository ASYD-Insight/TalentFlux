import React from 'react';
import { Loader2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface ActionIconProps {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
  isLoading?: boolean;
  variant?: 'default' | 'danger';
}

export function ActionIcon({ 
  icon: Icon, 
  label, 
  onClick, 
  isLoading,
  variant = 'default'
}: ActionIconProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isLoading}
      className={`
        relative p-1.5 rounded-full transition-colors
        ${variant === 'danger' 
          ? 'text-red-600 hover:bg-red-50 focus:ring-red-500' 
          : 'text-gray-600 hover:bg-gray-100 focus:ring-blue-500'
        }
        focus:outline-none focus:ring-2 focus:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed
      `}
      title={label}
      aria-label={label}
    >
      {isLoading ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : (
        <Icon className="h-4 w-4" />
      )}
      
      <span className="sr-only">{label}</span>
      
      <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        {label}
      </span>
    </button>
  );
}