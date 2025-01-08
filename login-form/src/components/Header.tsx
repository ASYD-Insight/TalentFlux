import React, { CSSProperties } from "react";
import { Zap } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logoContainer}>
        <Zap style={styles.logo} />
      </div>
      <h1 style={styles.appName}>TalentFlux</h1>
    </header>
  );
};

const styles: { [key: string]: CSSProperties } = {
  header: {
    padding: "16px 25px",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 1000,
    display: "flex",
    alignItems: "center",
     // Adjusted for space between logo and app name
  },
  logoContainer: {
    marginRight: "5px",
  },
  logo: {
    width: "50px",
    height: "40px",
  },
  appName: {
    fontSize: "1.7rem",
    background: "linear-gradient(to right, #3b82f6, #8b5cf6)",
    WebkitBackgroundClip: "text",
    color: "transparent",
    fontWeight: "bold",
  },
};

// Media Queries for responsiveness
const mediaQueries = {
  "@media (max-width: 768px)": {
    header: {
      padding: "10px 15px",
    },
    logo: {
      width: "40px",
      height: "30px",
    },
    appName: {
      fontSize: "1.4rem",
    },
  },
  "@media (max-width: 480px)": {
    header: {
      padding: "8px 10px",
    },
    logo: {
      width: "30px",
      height: "25px",
    },
    appName: {
      fontSize: "1.2rem",
    },
  },
};

export default Header;
