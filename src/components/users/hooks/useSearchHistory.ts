import { useState, useEffect } from 'react';

const MAX_HISTORY_ITEMS = 5;
const STORAGE_KEY = 'userSearchHistory';

export function useSearchHistory() {
  const [searchHistory, setSearchHistory] = useState<string[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(searchHistory));
  }, [searchHistory]);

  const addToHistory = (query: string) => {
    if (!query.trim()) return;
    
    setSearchHistory((prev) => {
      const filtered = prev.filter((item) => item !== query);
      return [query, ...filtered].slice(0, MAX_HISTORY_ITEMS);
    });
  };

  const clearHistory = () => {
    setSearchHistory([]);
  };

  return {
    searchHistory,
    addToHistory,
    clearHistory,
  };
}