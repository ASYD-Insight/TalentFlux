import { useState, useCallback } from 'react';
import { User, Role, Privilege } from '../types';

// Sample data - replace with actual data from your backend
const sampleRoles: Role[] = [
  { id: '1', name: 'Admin', description: 'Full system access' },
  { id: '2', name: 'Manager', description: 'Department management access' },
  { id: '3', name: 'User', description: 'Basic user access' },
];

const samplePrivileges: Privilege[] = [
  { id: '1', name: 'Create Users', description: 'Can create new users' },
  { id: '2', name: 'Edit Users', description: 'Can modify user details' },
  { id: '3', name: 'Delete Users', description: 'Can remove users' },
  { id: '4', name: 'View Reports', description: 'Can view system reports' },
];

export function useRolesManagement() {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [selectedRoles, setSelectedRoles] = useState<Role[]>([]);
  const [selectedPrivileges, setSelectedPrivileges] = useState<Privilege[]>([]);
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  const validateSelections = useCallback(() => {
    const errors: string[] = [];

    if (!selectedUser) {
      errors.push('Please select a user');
    }
    if (selectedRoles.length === 0) {
      errors.push('At least one role must be assigned');
    }

    // Check for conflicting privileges
    const hasAdminRole = selectedRoles.some(role => role.name === 'Admin');
    const hasBasicRole = selectedRoles.some(role => role.name === 'User');
    if (hasAdminRole && hasBasicRole) {
      errors.push('Admin and Basic User roles cannot be combined');
    }

    setValidationErrors(errors);
    return errors.length === 0;
  }, [selectedUser, selectedRoles]);

  const handleSave = useCallback(() => {
    if (validateSelections()) {
      // Implement save logic here
      console.log('Saving changes:', {
        user: selectedUser,
        roles: selectedRoles,
        privileges: selectedPrivileges,
      });
    }
  }, [selectedUser, selectedRoles, selectedPrivileges, validateSelections]);

  const handleCancel = useCallback(() => {
    setSelectedUser(null);
    setSelectedRoles([]);
    setSelectedPrivileges([]);
    setValidationErrors([]);
  }, []);

  const handleClear = useCallback(() => {
    setSelectedRoles([]);
    setSelectedPrivileges([]);
    setValidationErrors([]);
  }, []);

  return {
    selectedUser,
    setSelectedUser,
    selectedRoles,
    selectedPrivileges,
    availableRoles: sampleRoles,
    availablePrivileges: samplePrivileges,
    validationErrors,
    handleRoleChange: setSelectedRoles,
    handlePrivilegeChange: setSelectedPrivileges,
    handleSave,
    handleCancel,
    handleClear,
  };
}