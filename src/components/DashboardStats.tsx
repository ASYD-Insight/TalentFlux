import React from 'react';
import { UserPlus, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const stats = [
  { name: 'New Applications', value: '45', icon: UserPlus, color: 'text-blue-600' },
  { name: 'Pending Reviews', value: '12', icon: Clock, color: 'text-yellow-500' },
  { name: 'Interviews Scheduled', value: '8', icon: CheckCircle, color: 'text-green-500' },
  { name: 'Urgent Positions', value: '3', icon: AlertCircle, color: 'text-red-500' },
];

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((item) => (
        <div
          key={item.name}
          className="bg-white overflow-hidden shadow rounded-lg"
        >
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <item.icon className={`h-6 w-6 ${item.color}`} />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    {item.name}
                  </dt>
                  <dd className="text-lg font-semibold text-gray-900">
                    {item.value}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}