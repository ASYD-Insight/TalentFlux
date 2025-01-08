export interface MenuItem {
  id: string;
  label: string;
  icon?: React.ComponentType;
  path?: string;
  children?: MenuItem[];
}

export interface NavigationItemProps {
  item: MenuItem;
  isCollapsed: boolean;
  level?: number;
}