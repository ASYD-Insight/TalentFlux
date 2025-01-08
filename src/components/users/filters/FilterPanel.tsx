import React from 'react';
import { Filter } from 'lucide-react';
import type { FilterConfig } from '../types';

interface FilterPanelProps {
  filters: FilterConfig;
  onFilterChange: (key: string, value: string) => void;
}

export function FilterPanel({ filters, onFilterChange }: FilterPanelProps) {
  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200">
      <div className="flex items-center gap-2 mb-4">
        <Filter className="h-4 w-4 text-gray-500" />
        <h2 className="text-sm font-medium text-gray-700">Filters</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <select
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          value={filters.status}
          onChange={(e) => onFilterChange('status', e.target.value)}
        >
          <option value="all">All Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>

        <select
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          value={filters.role}
          onChange={(e) => onFilterChange('role', e.target.value)}
        >
          <option value="all">All Roles</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
          <option value="manager">Manager</option>
        </select>

        <input
          type="date"
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          value={filters.dateFrom}
          onChange={(e) => onFilterChange('dateFrom', e.target.value)}
        />

        <input
          type="date"
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          value={filters.dateTo}
          onChange={(e) => onFilterChange('dateTo', e.target.value)}
        />
      </div>
    </div>
  );
}