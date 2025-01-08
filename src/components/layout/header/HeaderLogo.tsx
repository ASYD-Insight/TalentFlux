import React from 'react';
import { Menu } from 'lucide-react';
import { Logo } from '../../brand/Logo';

interface HeaderLogoProps {
  onMenuClick: () => void;
}

export function HeaderLogo({ onMenuClick }: HeaderLogoProps) {
  return (
    <div className="flex items-center gap-3">
      <button
        onClick={onMenuClick}
        className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
        aria-label="Toggle menu"
      >
        <Menu className="h-5 w-5 text-gray-600" />
      </button>
      <Logo />
    </div>
  );
}