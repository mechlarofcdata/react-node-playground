import { NavLink } from "react-router-dom";


export default function Sidebar() {
  return (
    <aside className="dashboard-sidebar">
      <div className="dashboard-sidebar-logo">
        <div className="dashboard-sidebar-icon">
          <svg viewBox="0 0 24 24">
            <path d="M3 12h18M12 3v18" />
          </svg>
        </div>
        <div className="dashboard-sidebar-name">AdminPanel</div>
      </div>

     
      <div className="dashboard-nav-section">Main</div>

      <NavLink
        to="/admin/dashboard"
        className={({ isActive }) =>
          isActive
            ? "dashboard-nav-item dashboard-active"
            : "dashboard-nav-item"
        }
      >
        <svg viewBox="0 0 24 24">
          <path d="M3 12l9-9 9 9v9H3z" />
        </svg>
        Dashboard
      </NavLink>

      <NavLink
        to="/admin/users"
        className={({ isActive }) =>
          isActive
            ? "dashboard-nav-item dashboard-active"
            : "dashboard-nav-item"
        }
      >
        <svg viewBox="0 0 24 24">
          <path d="M16 14a4 4 0 1 0-8 0" />
          <circle cx="12" cy="7" r="4" />
        </svg>
        Users
      </NavLink>

      <NavLink
        to="/admin/blog"
        className={({ isActive }) =>
          isActive
            ? "dashboard-nav-item dashboard-active"
            : "dashboard-nav-item"
        }
      >
        <svg viewBox="0 0 24 24">
          <path d="M4 4h16v16H4z" />
          <path d="M8 8h8M8 12h8M8 16h5" />
        </svg>
        Blog Posts
      </NavLink>

      
      <div className="dashboard-nav-section">Settings</div>

      <NavLink
        to="#"
        className={({ isActive }) =>
          isActive
            ? "dashboard-nav-item"
            : "dashboard-nav-item"
        }
      >
        <svg viewBox="0 0 24 24">
          <path d="M12 8a4 4 0 100 8 4 4 0 000-8z" />
        </svg>
        Configuration
      </NavLink>

      <NavLink to="/admin/" className="dashboard-nav-item">
        <svg viewBox="0 0 24 24">
          <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" />
          <path d="M16 17l5-5-5-5M21 12H9" />
        </svg>
        Sign out
      </NavLink>

      <div className="dashboard-sidebar-footer">
        <div className="dashboard-user-chip">
          <div className="dashboard-avatar">AD</div>
          <div>
            <div className="dashboard-user-name">Admin User</div>
            <div className="dashboard-user-role">Super Admin</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
