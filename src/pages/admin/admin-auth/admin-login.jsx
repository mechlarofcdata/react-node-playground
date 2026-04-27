import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import "./adminlogin.css";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (isLoggedIn) {
      navigate("/admin/dashboard");
    }
  }, []);

  function handleSubmit() {
    setError("");

    if (email === "" || password === "") {
      setError("Please fill in all fields!");
      return;
    }

    // credential check is being done here
    if (email === "admin@mail.com" && password === "1234") {
      localStorage.setItem("isLoggedIn", "true");

      // redirect to admin dashboard
      navigate("/admin/dashboard");
    } else {
      setError("Invalid credentials");
    }
  }

  return (
    <div className="admin-page">
      <div className="admin-card">
        <h1>AdminPanel</h1>
        <p className="admin-subtitle">Sign in to manage your platform</p>
        <div className="admin-badge">🔐 Administrator Access</div>

        {error && <div className="admin-error-box">⚠ {error}</div>}

        <label>Email address</label>
        <input
          type="email"
          placeholder="admin@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="admin-submit-btn" onClick={handleSubmit}>
          Sign in to Dashboard
        </button>

        <p className="admin-forgot">
          Forgot password? <a href="#">Reset here</a>
        </p>
        <p className="admin-footer-note">
          Protected access — authorized personnel only
        </p>
      </div>
    </div>
  );
}

export default AdminLogin;
