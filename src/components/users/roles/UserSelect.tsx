import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
import { User } from '../types';
import { sampleUsers } from '../data/sampleUsers';

interface UserSelectProps {
  selectedUser: User | null;
  onUserSelect: (user: User | null) => void;
}

export function UserSelect({ selectedUser, onUserSelect }: UserSelectProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const filteredUsers = sampleUsers.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Select User
      </label>
      <div className="relative">
        <input
          type="text"
          className="block w-full rounded-md border-gray-300 pr-10 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          placeholder="Search users..."
          value={selectedUser ? `${selectedUser.name} (${selectedUser.email})` : searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
        />
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        {(selectedUser || searchQuery) && (
          <button
            onClick={() => {
              onUserSelect(null);
              setSearchQuery('');
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2"
          >
            <X className="h-4 w-4 text-gray-400" />
          </button>
        )}
      </div>

      {isOpen && filteredUsers.length > 0 && (
        <div className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base overflow-auto focus:outline-none sm:text-sm">
          {filteredUsers.map((user) => (
            <div
              key={user.id}
              className="flex items-center px-4 py-2 cursor-pointer hover:bg-blue-50"
              onClick={() => {
                onUserSelect(user);
                setIsOpen(false);
                setSearchQuery('');
              }}
            >
              <img
                src={user.avatar}
                alt={user.name}
                className="h-8 w-8 rounded-full object-cover"
              />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">{user.name}</p>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
              <span className={`ml-auto inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize
                ${user.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                {user.status}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}