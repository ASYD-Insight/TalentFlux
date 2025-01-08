import React from 'react';
import { UserTable } from './table/UserTable';
import { TableControls } from './controls/TableControls';
import { FilterPanel } from './filters/FilterPanel';
import { useUserManagement } from './hooks/useUserManagement';

export function UserManagement() {
  const {
    users,
    isLoading,
    error,
    filters,
    pagination,
    sorting,
    handleFilterChange,
    handleSortChange,
    handlePageChange,
    handlePerPageChange,
    handleSearch,
  } = useUserManagement();

  if (error) {
    return (
      <div className="p-4 text-red-600 bg-red-50 rounded-lg">
        Error loading users: {error.message}
      </div>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">User Management</h1>
        <p className="text-gray-600">Manage user accounts, roles, and permissions</p>
      </div>

      <div className="space-y-6">
        <FilterPanel 
          filters={filters} 
          onFilterChange={handleFilterChange} 
        />
        
        <TableControls
          total={users.length}
          pagination={pagination}
          onPageChange={handlePageChange}
          onPerPageChange={handlePerPageChange}
          onSearch={handleSearch}
        />

        <UserTable
          users={users}
          isLoading={isLoading}
          sorting={sorting}
          onSort={handleSortChange}
        />
      </div>
    </div>
  );
}