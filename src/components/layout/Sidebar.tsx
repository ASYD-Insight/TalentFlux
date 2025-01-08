import React from 'react';
import { Menu } from 'lucide-react';
import { Navigation } from '../navigation/Navigation';

interface SidebarProps {
  isCollapsed: boolean;
  toggleSidebar: () => void;
  onNavigate: (path: string) => void;
}

export function Sidebar({ isCollapsed, toggleSidebar, onNavigate }: SidebarProps) {
  return (
    <aside className={`
      bg-white shadow-lg fixed left-0 top-0 z-10
      min-h-screen transition-all duration-300
      ${isCollapsed ? 'w-16' : 'w-64'}
    `}>
      <div className="p-4 border-b flex justify-between items-center">
        <span className={`font-semibold ${isCollapsed ? 'hidden' : 'block'}`}>
          Navigation
        </span>
        <button 
          onClick={toggleSidebar}
          className="p-1 hover:bg-gray-100 rounded transition-colors"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>
      <Navigation isCollapsed={isCollapsed} onNavigate={onNavigate} />
    </aside>
  );
}