import React from 'react';
import { Edit2, Trash2, Settings } from 'lucide-react';
import { ActionIcon } from './ActionIcon';
import { useUserActions } from '../hooks/useUserActions';
import { User } from '../types';

interface UserActionsProps {
  user: User;
}

export function UserActions({ user }: UserActionsProps) {
  const { handleEdit, handleDelete, handleSettings, isLoading } = useUserActions();

  return (
    <div className="flex items-center gap-2">
      <ActionIcon
        icon={Edit2}
        label="Edit user"
        onClick={() => handleEdit(user)}
        isLoading={isLoading === 'edit'}
      />
      <ActionIcon
        icon={Settings}
        label="User settings"
        onClick={() => handleSettings(user)}
        isLoading={isLoading === 'settings'}
      />
      <ActionIcon
        icon={Trash2}
        label="Delete user"
        onClick={() => handleDelete(user)}
        isLoading={isLoading === 'delete'}
        variant="danger"
      />
    </div>
  );
}