import React from 'react';
import { HeaderLogo } from './header/HeaderLogo';
import { HeaderProfile } from './header/HeaderProfile';

interface HeaderProps {
  toggleSidebar: () => void;
}

export function Header({ toggleSidebar }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm fixed top-0 right-0 left-0 z-20 h-16">
      <div className="h-full w-full px-4">
        <div className="h-full flex items-center justify-between">
          <HeaderLogo onMenuClick={toggleSidebar} />
          <HeaderProfile />
        </div>
      </div>
    </header>
  );
}