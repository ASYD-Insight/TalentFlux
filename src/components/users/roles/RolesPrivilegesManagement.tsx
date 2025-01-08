import React from 'react';
import { UserSelect } from './UserSelect';
import { RoleAssignment } from './RoleAssignment';
import { PrivilegeAssignment } from './PrivilegeAssignment';
import { ActionButtons } from './ActionButtons';
import { useRolesManagement } from '../hooks/useRolesManagement';
import { AlertCircle } from 'lucide-react';

export function RolesPrivilegesManagement() {
  const {
    selectedUser,
    setSelectedUser,
    selectedRoles,
    selectedPrivileges,
    availableRoles,
    availablePrivileges,
    validationErrors,
    handleRoleChange,
    handlePrivilegeChange,
    handleSave,
    handleCancel,
    handleClear,
  } = useRolesManagement();

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Roles and Privileges</h1>
        <p className="text-gray-600">Manage user roles and access privileges</p>
      </div>

      <div className="space-y-6 bg-white p-6 rounded-lg shadow-sm">
        <UserSelect
          selectedUser={selectedUser}
          onUserSelect={setSelectedUser}
        />

        {selectedUser && (
          <>
            <div className="mt-6 flex items-center gap-4">
              <img
                src={selectedUser.avatar}
                alt={selectedUser.name}
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-medium text-gray-900">{selectedUser.name}</h3>
                <p className="text-sm text-gray-500">{selectedUser.email}</p>
              </div>
              <span className={`ml-auto inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize
                ${selectedUser.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                {selectedUser.status}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <RoleAssignment
                selectedRoles={selectedRoles}
                availableRoles={availableRoles}
                onChange={handleRoleChange}
              />
              
              <PrivilegeAssignment
                selectedPrivileges={selectedPrivileges}
                availablePrivileges={availablePrivileges}
                onChange={handlePrivilegeChange}
              />
            </div>

            {validationErrors.length > 0 && (
              <div className="bg-red-50 p-4 rounded-md">
                <div className="flex">
                  <AlertCircle className="h-5 w-5 text-red-400" />
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800">
                      Please address the following:
                    </h3>
                    <div className="mt-2 text-sm text-red-700">
                      <ul className="list-disc pl-5 space-y-1">
                        {validationErrors.map((error, index) => (
                          <li key={index}>{error}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <ActionButtons
              onSave={handleSave}
              onCancel={handleCancel}
              onClear={handleClear}
            />
          </>
        )}
      </div>
    </div>
  );
}