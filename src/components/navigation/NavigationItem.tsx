import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { NavigationItemProps } from './types';

export function NavigationItem({ item, isCollapsed, onNavigate, level = 0 }: NavigationItemProps & { onNavigate: (path: string) => void }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasChildren = item.children && item.children.length > 0;
  const Icon = item.icon;

  const handleClick = () => {
    if (hasChildren) {
      setIsExpanded(!isExpanded);
    } else if (item.path) {
      onNavigate(item.path);
    }
  };

  return (
    <div className="w-full">
      <div
        className={`
          flex items-center px-3 py-2 my-1 rounded-md cursor-pointer
          transition-colors duration-200
          ${level > 0 ? 'ml-4' : ''}
          hover:bg-blue-50 hover:text-blue-600
        `}
        onClick={handleClick}
      >
        {Icon && <Icon className="h-5 w-5 flex-shrink-0" />}
        
        {!isCollapsed && (
          <>
            <span className="ml-3 flex-grow">{item.label}</span>
            {hasChildren && (
              <span className="ml-auto">
                {isExpanded ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </span>
            )}
          </>
        )}
      </div>

      {!isCollapsed && hasChildren && isExpanded && (
        <div className="ml-2 border-l-2 border-gray-100">
          {item.children.map((child) => (
            <NavigationItem
              key={child.id}
              item={child}
              isCollapsed={isCollapsed}
              onNavigate={onNavigate}
              level={level + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}