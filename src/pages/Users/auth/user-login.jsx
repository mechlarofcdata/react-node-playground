import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./login.css";

// login function component
function UserLogin() {
  const navigate = useNavigate();

  // state object for update the state from current
  const [data, setData] = useState({
    userName: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  // check logged in , if yes navigate to usrblog, (functional component)
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
      navigate("/layout/usrblog");
    }
  }, [navigate]);

  // set data from user 
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // checking fields are not empty
    if (!data.userName || !data.password) {
      alert("Fill all fields");
      return;
    }

    const storedUser = JSON.parse(localStorage.getItem("user"));
    console.log(storedUser);

    // checking if data provided by user is matched or not , for access grant
    if (
      storedUser &&
      data.userName === storedUser.userName &&
      data.password === storedUser.password
    ) {
      // set data in localStorage and give access for navigate
      localStorage.setItem("isLoggedIn", "true");
      //localStorage.setItem("user", data.userName);
      navigate("/layout/usrblog");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="split-layout">
      <div className="left-panel">
        <div className="left-deco"></div>
        <div className="left-deco2"></div>

        <div className="brand-logo">
          <div className="brand-icon">⏺</div>
          <div className="brand-text">MyPlatform</div>
        </div>

        <div className="tagline">
          Your space to <br />
          <em>read, connect,</em> <br />
          and explore.
        </div>

        <p className="sub">
          Join thousands of users reading fresh content and managing profiles.
        </p>

        <div className="features">
          <div className="feat">Fresh blog content added regularly</div>
          <div className="feat">Personalised user profile</div>
          <div className="feat">Secure and private account</div>
        </div>
      </div>

      <div className="right-panel">
        <div className="form-header">
          <div className="form-title">Welcome back</div>
          <div className="form-sub">
            Sign in to continue to your account
          </div>
        </div>

        <div className="tabs">
          <div className="tab active">Log in</div>
          <div className="tab">Sign up</div>
        </div>

        {/* react managed form for data enter by user */}
        <form onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            type="text"
            name="userName"
            placeholder="Enter your username"
            value={data.userName}
            onChange={handleChange}
          />

          <label>Password</label>
          <div className="pw-row">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter password"
              value={data.password}
              onChange={handleChange}
            />
            <button
              type="button"
              className="pw-eye"
              onClick={() => setShowPassword(!showPassword)}
            >
              👁
            </button>
          </div>

          <div className="forgot-row">
            <span className="forgot-link">Forgot password?</span>
          </div>

          <button className="btn-login" type="submit">
            Sign in to my account
          </button>
        </form>

        <div className="divider">
          <div className="divider-line"></div>
          <div className="divider-text">or continue with</div>
          <div className="divider-line"></div>
        </div>

        <button className="btn-google">Continue with Google</button>

        <div className="signup-row">
          Don't have an account?{" "}
          <Link to="/register">Create one free</Link>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;