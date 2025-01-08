import React from 'react';
import { Search } from 'lucide-react';
import { SearchBar } from './SearchBar';
import { Pagination } from './Pagination';
import type { PaginationConfig } from '../types';

interface TableControlsProps {
  total: number;
  pagination: PaginationConfig;
  onPageChange: (page: number) => void;
  onPerPageChange: (perPage: number) => void;
  onSearch: (query: string) => void;
}

export function TableControls({
  total,
  pagination,
  onPageChange,
  onPerPageChange,
  onSearch,
}: TableControlsProps) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white p-4 rounded-lg border border-gray-200">
      <SearchBar onSearch={onSearch} />
      
      <div className="flex items-center gap-4">
        <select
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          value={pagination.perPage}
          onChange={(e) => onPerPageChange(Number(e.target.value))}
        >
          {[10, 25, 50, 100].map((value) => (
            <option key={value} value={value}>
              {value} per page
            </option>
          ))}
        </select>

        <Pagination
          currentPage={pagination.page}
          totalPages={Math.ceil(total / pagination.perPage)}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
}