import React from 'react';
import { navigationItems } from './navigationConfig';
import { NavigationItem } from './NavigationItem';

interface NavigationProps {
  isCollapsed: boolean;
  onNavigate: (path: string) => void;
}

export function Navigation({ isCollapsed, onNavigate }: NavigationProps) {
  return (
    <nav className="py-2">
      {navigationItems.map((item) => (
        <NavigationItem
          key={item.id}
          item={item}
          isCollapsed={isCollapsed}
          onNavigate={onNavigate}
        />
      ))}
    </nav>
  );
}