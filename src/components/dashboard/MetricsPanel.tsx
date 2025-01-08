import React from 'react';
import { Users, Calendar, Briefcase } from 'lucide-react';

const metrics = [
  { icon: Users, label: 'Total Applications', value: '234', color: 'bg-blue-500' },
  { icon: Calendar, label: 'Interviews Scheduled', value: '45', color: 'bg-green-500' },
  { icon: Briefcase, label: 'Job Openings', value: '12', color: 'bg-purple-500' },
];

interface MetricsPanelProps {
  isMinimized: boolean;
}

export function MetricsPanel({ isMinimized }: MetricsPanelProps) {
  return (
    <div className={`transition-all duration-300 ${
      isMinimized ? 'h-16 overflow-hidden' : 'h-auto'
    }`}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {metrics.map((metric) => (
          <div key={metric.label} className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center">
              <div className={`${metric.color} p-3 rounded-lg`}>
                <metric.icon className="h-6 w-6 text-white" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">{metric.label}</p>
                <p className="text-2xl font-semibold">{metric.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}