import React from 'react';
import { Zap } from 'lucide-react';

interface LogoProps {
  variant?: 'horizontal' | 'vertical';
  className?: string;
}

export function Logo({ variant = 'horizontal', className = '' }: LogoProps) {
  const baseClasses = 'text-gradient bg-gradient-to-r from-blue-600 to-purple-600';
  
  if (variant === 'vertical') {
    return (
      <div className={`flex flex-col items-center gap-2 ${className}`}>
        <div className="relative">
          <Zap className="h-10 w-10 text-blue-600" />
          <div className="absolute -inset-1 bg-blue-100 blur-lg opacity-50 rounded-full" />
        </div>
        <span className={`text-xl font-bold ${baseClasses}`}>
          TalentFlux
        </span>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        <Zap className="h-8 w-8 text-blue-600" />
        <div className="absolute -inset-1 bg-blue-100 blur-lg opacity-50 rounded-full" />
      </div>
      <span className={`text-xl font-bold ${baseClasses}`}>
        TalentFlux
      </span>
    </div>
  );
}