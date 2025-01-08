import React from 'react';
import { ArrowUpDown, Edit, Trash2, Ban } from 'lucide-react';
import { UserTableRow } from './UserTableRow';
import { TableHeader } from './TableHeader';
import type { User, SortConfig } from '../types';

interface UserTableProps {
  users: User[];
  isLoading: boolean;
  sorting: SortConfig;
  onSort: (column: string) => void;
}

export function UserTable({ users, isLoading, sorting, onSort }: UserTableProps) {
  if (isLoading) {
    return <TableSkeleton />;
  }

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200">
      <table className="min-w-full divide-y divide-gray-200">
        <TableHeader sorting={sorting} onSort={onSort} />
        <tbody className="divide-y divide-gray-200 bg-white">
          {users.map((user) => (
            <UserTableRow key={user.id} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function TableSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-12 bg-gray-200 rounded-t-lg mb-1" />
      {[...Array(5)].map((_, i) => (
        <div key={i} className="h-16 bg-gray-100 mb-1" />
      ))}
    </div>
  );
}