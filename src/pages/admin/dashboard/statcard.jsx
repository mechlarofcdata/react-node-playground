export default function StatsCard({ title, value, change, type }) {
  return (
    <div className="dashboard-stat-card">
      <div className="dashboard-stat-val">{value}</div>
      <div className="dashboard-stat-label">{title}</div>
      <div className={`dashboard-stat-change ${type}`}>{change}</div>
    </div>
  );
}
