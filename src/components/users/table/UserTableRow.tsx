import React from 'react';
import { UserActions } from '../actions/UserActions';
import type { User } from '../types';

interface UserTableRowProps {
  user: User;
}

export function UserTableRow({ user }: UserTableRowProps) {
  return (
    <tr className="hover:bg-gray-50">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src={user.avatar || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'}
            alt={user.name}
          />
          <div className="ml-4">
            <div className="font-medium text-gray-900">{user.name}</div>
            <div className="text-gray-500">{user.email}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize" 
          style={{
            backgroundColor: user.role === 'admin' ? 'rgb(239 68 68 / 0.1)' : 'rgb(59 130 246 / 0.1)',
            color: user.role === 'admin' ? 'rgb(239 68 68)' : 'rgb(59 130 246)'
          }}>
          {user.role}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
          ${user.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
          {user.status}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {new Date(user.lastLogin || '').toLocaleDateString()}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <UserActions user={user} />
      </td>
    </tr>
  );
}