import { useState, useEffect } from 'react';
import { sampleUsers } from '../data/sampleUsers';
import type { User, FilterConfig, PaginationConfig, SortConfig } from '../types';

export function useUserManagement() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  
  const [filters, setFilters] = useState<FilterConfig>({
    status: 'all',
    role: 'all',
    dateFrom: '',
    dateTo: '',
  });

  const [pagination, setPagination] = useState<PaginationConfig>({
    page: 1,
    perPage: 10,
  });

  const [sorting, setSorting] = useState<SortConfig>({
    column: 'name',
    direction: 'asc',
  });

  useEffect(() => {
    fetchUsers();
  }, [filters, pagination, sorting]);

  const fetchUsers = async () => {
    try {
      setIsLoading(true);
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      let filteredUsers = [...sampleUsers];
      
      // Apply filters
      if (filters.status !== 'all') {
        filteredUsers = filteredUsers.filter(user => user.status === filters.status);
      }
      if (filters.role !== 'all') {
        filteredUsers = filteredUsers.filter(user => user.role === filters.role);
      }
      
      // Apply sorting
      filteredUsers.sort((a, b) => {
        const aValue = a[sorting.column as keyof User];
        const bValue = b[sorting.column as keyof User];
        const modifier = sorting.direction === 'asc' ? 1 : -1;
        
        return aValue < bValue ? -1 * modifier : 1 * modifier;
      });
      
      setUsers(filteredUsers);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch users'));
    } finally {
      setIsLoading(false);
    }
  };

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setPagination((prev) => ({ ...prev, page: 1 }));
  };

  const handleSortChange = (column: string) => {
    setSorting((prev) => ({
      column,
      direction: prev.column === column && prev.direction === 'asc' ? 'desc' : 'asc',
    }));
  };

  const handlePageChange = (page: number) => {
    setPagination((prev) => ({ ...prev, page }));
  };

  const handlePerPageChange = (perPage: number) => {
    setPagination({ page: 1, perPage });
  };

  const handleSearch = (query: string) => {
    if (!query.trim()) {
      fetchUsers();
      return;
    }
    
    const searchTerm = query.toLowerCase();
    const filteredUsers = sampleUsers.filter(user => 
      user.name.toLowerCase().includes(searchTerm) ||
      user.email.toLowerCase().includes(searchTerm) ||
      user.role.toLowerCase().includes(searchTerm)
    );
    
    setUsers(filteredUsers);
  };

  return {
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
  };
}