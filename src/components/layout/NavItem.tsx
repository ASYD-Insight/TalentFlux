import React from 'react';
import { LucideIcon } from 'lucide-react';

interface NavItemProps {
  icon: LucideIcon;
  label: string;
  path: string;
  isCollapsed: boolean;
}

export function NavItem({ icon: Icon, label, isCollapsed }: NavItemProps) {
  return (
    <div className="flex items-center px-3 py-2 my-1 text-gray-700 rounded-md hover:bg-blue-50 hover:text-blue-600 cursor-pointer transition-colors">
      <Icon className="h-5 w-5" />
      {!isCollapsed && <span className="ml-3">{label}</span>}
    </div>
  );
}