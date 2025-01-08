export const USER_STATUSES = {
  ACTIVE: 'active',
  INACTIVE: 'inactive',
} as const;

export const USER_ROLES = {
  ADMIN: 'admin',
  MANAGER: 'manager',
  USER: 'user',
} as const;

export const ITEMS_PER_PAGE_OPTIONS = [10, 25, 50, 100] as const;