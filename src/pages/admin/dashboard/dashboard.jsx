
import AdminSidebar from "./adminsidebar";
import AdminCard from "./admincard";

export default function AdminDashboard() {
  return (
    <div className="admin-dashboard-container">
      <AdminSidebar />
      <div className="admin-content">
        <h1>Dashboard</h1>
        <p>Welcome back, Admin — here's what's happening.</p>
        <AdminCard title="Total Users">1,234</AdminCard>
        <AdminCard title="Blog Posts">38</AdminCard>
        <AdminCard title="New Today">6</AdminCard>
        <AdminCard title="Inactive Users">3</AdminCard>
      </div>
    </div>
  );
}
