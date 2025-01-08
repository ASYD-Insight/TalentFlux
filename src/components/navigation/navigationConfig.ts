import { Users, FileText, UserSearch, Building2, ClipboardList, UserCog, Shield, Briefcase, CheckSquare, Globe, UserPlus, Search, Upload } from 'lucide-react';
import { MenuItem } from './types';

export const navigationItems: MenuItem[] = [
  {
    id: 'user-management',
    label: 'User Management',
    icon: Users,
    children: [
      { id: 'user-setup', label: 'User Setup', icon: UserCog, path: '/users/setup' },
      { id: 'roles', label: 'Roles and Privileges', icon: Shield, path: '/users/roles' }
    ]
  },
  {
    id: 'requisition',
    label: 'Requisition Management',
    icon: FileText,
    children: [
      { id: 'job-setup', label: 'Job Setup', icon: Briefcase, path: '/requisition/jobs' },
      { id: 'approval-setup', label: 'Approval Template Setup', icon: CheckSquare, path: '/requisition/approvals' },
      { id: 'job-posting', label: 'Job Posting', icon: Globe, path: '/requisition/posting' }
    ]
  },
  {
    id: 'candidate',
    label: 'Candidate Sourcing',
    icon: UserSearch,
    children: [
      { id: 'candidate-details', label: 'Candidate Details', icon: UserPlus, path: '/candidates/details' },
      { id: 'candidate-search', label: 'Candidate Search', icon: Search, path: '/candidates/search' },
      { id: 'candidate-import', label: 'Candidate Import', icon: Upload, path: '/candidates/import' }
    ]
  },
  {
    id: 'vendor',
    label: 'Vendor Management',
    icon: Building2,
    path: '/vendors'
  },
  {
    id: 'assessment',
    label: 'Assessment Management',
    icon: ClipboardList,
    path: '/assessments'
  }
];