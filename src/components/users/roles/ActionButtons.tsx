import React from 'react';
import { Save, X, Trash2 } from 'lucide-react';

interface ActionButtonsProps {
  onSave: () => void;
  onCancel: () => void;
  onClear: () => void;
}

export function ActionButtons({ onSave, onCancel, onClear }: ActionButtonsProps) {
  return (
    <div className="flex justify-end space-x-4 pt-4 border-t">
      <button
        onClick={onClear}
        className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        <Trash2 className="h-4 w-4 mr-2" />
        Clear All
      </button>
      
      <button
        onClick={onCancel}
        className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        <X className="h-4 w-4 mr-2" />
        Cancel
      </button>
      
      <button
        onClick={onSave}
        className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        <Save className="h-4 w-4 mr-2" />
        Save Changes
      </button>
    </div>
  );
}