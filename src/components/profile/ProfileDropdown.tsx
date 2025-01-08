import React, { useState } from "react";
import { User, Settings, ChevronDown } from "lucide-react";

export function ProfileDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100"
      >
        <img
          className="h-8 w-8 rounded-full"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          //src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="Profile"
        />
        <ChevronDown className="h-4 w-4 text-gray-500" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
          <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            <User className="h-4 w-4 mr-2" />
            Profile Status
          </button>
          <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </button>
        </div>
      )}
    </div>
  );
}
