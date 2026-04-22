import { Link } from "react-router-dom";
export default function AdminSidebar() {
  return (
    <div className="admin-sidebar">
      <h2>Admin Dashboard</h2>
      <ul>
        <li>Main</li>
        <li>
          <Link to="/admin/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/admin/users">Users</Link>
        </li>
        <li>
          <Link to="/admin/content">Blog Posts</Link>
        </li>
        <li>Setting</li>
        <li>
          <Link to="/admin/analytics">Configuration</Link>
        </li>
        <li>
          <Link to="/admin">Sign out</Link>
        </li>
      </ul>
    </div>
  );
}
