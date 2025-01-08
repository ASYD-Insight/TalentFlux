// Update the existing types.ts file with new interfaces
export interface User {
  id: string;
  name: string;
  email: string;
  role?: string;
  status?: 'active' | 'inactive';
  lastLogin?: string;
  avatar?: string;
}

export interface Role {
  id: string;
  name: string;
  description?: string;
}

export interface Privilege {
  id: string;
  name: string;
  description?: string;
}

export interface FilterConfig {
  status: string;
  role: string;
  dateFrom: string;
  dateTo: string;
}

export interface PaginationConfig {
  page: number;
  perPage: number;
}

export interface SortConfig {
  column: string;
  direction: 'asc' | 'desc';
}