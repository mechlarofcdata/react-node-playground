import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./profile.css";

// user profile functional component 
function UserProfile() {

  // naviagte obj initialize
  const navigate = useNavigate();

  // error state object 
  const [error, setError] = useState("");

  // user data object 
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    bio: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  // initialize default user 
  useEffect(() => {

    // get data from browser local storage and store it as a JS obj
    const storedUser = JSON.parse(localStorage.getItem("user"));
    console.log(storedUser);

    if (!storedUser) {
      // create default user if none exists
      const defaultUser = {
        userName: "User1",
        password: "1234",
        firstName: "Aditi",
        lastName: "Shukla",
        email: "aditi@gmail.com",
        bio: "Do it like it is a piece of cake for you",
      };

      localStorage.setItem("user", JSON.stringify(defaultUser));

      // updating previous state dta
      setData((prev) => ({ ...prev, ...defaultUser }));
    } else {
      setData((prev) => ({ ...prev, ...storedUser }));
    }
  }, []);

  // handle input change
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // save profile
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile Saved:", data);
    const updatedUser = {
      userName: data.userName,
      password: data.password,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      bio: data.bio,
    };

    localStorage.setItem("user", JSON.stringify(updatedUser));
    alert("Profile updated successfully");
  };

  // update password
  const handlePasswordUpdt = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    // checking current entered pw is same with stored or not 
    if (data.currentPassword !== storedUser.password) {
      setError("Current password is incorrect");
      return;
    }

    // checking new password and Confirm pw are same or not
    if (data.newPassword !== data.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const updatedUser = {
      ...storedUser,   // take all user data from storage
      password: data.newPassword,
    };

    localStorage.setItem("user", JSON.stringify(updatedUser));

    setData((prev) => ({
      ...prev,
      password: data.newPassword,
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    }));

    setError("");
    alert("Password updated successfully");
  };

  // logout
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");  // remove logged-In status from local storage
    navigate("/login");
  };

  return (
    <div className="main">
      <aside className="sidebar" style={{ width: "300px" }}>
        <div className="sidebar-card">

          {/* user first name and last name first char for using it in ava */}
          <div className="profile-avatar">
            {data.firstName[0]}
            {data.lastName[0]}
          </div>

          {/* user first and last name */}
          <div className="profile-name">
            {data.firstName} {data.lastName}
          </div>
          <div className="profile-username">{data.userName}</div>
          <div className="profile-badge">
            <span className="online-dot"></span>Online
          </div>

          <div className="stat-row">
            <div className="stat">
              <div className="stat-val">23</div>
              <div className="stat-label">Posts read</div>
            </div>
            <div className="stat">
              <div className="stat-val">Apr 10</div>
              <div className="stat-label">Joined</div>
            </div>
          </div>
        </div>

        {/* logout button */}
        <div className="card" style={{ padding: "14px" }}>
          <button
            onClick={handleLogout}
            style={{
              color: "#e53e3e",
              background: "none",
              border: "none",
              cursor: "pointer",
              fontWeight: "600",
            }}>
            Sign out
          </button>
        </div>
      </aside>

      <div className="content">
        {/* profile section for updting */}
        <div className="card">
          <div className="card-header">
            <div>
              <div className="card-title">Personl Information</div>
              <div className="card-sub">
                Update your name, email, and bio.
              </div>
            </div>
            <span className="tag tag-green">Saved</span>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid2">
              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={data.firstName}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={data.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label>UserName</label>
              <input
                type="text"
                name="userName"
                value={data.userName}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={data.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Bio</label>
              <textarea
                name="bio"
                value={data.bio}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Save changes
            </button>
          </form>
        </div>

        {/* Password updating section */}
        <div className="card">
          <div className="card-header">
            <div>
              <div className="card-title">Chnge password</div>
            </div>
          </div>

          <form onSubmit={handlePasswordUpdt}>
            <input
              type="password"
              name="currentPassword"
              placeholder="Current password"
              value={data.currentPassword}
              onChange={handleChange}
            />

            <input
              type="password"
              name="newPassword"
              placeholder="New password"
              value={data.newPassword}
              onChange={handleChange}
            />

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              value={data.confirmPassword}
              onChange={handleChange}
            />

            {error && <p style={{ color: "red" }}>{error}</p>}

            <button type="submit" className="btn btn-primary">
              Update Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;