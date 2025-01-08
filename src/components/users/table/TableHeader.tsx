import React from 'react';
import { ArrowUpDown } from 'lucide-react';
import type { SortConfig } from '../types';

interface TableHeaderProps {
  sorting: SortConfig;
  onSort: (column: string) => void;
}

export function TableHeader({ sorting, onSort }: TableHeaderProps) {
  const columns = [
    { key: 'name', label: 'User' },
    { key: 'role', label: 'Role' },
    { key: 'status', label: 'Status' },
    { key: 'lastLogin', label: 'Last Login' },
    { key: 'actions', label: '' },
  ];

  return (
    <thead className="bg-gray-50">
      <tr>
        {columns.map((column) => (
          <th
            key={column.key}
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            {column.key !== 'actions' ? (
              <button
                className="group inline-flex items-center space-x-1"
                onClick={() => onSort(column.key)}
              >
                <span>{column.label}</span>
                <ArrowUpDown className={`h-4 w-4 ${
                  sorting.column === column.key ? 'text-gray-700' : 'text-gray-400'
                } group-hover:text-gray-700`} />
              </button>
            ) : (
              column.label
            )}
          </th>
        ))}
      </tr>
    </thead>
  );
}