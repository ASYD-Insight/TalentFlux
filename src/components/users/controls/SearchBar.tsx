import React, { useState, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { useSearchHistory } from '../hooks/useSearchHistory';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const { searchHistory, addToHistory, clearHistory } = useSearchHistory();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    onSearch(searchQuery);
    addToHistory(searchQuery);
    setIsOpen(false);
  };

  const handleClear = () => {
    setQuery('');
    onSearch('');
    setIsOpen(false);
  };

  return (
    <div className="relative w-full sm:w-96">
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          className="block w-full rounded-md border-gray-300 pl-10 pr-10 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          placeholder="Search users..."
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={() => setIsOpen(true)}
        />
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        {query && (
          <button
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2"
          >
            <X className="h-4 w-4 text-gray-400" />
          </button>
        )}
      </div>

      {isOpen && searchHistory.length > 0 && (
        <div className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg border border-gray-200">
          <div className="p-2">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-500">Recent searches</span>
              <button
                onClick={clearHistory}
                className="text-xs text-blue-600 hover:text-blue-800"
              >
                Clear all
              </button>
            </div>
            {searchHistory.map((item, index) => (
              <button
                key={index}
                className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                onClick={() => handleSearch(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}