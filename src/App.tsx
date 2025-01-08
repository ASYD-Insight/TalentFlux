import React, { useState } from 'react';
import { Header } from './components/layout/Header';
import { Sidebar } from './components/layout/Sidebar';
import { HeroSection } from './components/home/HeroSection';
import { UserManagement } from './components/users/UserManagement';
import { RolesPrivilegesManagement } from './components/users/roles/RolesPrivilegesManagement';

function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [currentRoute, setCurrentRoute] = useState('home');

  const handleNavigation = (path: string) => {
    setCurrentRoute(path);
  };

  const renderContent = () => {
    switch (currentRoute) {
      case '/users/setup':
        return <UserManagement />;
      case '/users/roles':
        return <RolesPrivilegesManagement />;
      default:
        return <HeroSection />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header toggleSidebar={() => setIsSidebarCollapsed(!isSidebarCollapsed)} />
      <Sidebar
        isCollapsed={isSidebarCollapsed}
        toggleSidebar={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        onNavigate={handleNavigation}
      />
      <main className={`transition-all duration-300 ${
        isSidebarCollapsed ? 'ml-16' : 'ml-64'
      } pt-16`}>
        {renderContent()}
      </main>
    </div>
  );
}

export default App;