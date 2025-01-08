import React from 'react';
import { Privilege } from '../types';
import { Lock } from 'lucide-react';

interface PrivilegeAssignmentProps {
  selectedPrivileges: Privilege[];
  availablePrivileges: Privilege[];
  onChange: (privileges: Privilege[]) => void;
}

export function PrivilegeAssignment({
  selectedPrivileges,
  availablePrivileges,
  onChange,
}: PrivilegeAssignmentProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Lock className="h-5 w-5 text-blue-500" />
        <h3 className="text-lg font-medium text-gray-900">Privileges</h3>
      </div>

      <div className="space-y-2">
        {availablePrivileges.map((privilege) => (
          <label key={privilege.id} className="flex items-center space-x-3">
            <input
              type="checkbox"
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              checked={selectedPrivileges.some(p => p.id === privilege.id)}
              onChange={(e) => {
                if (e.target.checked) {
                  onChange([...selectedPrivileges, privilege]);
                } else {
                  onChange(selectedPrivileges.filter(p => p.id !== privilege.id));
                }
              }}
            />
            <span className="text-sm font-medium text-gray-700">
              {privilege.name}
            </span>
            {privilege.description && (
              <span className="text-sm text-gray-500">
                {privilege.description}
              </span>
            )}
          </label>
        ))}
      </div>
    </div>
  );
}