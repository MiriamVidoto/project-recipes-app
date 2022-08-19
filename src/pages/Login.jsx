import React from 'react';
import './style/login.css';

function Login() {
  return (
    <div className="container">
      <input
        type="email"
        className="inputLogin"
        placeholder="Type your email..."
        data-testid="email-input"
      />
      <input
        type="password"
        className="inputLogin"
        placeholder="Type your password..."
        data-testid="password-input"
      />
      <button
        type="button"
        className="buttonLogin"
        data-testid="login-submit-btn"
      >
        Enter
      </button>
    </div>
  );
}

export default Login;
