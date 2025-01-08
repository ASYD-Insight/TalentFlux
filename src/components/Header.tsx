import React from "react";
import { Users, Building2 } from "lucide-react";

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Building2 className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">TalentHub</h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">Team</span>
            </div>
            <img
              className="h-8 w-8 rounded-full"
              src="https://unsplash.com/photos/two-women-standing-next-to-each-other-holding-purses-4ratKpqEs80"
              alt="User avatar"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
