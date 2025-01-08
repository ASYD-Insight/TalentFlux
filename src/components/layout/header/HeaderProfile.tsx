import React from 'react';
import { User, Settings, LogOut } from 'lucide-react';

export function HeaderProfile() {
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
        aria-label="Open profile menu"
      >
        <img
          className="h-8 w-8 rounded-full object-cover"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="Profile"
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50">
          <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            <User className="h-4 w-4 mr-2" />
            Profile Status
          </button>
          <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </button>
          <div className="h-px bg-gray-200 my-1" />
          <button className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
            <LogOut className="h-4 w-4 mr-2" />
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}