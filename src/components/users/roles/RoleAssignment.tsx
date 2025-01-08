import React from 'react';
import { Role } from '../types';
import { Shield } from 'lucide-react';

interface RoleAssignmentProps {
  selectedRoles: Role[];
  availableRoles: Role[];
  onChange: (roles: Role[]) => void;
}

export function RoleAssignment({ selectedRoles, availableRoles, onChange }: RoleAssignmentProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Shield className="h-5 w-5 text-blue-500" />
        <h3 className="text-lg font-medium text-gray-900">Roles</h3>
      </div>
      
      <div className="space-y-2">
        {availableRoles.map((role) => (
          <label key={role.id} className="flex items-center space-x-3">
            <input
              type="checkbox"
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              checked={selectedRoles.some(r => r.id === role.id)}
              onChange={(e) => {
                if (e.target.checked) {
                  onChange([...selectedRoles, role]);
                } else {
                  onChange(selectedRoles.filter(r => r.id !== role.id));
                }
              }}
            />
            <span className="text-sm font-medium text-gray-700">{role.name}</span>
            {role.description && (
              <span className="text-sm text-gray-500">{role.description}</span>
            )}
          </label>
        ))}
      </div>
    </div>
  );
}