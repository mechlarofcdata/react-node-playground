export default function Topbar() {
  return (
    <div className="dashboard-topbar">
      <div>
        <div className="dashboard-page-title">Dashboard</div>
        <div className="dashboard-page-sub">
          Welcome back, Admin — here's what's happening.
        </div>
      </div>
      <div className="dashboard-topbar-right">
        <button className="dashboard-btn-sm dashboard-btn-primary-sm">
          + Add Blog Post
        </button>
      </div>
    </div>
  );
}
