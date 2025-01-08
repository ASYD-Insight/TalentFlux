import React from 'react';
import Header from './components/Header';  // Import Header from components directory
import Login from './components/Login';    // Import Login from components directory

const App: React.FC = () => {
  return (
    <div style={styles.appContainer}>
      <Header />
      <Login />
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  appContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
    paddingTop: '80px', // Space for the fixed header
    paddingBottom: '20px',
  },
};

export default App;
