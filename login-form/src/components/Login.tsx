import React, { useState } from "react";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Username: ", username);
    console.log("Password: ", password);
    console.log("Remember Me: ", rememberMe);
  };

  return (
    <div>
      {!showForgotPassword ? (
        <div style={styles.loginPanel}>
          <h2 style={styles.loginTitle}>Login</h2>
          <p style={styles.welcomeMessageTalentFlux}>Welcome to TalentFlux!</p>

          <div style={styles.usernameField}>
            <label style={styles.usernameLabel}>Username</label>
            <div style={styles.inputBoxContainer}>
              <FaUser style={styles.logo} />
              <input
                type="text"
                placeholder="Type your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={styles.inputBox}
              />
              <div style={styles.inputUnderline}></div>
            </div>
          </div>

          <div style={styles.passwordField}>
            <label style={styles.passwordLabel}>Password</label>
            <div style={styles.inputBoxContainer}>
              <FaLock style={styles.logo} />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Type your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={styles.inputBox}
              />
              <div style={styles.inputUnderline}></div>
              <span
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  cursor: "pointer",
                  position: "absolute",
                  right: "10px",
                  top: "12px",
                }}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          <div style={styles.rememberMeContainer}>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
              style={styles.rememberMeCheckbox}
            />
            <span style={styles.rememberMeText}>Remember Me</span>
            <span
              style={styles.forgotPasswordText}
              onClick={() => setShowForgotPassword(true)}
            >
              Forgot Password?
            </span>
          </div>

          <button
            onClick={handleSubmit}
            style={styles.loginButton}
          >
            Log in
          </button>
        </div>
      ) : (
        <div style={styles.forgotPasswordPanel}>
          <h2 style={styles.troubleLoginTitle}>Trouble logging in?</h2>
          <p style={styles.welcomeMessageResetPassword}>
            Provide the email address associated with your account to recover
            your password.
          </p>

          {/* Email Label and Input Box */}
          <div style={{ textAlign: "left", width: "100%", marginTop: "20px" }}>
            <label style={styles.emailLabel}>
              Email <span style={{ color: "red" }}>*</span>
            </label>
            <div style={styles.inputBoxContainer}>
              <input
                type="email"
                placeholder="Type your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={styles.emailInputBox}
              />
            </div>
          </div>

          <button
            onClick={() => console.log("Send login link")}
            style={styles.sendLoginLinkButton}
          >
            Send login link
          </button>

          {/* Horizontal line */}
          <hr style={styles.dividerLine} />

          <button
            onClick={() => setShowForgotPassword(false)}
            style={styles.backToLoginButton}
          >
            Back to Login
          </button>
        </div>
      )}
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  loginPanel: {
    backgroundColor: "#ffffff",
    width: "90%",
    maxWidth: "400px",
    padding: "40px",
    borderRadius: "15px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
    textAlign: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  forgotPasswordPanel: {
    backgroundColor: "#ffffff",
    width: "90%",
    maxWidth: "400px",
    padding: "50px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
    textAlign: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  loginTitle: {
    fontSize: "2rem",
    fontWeight: "bold",
    marginTop: "0px",
    marginBottom: "0px",
    color: "black",
  },
  welcomeMessageTalentFlux: {
    fontSize: "1.4rem",
    color: "#555",
    fontWeight: "bold",
    marginTop: "10px",
  },
  usernameField: { textAlign: "left", width: "100%", marginTop: "20px" },
  usernameLabel: { fontSize: "18px", fontWeight: "bold", color: "#333" },
  inputBoxContainer: {
    display: "flex",
    alignItems: "center",
    position: "relative",
  },
  logo: { width: "20px", height: "20px", marginRight: "10px" },
  inputBox: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    border: "none",
  },
  inputUnderline: {
    position: "absolute",
    bottom: "0",
    left: "0",
    width: "100%",
    height: "2px",
    backgroundColor: "#333",
  },
  passwordField: { textAlign: "left", width: "100%", marginTop: "30px" },
  passwordLabel: { fontSize: "18px", fontWeight: "bold", color: "#333" },
  rememberMeContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: "15px",
  },
  rememberMeText: {
    fontSize: "16px",
    color: "#333",
    marginLeft: "8px",
    fontWeight: "bold",
  },
  rememberMeCheckbox: {
    transform: "scale(1.4)",
    marginTop: "4px",
  },
  forgotPasswordText: {
    color: "blue",
    fontSize: "16px",
    marginLeft: "auto",
    cursor: "pointer",
  },
  emailLabel: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#333",
  },
  emailInputBox: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    border: "none",
    marginTop: "10px",
    borderBottom: "2px solid #333",
  },
  sendLoginLinkButton: {
    marginTop: "20px",
    width: "100%",
    padding: "12px",
    backgroundColor: "#4CAF50",
    color: "white",
    fontSize: "16px",
    fontWeight: "bold",
    borderRadius: "20px",
    border: "none",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.4)",
  },
  backToLoginButton: {
    marginTop: "20px",
    width: "100%",
    padding: "12px",
    backgroundColor: "#f0f0f0",
    color: "#333",
    fontSize: "16px",
    fontWeight: "bold",
    borderRadius: "0px",
    border: "none",
  },
  dividerLine: {
    marginTop: "20px",
    marginBottom: "20px",
    borderColor: "#ddd",
    borderStyle: "solid",
    borderWidth: "0.5px",
  },
  loginButton: {
    marginTop: "35px",
    width: "100%",
    padding: "12px",
    background: "linear-gradient(135deg, #6e7dff, #9d7eff)",
    color: "white",
    fontSize: "20px",
    fontWeight: "bold",
    borderRadius: "20px",
    border: "none",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.4)",
  },
};

// Media Queries for responsiveness
const mediaQueries = {
  "@media (max-width: 768px)": {
    loginPanel: {
      width: "80%",
      maxWidth: "350px",
    },
    forgotPasswordPanel: {
      width: "80%",
      maxWidth: "350px",
    },
    loginTitle: {
      fontSize: "1.5rem",
    },
    welcomeMessageTalentFlux: {
      fontSize: "1.2rem",
    },
  },
  "@media (max-width: 480px)": {
    loginPanel: {
      width: "95%",
      maxWidth: "300px",
    },
    forgotPasswordPanel: {
      width: "95%",
      maxWidth: "300px",
    },
    loginTitle: {
      fontSize: "1.2rem",
    },
    welcomeMessageTalentFlux: {
      fontSize: "1rem",
    },
  },
};

export default Login;
