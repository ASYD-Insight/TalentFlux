import { User } from '../types';
import { USER_STATUSES } from '../constants/userConstants';

export function getStatusColor(status: string) {
  return status === USER_STATUSES.ACTIVE
    ? 'bg-green-100 text-green-800'
    : 'bg-gray-100 text-gray-800';
}

export function formatDate(date: string | undefined) {
  if (!date) return '';
  return new Date(date).toLocaleDateString();
}

export function filterUsers(users: User[], searchTerm: string) {
  const term = searchTerm.toLowerCase();
  return users.filter(user =>
    user.name.toLowerCase().includes(term) ||
    user.email.toLowerCase().includes(term) ||
    user.role?.toLowerCase().includes(term)
  );
}